# Sistema Integrado de Pagamento PIX 🚀

Integração frontend-backend para processamento de pagamentos via PIX utilizando Mercado Pago. Oferece interface amigável com QR Code e gestão completa do fluxo de pagamento.

![Fluxo de Pagamento](https://example.com/path-to-payment-flow-diagram.png) <!-- Adicione uma imagem ilustrativa se disponível -->

## Pré-requisitos 📋

**Backend**
- Node.js v16+
- Conta de desenvolvedor no [Mercado Pago](https://www.mercadopago.com.br/)
- Token de acesso (Sandbox ou Produção)

**Frontend**
- React 17+
- NPM/Yarn
- Conexão com backend rodando

## Configuração Rápida ⚡

### Backend
1. Instale as dependências:
```bash
npm install express cors dotenv mercadopago
Crie o arquivo .env:

env
Copy
MP_ACCESS_TOKEN=SEU_ACCESS_TOKEN_AQUI
PORT=3333
Inicie o servidor:

bash
Copy
node app.js
Frontend
Configure o ambiente:

env
Copy
REACT_APP_API_URL=http://localhost:3333
Instale dependências e inicie:

bash
Copy
npm install
npm start
Componente de Pagamento 💎
Implementação
jsx
Copy
import PaymentBrick from './components/pagamento/Payment';

<PaymentBrick 
  productData={{
    title: "Smartphone Premium",
    unit_price: 2499.99,
    quantity: 1
  }}
/>
Propriedades
Parâmetro	Tipo	Descrição	Exemplo
title	string	Nome do produto	"Notebook Gamer"
unit_price	number	Preço unitário	1500.00
quantity	number	Quantidade	2
Arquitetura do Sistema 🏗️
mermaid
Copy
graph TD
  A[Frontend] -->|Envia dados| B(Backend)
  B -->|Processa pagamento| C[Mercado Pago]
  C -->|Retorna QR Code| B
  B -->|Exibe dados| A
Funcionalidades Principais ✨
✅ Geração dinâmica de QR Codes PIX

✅ Visualização de comprovante de pagamento

✅ Copiar código PIX com um clique

✅ Exibição em tempo real do status

✅ Tratamento de erros detalhado

✅ Interface responsiva

Fluxo Completo 🔄
Usuário seleciona produto

Frontend coleta dados do pedido

Backend cria preferência no MP

Sistema exibe QR Code e opções

Mercado Pago processa pagamento

Status atualizado via Webhook (a implementar)

Webhooks e Produção 🛠️
Para ambiente de produção:

javascript
Copy
// Adicione no backend (app.js)
app.post('/payment-webhook', async (req, res) => {
  // Implementar lógica de atualização de status
});
Configurações obrigatórias:

URLs de notificação no painel do Mercado Pago

Autenticação de requisições

Certificado SSL para HTTPS

Testando o Sistema 🧪
Use credenciais Sandbox

Simule pagamentos com:

Email: test_user_123456@testuser.com

CPF: 123.456.789-09

Verifique notificações no painel MP

Segurança 🔒
Recomendações essenciais:

bash
Copy
# Backend
npm install helmet rate-limiter

# Frontend
npm install crypto-js
Validar todos os dados de entrada

Implementar CORS restritivo

Usar variáveis de ambiente para credenciais

Atualizar dependências regularmente

Roadmap 🗺️
Versão	Novos Recursos
1.1	Webhooks para atualização de status
1.2	Suporte a múltiplos métodos de pagamento
2.0	Painel administrativo de transações
S