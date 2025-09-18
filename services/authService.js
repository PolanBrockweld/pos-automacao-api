const users = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET = 'supersecret';

function register({ username, password, role }) {
    if (users.find(u => u.username === username)) {
        throw new Error('Usuário já existe');
    }
    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = { username, password: hashedPassword, role: role || 'user' };
    users.push(user);
    return user;
}

function login({ username, password }) {
    const user = users.find(u => u.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new Error('Credenciais inválidas');
    }
    const token = jwt.sign({ username: user.username, role: user.role }, SECRET, { expiresIn: '1h' });
    return { token };
}

module.exports = { register, login };
