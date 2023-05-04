const express = require('express');
const pedidosController = require('../controllers/pedidosController');

const pedidosRouter = express.Router();

pedidosRouter.post('/CadastrarPedido', pedidosController.createPedido);
pedidosRouter.get('/ListagemPedido', pedidosController.getPedidos);
pedidosRouter.get('/ListagemPedidoID/:id_Pedidos', pedidosController.getPedidoId);
pedidosRouter.put('/AtualizarPedido/:id_Pedidos', pedidosController.putPedido);
pedidosRouter.delete('/DeletarPedido/:id_Pedidos', pedidosController.destroyPedido);

module.exports = pedidosRouter;