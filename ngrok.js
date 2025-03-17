const ngrok = require('@ngrok/ngrok');
const http = require('http');

async function waitForApp() {
  for (let i = 0; i < 20; i++) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get('http://localhost:3000', {
          timeout: 1000,
          headers: {
            'Accept': 'text/html'
          }
        }, (res) => {
          if (res.statusCode === 200) {
            resolve(true);
          } else {
            reject(new Error(`HTTP Status: ${res.statusCode}`));
          }
        });
        
        req.on('error', (err) => {
          reject(err);
        });
        
        req.on('timeout', () => {
          req.destroy();
          reject(new Error('Request timeout'));
        });
      });
      return true;
    } catch (error) {
      console.log('Waiting for React app to start... (attempt ' + (i + 1) + ' of 5)');
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }
  return false;
}

async function connect() {
  try {
    console.log('Checking if React app is running...');
    const isAppRunning = await waitForApp();
    
    if (!isAppRunning) {
      console.error('React app is not running. Please start it first with "npm start"');
      process.exit(1);
    }

    const listener = await ngrok.connect({
      addr: 3000,
      authtoken: '2uMpN8EY2UCIf4mpWN9Yuz0pn9a_6aexBAGKRdJjvpJNUqzXs',
      region: 'us',
      proto: 'http',
      bind_tls: true,
      onStatusChange: status => {
        console.log('Ngrok Status:', status);
      }
    });
    
    const url = await listener.url();
    console.log(`Ngrok tunnel established at: ${url}`);
    
    process.on('SIGINT', async () => {
      await listener.close();
      process.exit(0);
    });
  } catch (error) {
    console.error('Error connecting to ngrok:', error);
    process.exit(1);
  }
}

connect();