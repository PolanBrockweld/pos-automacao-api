const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const authController = require('./controllers/authController');
const cadastroAlunoController = require('./controllers/cadastroAlunoController');
const { authenticateToken } = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

// Swagger endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Auth routes
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);

// CadastroAluno routes
app.get('/CadastroAluno', cadastroAlunoController.listar);
app.post('/CadastroAluno', authenticateToken, cadastroAlunoController.criar);

module.exports = app;
