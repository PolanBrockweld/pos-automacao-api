const authService = require('../services/authService');

exports.register = (req, res) => {
    try {
        const user = authService.register(req.body);
        res.status(201).json({ message: 'Usuário registrado com sucesso', user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.login = (req, res) => {
    try {
        const result = authService.login(req.body);
        res.json(result);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};
