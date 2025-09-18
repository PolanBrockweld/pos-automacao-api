const alunos = require('../models/cadastroAlunoModel');

function listarAlunos() {
    return alunos;
}

function criarAluno({ nome, email }) {
    if (!nome || !email) {
        throw new Error('Nome e email são obrigatórios');
    }
    const aluno = { id: alunos.length + 1, nome, email };
    alunos.push(aluno);
    return aluno;
}

module.exports = { listarAlunos, criarAluno };
