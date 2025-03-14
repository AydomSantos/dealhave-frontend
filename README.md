# DealHave Frontend

## Visão Geral
DealHave é uma plataforma de e-commerce moderna desenvolvida com React, oferecendo uma experiência de compra intuitiva e segura. O sistema integra-se com o Mercado Pago para processamento de pagamentos e apresenta uma arquitetura robusta focada em performance e escalabilidade.

## Stack Tecnológica

### Core
- React 18.2.0 - Framework principal


### Estado e Roteamento
- Redux Toolkit - Gerenciamento de estado global
- React Redux - Integração Redux com React
- React Router DOM 7.2.0 - Roteamento

### UI/UX
- Bootstrap 5.3.3 - Framework CSS
- React Bootstrap - Componentes Bootstrap
- React Icons - Biblioteca de ícones
- React Rating Stars - Componente de avaliação
- React Modal - Gerenciamento de modais
- React Toastify - Sistema de notificações

### Dados e Validação
- Axios 1.6.8 - Cliente HTTP
- Yup - Validação de formulários
- MercadoPago SDK - Integração de pagamentos

## Arquitetura

### Estrutura de Diretórios
```
dealhave-frontend/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── common/         # Componentes base
│   │   ├── layout/         # Componentes de layout
│   │   └── features/       # Componentes específicos
│   ├── pages/              # Páginas da aplicação
│   ├── services/           # Serviços e integrações
│   │   ├── api/           # Configuração e endpoints
│   │   └── payment/       # Serviços de pagamento
│   ├── store/              # Configuração Redux
│   │   ├── slices/        # Redux slices
│   │   └── hooks/         # Custom hooks
│   ├── styles/             # Estilos globais
│   ├── utils/              # Utilitários
│   └── App.tsx            # Componente raiz
├── tests/                  # Testes
└── config/                 # Configurações
```

## Funcionalidades Principais

### Sistema de Autenticação
```typescript
// Exemplo de uso do hook de autenticação
const { user, login, logout } = useAuth();

// Login
await login({
  email: 'usuario@email.com',
  password: 'senha123'
});
```

### Gerenciamento de Estado
```typescript
// Exemplo de slice Redux
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});
```

### Integração de Pagamentos
```typescript
// Exemplo de processamento de pagamento
const handlePayment = async (paymentData) => {
  try {
    const response = await paymentService.process(paymentData);
    return response.status;
  } catch (error) {
    console.error('Erro no pagamento:', error);
    throw error;
  }
};
```

## Configuração do Ambiente

### Pré-requisitos
- Node.js (v16.x ou superior)
- NPM (v8.x ou superior) ou Yarn
- Git

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/dealhave-frontend.git
cd dealhave-frontend
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
API_URL=http://localhost:3000
MERCADOPAGO_PUBLIC_KEY=sua_chave_publica
ENVIRONMENT=development
```

## Scripts de Desenvolvimento

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Testes
npm run test

# Lint
npm run lint

# Format
npm run format
```

## Padrões de Desenvolvimento

### Convenções de Código
- Utilize TypeScript para todos os arquivos
- Siga o ESLint e Prettier configurados
- Mantenha componentes pequenos e focados
- Documente componentes complexos

### Commits
Seguimos o padrão Conventional Commits:
```bash
feat: adiciona novo componente de carrinho
fix: corrige cálculo de frete
docs: atualiza documentação de API
refactor: melhora performance do checkout
```

### Branches
- `main`: Produção
- `develop`: Desenvolvimento
- `feature/*`: Novas funcionalidades
- `hotfix/*`: Correções urgentes

## Testes

### Unitários
```typescript
describe('CartComponent', () => {
  it('deve adicionar item ao carrinho', () => {
    render(<CartComponent />);
    // ... lógica do teste
  });
});
```

### E2E
```typescript
describe('Fluxo de Checkout', () => {
  it('deve completar compra com sucesso', () => {
    cy.visit('/checkout');
    // ... passos do teste
  });
});
```

## Deploy

### Produção
1. Merge na branch `main`
2. CI/CD automático via GitHub Actions
3. Deploy na plataforma de hospedagem

### Staging
1. Merge na branch `develop`
2. Deploy automático no ambiente de teste

## Monitoramento

### Logs
- Sentry para tracking de erros
- Google Analytics para métricas de usuário

### Performance
- Lighthouse para métricas web
- React Profiler para otimizações

## Contribuição

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Revisão de Código
- Dois aprovadores necessários
- Testes devem passar
- Documentação atualizada

## Suporte

- Issues: GitHub Issues
- Documentação: Wiki do projeto
- Chat: Discord da equipe

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## Autores

- **Equipe DealHave** - [GitHub](https://github.com/dealhave)

## Agradecimentos

- Contribuidores do projeto
- Comunidade React
- Usuários beta-testers