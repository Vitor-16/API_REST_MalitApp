const express = require('express');
const UsuariosController = require('../controllers/UsuariosController');

const UsuariosRouter = express.Router();

UsuariosRouter.post('/Cadastro', UsuariosController.createUser);
UsuariosRouter.get('/Listagem', UsuariosController.getUser);
UsuariosRouter.get('/ListagemEmail/:email_Usuarios', UsuariosController.getUserEmail);
UsuariosRouter.get('/ListagemCPF/:cpf_Usuarios', UsuariosController.getUserCPF);
UsuariosRouter.put('/Atualizar/:id_Usuarios', UsuariosController.putUser);
UsuariosRouter.delete('/Deletar/:id_Usuarios', UsuariosController.destroyUser);

module.exports = UsuariosRouter;