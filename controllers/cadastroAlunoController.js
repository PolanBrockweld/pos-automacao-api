const cadastroAlunoService = require('../services/cadastroAlunoService');

exports.listar = (req, res) => {
    res.json(cadastroAlunoService.listarAlunos());
};

exports.criar = (req, res) => {
    try {
        const aluno = cadastroAlunoService.criarAluno(req.body);
        res.status(201).json(aluno);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
