const request = require('supertest');
const { expect } = require('chai');
const http = require('http');
const appPromise = require('../app');

let server;
let address;
before(async () => {
  const app = await appPromise;
  server = http.createServer(app);
  await new Promise(resolve => server.listen(0, resolve));
  address = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise(resolve => server.close(resolve));
});

describe('GraphQL API', () => {
  it('deve criar um aluno', async () => {
    const mutation = {
      query: `mutation { criarAluno(nome: "João", email: "joao@email.com") { id nome email } }`
    };
    const res = await request(address)
      .post('/graphql')
      .send(mutation);
    expect(res.body.data.criarAluno.nome).to.equal('João');
  });

  it('deve listar alunos', async () => {
    const query = {
      query: `{ alunos { id nome email } }`
    };
    const res = await request(address)
      .post('/graphql')
      .send(query);
    expect(res.body.data.alunos).to.be.an('array');
  });
});