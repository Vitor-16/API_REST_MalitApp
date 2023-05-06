const express = require('express');
const enderecosController = require('../controllers/EnderecosController');

const enderecosRouter = express.Router();

enderecosRouter.post('/CadastroEndereco', enderecosController.createEndereco);
enderecosRouter.get('/ListagemEndereco', enderecosController.getEndereco);
enderecosRouter.get('/ListagemEnderecoId/:id_endereco', enderecosController.getEnderecoId);
enderecosRouter.get('/ListagemEnderecoCep/:cep', enderecosController.getEnderecoCep);
enderecosRouter.put('/AtualizarEndereco/:id_endereco', enderecosController.putEndereco);
enderecosRouter.delete('/DeletarEndereco/:id_endereco', enderecosController.destroyEndereco);

module.exports = enderecosRouter;