const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('API REST - CadastroAluno', () => {
  it('deve listar alunos (GET /CadastroAluno)', async () => {
    const res = await request(app).get('/CadastroAluno');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('deve retornar erro ao criar aluno sem autenticação', async () => {
    const res = await request(app)
      .post('/CadastroAluno')
      .send({ nome: 'Teste', email: 'teste@email.com' });
    expect(res.status).to.equal(401);
  });
});