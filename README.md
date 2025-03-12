# DealHave Frontend

## Sobre o Projeto
DealHave é uma aplicação web desenvolvida em React que oferece uma interface moderna e responsiva para um sistema de e-commerce, integrando com o Mercado Pago para processamento de pagamentos.

## Tecnologias Utilizadas
- React 18.2.0
- React Router DOM 7.2.0
- Redux Toolkit e React Redux para gerenciamento de estado
- Bootstrap 5.3.3 e React Bootstrap para estilização
- Axios 1.6.8 para requisições HTTP
- MercadoPago SDK para integração de pagamentos
- React Toastify para notificações
- Yup para validação de formulários
- React Icons para ícones
- React Rating Stars para avaliações
- React Modal para modais interativos

## Pré-requisitos
- Node.js (versão LTS recomendada)
- NPM ou Yarn

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias.

## Executando o Projeto

Para iniciar o servidor de desenvolvimento:
```bash
npm start
```

O aplicativo estará disponível em `http://localhost:3000`

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm build`: Cria a versão de produção
- `npm test`: Executa os testes
- `npm eject`: Ejeta as configurações do Create React App

## Estrutura do Projeto

```
dealhave-frontend/
├── public/           # Arquivos públicos
├── src/              # Código fonte
│   ├── components/   # Componentes reutilizáveis
│   ├── pages/        # Páginas da aplicação
│   ├── services/     # Serviços e APIs
│   ├── store/        # Configuração do Redux
│   ├── styles/       # Estilos globais
│   └── utils/        # Utilitários e helpers
├── .gitignore        # Arquivos ignorados pelo git
├── package.json      # Dependências e scripts
└── README.md         # Este arquivo
```

## Recursos e Funcionalidades

- Integração com Mercado Pago para processamento de pagamentos
- Sistema de roteamento com React Router
- Gerenciamento de estado global com Redux
- Interface responsiva com Bootstrap
- Sistema de notificações com React Toastify
- Validação de formulários com Yup
- Sistema de avaliações e comentários
- Filtros avançados de produtos
- Carrinho de compras persistente
- Painel de administração
- Sistema de busca em tempo real
- Gerenciamento de perfil de usuário
- Histórico de pedidos
- Lista de desejos

## Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit de suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença [MIT](https://choosealicense.com/licenses/mit/)