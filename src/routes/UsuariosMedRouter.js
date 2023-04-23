const express = require('express');
const UsuariosMedController = require('../controllers/UsuariosMedController');

const UsuariosMedRouter = express.Router();

UsuariosMedRouter.post('/CadastroUsersMed', UsuariosMedController.createUsuariosMed);
UsuariosMedRouter.get('/ListagemUsersMed', UsuariosMedController.getUsuariosMeds);

module.exports = UsuariosMedRouter;