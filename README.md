Aqui está uma descrição detalhada da aplicação NG Cash API, incluindo sua funcionalidade, estrutura, tecnologias utilizadas, e instruções de configuração e uso.

## NG Cash API

A NG Cash API é uma aplicação desenvolvida para gerenciar contas de usuários, permitir login e autenticação, e facilitar transferências financeiras entre contas. A aplicação é construída utilizando Node.js, TypeScript, Express, Prisma, PostgreSQL e Docker.

### Funcionalidades

- **Registro de Usuário**: Permite que novos usuários se registrem fornecendo um nome de usuário único e uma senha.
- **Login de Usuário**: Usuários podem fazer login com nome de usuário e senha, recebendo um token JWT para autenticação.
- **Consulta de Usuários**: Permite que usuários autenticados consultem a lista de todos os usuários registrados e detalhes de um usuário específico.
- **Transferências Financeiras**: Usuários autenticados podem realizar transferências financeiras entre contas, desde que tenham saldo suficiente.
- **Consulta de Transações**: Usuários autenticados podem consultar suas transações financeiras (cash-out e cash-in).

### Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática.
- **Express**: Framework web para Node.js.
- **Prisma**: ORM (Object-Relational Mapping) para interagir com o banco de dados PostgreSQL.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Docker**: Plataforma para criar e executar contêineres de aplicativos.

### Estrutura do Projeto

```
ngcash-api/
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── userController.ts
│   │   └── transactionController.ts
│   ├── middlewares/
│   │   ├── authMiddleware.ts
│   │   └── errorMiddleware.ts
│   ├── services/
│   │   ├── authService.ts
│   │   ├── userService.ts
│   │   └── transactionService.ts
│   ├── utils/
│   │   ├── bcryptUtils.ts
│   │   └── jwtUtils.ts
│   ├── prisma/
│   │   └── schema.prisma
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md
```

### Configuração e Uso

#### Pré-requisitos

- **Node.js**
- **Docker**
- **Docker Compose**

#### Passos para Configuração

1. **Clone o repositório**:

   ```sh
   git clone https://github.com/SEU_USUARIO/ngcash-api.git
   cd ngcash-api
   ```

2. **Configurar variáveis de ambiente**:

   Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias, como a URL do banco de dados PostgreSQL.

   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/ngcash
   JWT_SECRET=your_secret_key
   ```

3. **Iniciar o Docker Compose**:

   ```sh
   docker-compose up --build
   ```

4. **Acessar a aplicação**:

   A aplicação estará disponível em `http://localhost:3000`.

### Endpoints

- **POST** `/auth/register`: Registrar um novo usuário.
- **POST** `/auth/login`: Fazer login.
- **GET** `/user`: Buscar todos os usuários (Requer autenticação).
- **GET** `/user/:id`: Buscar um usuário específico (Requer autenticação).
- **POST** `/transaction/transfer`: Fazer uma transferência (Requer autenticação).
- **GET** `/transaction/transactions`: Buscar transações (Requer autenticação).

### Contribuição

Contribuições são bem-vindas! Para contribuir, faça um fork do repositório, crie uma branch, implemente suas alterações e envie um pull request.

### Licença

Este projeto está licenciado sob a licença MIT.

### Exemplo de `.gitignore`

#### `.gitignore`

```gitignore
# Node modules
node_modules/

# Environment variables
.env

# Prisma client
prisma/client/
```

### Exemplo de `README.md`

#### `README.md`

```markdown
# NG Cash API

Esta é a API para o sistema NG Cash, que permite a criação de contas, login de usuários e transferências entre contas.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Docker

## Como Rodar o Projeto

### Pré-requisitos

- Node.js
- Docker
- Docker Compose

### Passos

1. Clone o repositório:

   ```sh
   git clone https://github.com/SEU_USUARIO/ngcash-api.git
   cd ngcash-api
   ```

2. Configure o arquivo `.env` com as variáveis de ambiente necessárias.

3. Inicie o Docker Compose:

   ```sh
   docker-compose up --build
   ```

4. Acesse a aplicação em `http://localhost:3000`.

## Endpoints

- **POST** `/auth/register` - Registrar um novo usuário
- **POST** `/auth/login` - Fazer login
- **GET** `/user` - Buscar todos os usuários (Requer autenticação)
- **GET** `/user/:id` - Buscar um usuário específico (Requer autenticação)
- **POST** `/transaction/transfer` - Fazer uma transferência (Requer autenticação)
- **GET** `/transaction/transactions` - Buscar transações (Requer autenticação)

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Basta fazer um fork, criar uma branch e enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT.
```

Siga estes passos para subir sua aplicação no GitHub e garantir que está bem documentada e configurada para uso e contribuição.