import React, { useState, useEffect } from 'react';
import { FiCopy, FiCheckCircle, FiClock } from 'react-icons/fi';
import './Payment.css';

const PaymentSimulation = ({ totalAmount, onPaymentComplete }) => {
  const [countdown, setCountdown] = useState(900); // 15 minutes in seconds
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [copied, setCopied] = useState(false);

  // Mock PIX code
  const pixCode = '00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426655440000';

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Simulate payment confirmation after random time (between 5-15 seconds)
    const simulatePayment = setTimeout(() => {
      setPaymentStatus('completed');
      onPaymentComplete && onPaymentComplete();
    }, Math.random() * 10000 + 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(simulatePayment);
    };
  }, [onPaymentComplete]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}'`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="payment-simulation">
      <h2>Pagamento via PIX</h2>
      
      <div className="payment-amount">
        <span>Valor total com 15% de desconto:</span>
        <strong>R$ {(totalAmount * 0.85).toFixed(2)}</strong>
      </div>

      <div className="qr-code-container">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixCode)}`}
          alt="QR Code PIX"
          className="qr-code-image"
        />
      </div>

      <div className="pix-code-container">
        <p>Código PIX</p>
        <div className="pix-code-box">
          <span className="pix-code">{pixCode}</span>
          <button
            className={`copy-button ${copied ? 'copied' : ''}`}
            onClick={handleCopyCode}
          >
            {copied ? <FiCheckCircle /> : <FiCopy />}
          </button>
        </div>
      </div>

      <div className="payment-timer">
        <FiClock />
        <span>Tempo restante para pagamento: {formatTime(countdown)}</span>
      </div>

      {paymentStatus === 'completed' && (
        <div className="payment-success">
          <FiCheckCircle size={24} />
          <h3>Pagamento confirmado!</h3>
          <p>Seu pedido foi processado com sucesso.</p>
        </div>
      )}

      <div className="payment-instructions">
        <h3>Como pagar?</h3>
        <ol>
          <li>Abra o app do seu banco</li>
          <li>Escolha pagar via PIX</li>
          <li>Escaneie o QR Code ou cole o código PIX</li>
          <li>Confirme as informações e valor</li>
          <li>Confirme o pagamento</li>
        </ol>
      </div>
    </div>
  );
};

export default PaymentSimulation;