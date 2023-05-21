const express = require('express');
const recuperarSenha = require('../controllers/RecuperacaoSenhaController');

const recuperacaoRouter = express.Router();

recuperacaoRouter.post('/RecuperarSenha', recuperarSenha.recuperarSenha);

module.exports = recuperacaoRouter;
