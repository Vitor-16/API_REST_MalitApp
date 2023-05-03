const express = require('express');
const usuariosController = require('../controllers/usuariosController');

const usuariosRouter = express.Router();

usuariosRouter.post('/Cadastro', usuariosController.createUsuario);
usuariosRouter.get('/Listagem', usuariosController.getUsuarios);
usuariosRouter.get('/ListagemCpf/:cpf', usuariosController.getCpf);
usuariosRouter.get('/ListagemCpfAll/:cpf', usuariosController.getCpfAll);
usuariosRouter.put('/Alterar/:id_usuario', usuariosController.putUsuario);
usuariosRouter.put('/AlterarSenha/:cpf', usuariosController.putSenha);
usuariosRouter.delete('/Deletar/:id_usuario', usuariosController.destroyUsuario);

module.exports = usuariosRouter;