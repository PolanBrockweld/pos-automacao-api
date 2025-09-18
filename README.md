# API de Cadastro e Autenticação

Esta API foi criada para fins de aprendizado de automação de testes de API. Ela permite o registro, autenticação de usuários, níveis de acesso e gerenciamento de alunos.

## Estrutura

- REST: arquivos principais na raiz
- GraphQL: estrutura em `/graphql`

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:
   ```powershell
   npm install express apollo-server-express graphql jsonwebtoken bcryptjs swagger-ui-express mocha supertest sinon chai
   ```

## Como rodar

- Para iniciar o servidor REST:
  ```powershell
  node server.js
  ```
- Para iniciar o servidor GraphQL:
  ```powershell
  node graphql/server.js
  ```
- Acesse a documentação Swagger em [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints REST

### Autenticação
- `POST /auth/register` — Cria um novo usuário (username, password, role)
- `POST /auth/login` — Autentica e retorna um JWT

### Cadastro de Alunos
- `GET /CadastroAluno` — Lista todos os alunos
- `POST /CadastroAluno` — Cria novo aluno (requer autenticação)

## Endpoints GraphQL

- Query `alunos`: lista todos os alunos
- Query `aluno(id: ID!)`: busca aluno por id
- Mutation `criarAluno(nome: String!, email: String!)`: cria novo aluno

## Níveis de acesso
- Usuário comum: pode criar e consultar alunos
- Admin: pode acessar endpoints restritos (implemente conforme necessário)

## Testes

- Para rodar os testes REST:
  ```powershell
  npm test
  ```
- Para rodar os testes GraphQL:
  ```powershell
  npm test graphql/tests/graphql.test.js
  ```

## Observações
- O banco de dados é em memória, os dados são perdidos ao reiniciar.
- Para endpoints protegidos, envie o JWT no header: `Authorization: Bearer <token>`

---

API pronta para automação de testes!
