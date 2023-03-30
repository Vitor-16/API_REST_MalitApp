const express = require('express');
const UsuariosMedController = require('../controllers/UsuariosMedController');

const UsuariosMedRouter = express.Router();

UsuariosMedRouter.post('/CadastroUsersMed', UsuariosMedController.createUserMed);
UsuariosMedRouter.get('/ListagemUsersMed', UsuariosMedController.getUserMed);
UsuariosMedRouter.get('/ListagemUsersMedID/:id_UsuariosMed', UsuariosMedController.getUserMedID);
UsuariosMedRouter.get('/AlterarUsersMed/:id_UsuariosMed', UsuariosMedController.putUserMed);
UsuariosMedRouter.delete('/DeletarUsersMed/:id_UsuariosMed', UsuariosMedController.destroyUserMed);

module.exports = UsuariosMedRouter;