# API de Cadastro e Autenticação

Esta API foi criada para fins de aprendizado de automação de testes de API. Ela permite o registro, autenticação de usuários, níveis de acesso e gerenciamento de alunos.

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:
   ```powershell
   npm install express jsonwebtoken bcryptjs swagger-ui-express
   ```

## Como rodar

- Para iniciar o servidor:
  ```powershell
  node server.js
  ```
- Acesse a documentação Swagger em [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints

### Autenticação
- `POST /auth/register` — Cria um novo usuário (username, password, role)
- `POST /auth/login` — Autentica e retorna um JWT

### Cadastro de Alunos
- `GET /CadastroAluno` — Lista todos os alunos
- `POST /CadastroAluno` — Cria novo aluno (requer autenticação)

## Níveis de acesso
- Usuário comum: pode criar e consultar alunos
- Admin: pode acessar endpoints restritos (implemente conforme necessário)

## Testes
- Para testar com Supertest, importe o `app.js` diretamente em seus testes.

## Observações
- O banco de dados é em memória, os dados são perdidos ao reiniciar.
- Para endpoints protegidos, envie o JWT no header: `Authorization: Bearer <token>`

---

API pronta para automação de testes!
