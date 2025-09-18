const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('GraphQL API', () => {
  it('deve criar um aluno', async () => {
    const mutation = {
      query: `mutation { criarAluno(nome: "João", email: "joao@email.com") { id nome email } }`
    };
    const res = await request(app)
      .post('/graphql')
      .send(mutation);
    expect(res.body.data.criarAluno.nome).to.equal('João');
  });

  it('deve listar alunos', async () => {
    const query = {
      query: `{ alunos { id nome email } }`
    };
    const res = await request(app)
      .post('/graphql')
      .send(query);
    expect(res.body.data.alunos).to.be.an('array');
  });
});