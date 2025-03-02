<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Sistema_Integrado_de_Pagamento_PIX__0"></a>Sistema Integrado de Pagamento PIX 🚀</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3">Integração frontend-backend para processamento de pagamentos via PIX utilizando Mercado Pago. Oferece interface amigável com QR Code e gestão completa do fluxo de pagamento.</p>
<h2 class="code-line" data-line-start=4 data-line-end=5 ><a id="Prrequisitos__4"></a>Pré-requisitos 📋</h2>
<p class="has-line-data" data-line-start="6" data-line-end="7"><strong>Backend</strong></p>
<ul>
<li class="has-line-data" data-line-start="7" data-line-end="8">Node.js v16+</li>
<li class="has-line-data" data-line-start="8" data-line-end="9">Conta de desenvolvedor no <a href="https://www.mercadopago.com.br/">Mercado Pago</a></li>
<li class="has-line-data" data-line-start="9" data-line-end="11">Token de acesso (Sandbox ou Produção)</li>
</ul>
<p class="has-line-data" data-line-start="11" data-line-end="12"><strong>Frontend</strong></p>
<ul>
<li class="has-line-data" data-line-start="12" data-line-end="13">React 17+</li>
<li class="has-line-data" data-line-start="13" data-line-end="14">NPM/Yarn</li>
<li class="has-line-data" data-line-start="14" data-line-end="16">Conexão com backend rodando</li>
</ul>
<h2 class="code-line" data-line-start=16 data-line-end=17 ><a id="Configurao_Rpida__16"></a>Configuração Rápida ⚡</h2>
<h3 class="code-line" data-line-start=18 data-line-end=19 ><a id="Backend_18"></a>Backend</h3>
<ol>
<li class="has-line-data" data-line-start="19" data-line-end="20">Instale as dependências:</li>
</ol>
<pre><code class="has-line-data" data-line-start="21" data-line-end="148" class="language-bash">npm install express cors dotenv mercadopago
Crie o arquivo .env:

env
Copy
MP_ACCESS_TOKEN=SEU_ACCESS_TOKEN_AQUI
PORT=<span class="hljs-number">3333</span>
Inicie o servidor:

bash
Copy
node app.js
Frontend
Configure o ambiente:

env
Copy
REACT_APP_API_URL=http://localhost:<span class="hljs-number">3333</span>
Instale dependências e inicie:

bash
Copy
npm install
npm start
Componente de Pagamento 💎
Implementação
jsx
Copy
import PaymentBrick from <span class="hljs-string">'./components/pagamento/Payment'</span>;

&lt;PaymentBrick 
  productData={{
    title: <span class="hljs-string">"Smartphone Premium"</span>,
    unit_price: <span class="hljs-number">2499.99</span>,
    quantity: <span class="hljs-number">1</span>
  }}
/&gt;
Propriedades
Parâmetro   Tipo    Descrição   Exemplo
title   string  Nome <span class="hljs-keyword">do</span> produto <span class="hljs-string">"Notebook Gamer"</span>
unit_price  number  Preço unitário  <span class="hljs-number">1500.00</span>
quantity    number  Quantidade  <span class="hljs-number">2</span>
Arquitetura <span class="hljs-keyword">do</span> Sistema 🏗️
mermaid
Copy
graph TD
  A[Frontend] --&gt;|Envia dados| B(Backend)
  B --&gt;|Processa pagamento| C[Mercado Pago]
  C --&gt;|Retorna QR Code| B
  B --&gt;|Exibe dados| A
Funcionalidades Principais ✨
✅ Geração dinâmica de QR Codes PIX

✅ Visualização de comprovante de pagamento

✅ Copiar código PIX com um clique

✅ Exibição em tempo real <span class="hljs-keyword">do</span> status

✅ Tratamento de erros detalhado

✅ Interface responsiva

Fluxo Completo 🔄
Usuário seleciona produto

Frontend coleta dados <span class="hljs-keyword">do</span> pedido

Backend cria preferência no MP

Sistema exibe QR Code e opções

Mercado Pago processa pagamento

Status atualizado via Webhook (a implementar)

Webhooks e Produção 🛠️
Para ambiente de produção:

javascript
Copy
// Adicione no backend (app.js)
app.post(<span class="hljs-string">'/payment-webhook'</span>, async (req, res) =&gt; {
  // Implementar lógica de atualização de status
});
Configurações obrigatórias:

URLs de notificação no painel <span class="hljs-keyword">do</span> Mercado Pago

Autenticação de requisições

Certificado SSL para HTTPS

Testando o Sistema 🧪
Use credenciais Sandbox

Simule pagamentos com:

Email: <span class="hljs-built_in">test</span>_user_123456@testuser.com

CPF: <span class="hljs-number">123.456</span>.<span class="hljs-number">789</span>-<span class="hljs-number">09</span>

Verifique notificações no painel MP

Segurança 🔒
Recomendações essenciais:

bash
Copy
<span class="hljs-comment"># Backend</span>
npm install helmet rate-limiter

<span class="hljs-comment"># Frontend</span>
npm install crypto-js
Validar todos os dados de entrada

Implementar CORS restritivo

Usar variáveis de ambiente para credenciais

Atualizar dependências regularmente

Roadmap 🗺️
Versão  Novos Recursos
<span class="hljs-number">1.1</span> Webhooks para atualização de status
<span class="hljs-number">1.2</span> Suporte a múltiplos métodos de pagamento
<span class="hljs-number">2.0</span> Painel administrativo de transações
</code></pre>
