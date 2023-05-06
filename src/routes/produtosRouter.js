const express = require('express');
const produtosController = require('../controllers/ProdutosController');

const produtosRouter = express.Router();

produtosRouter.post('/CadastroProduto', produtosController.createProduto);
produtosRouter.get('/ListagemProdutos', produtosController.getProdutos);
produtosRouter.get('/ListagemProdutoId/:id_produto', produtosController.getProdutoId);
produtosRouter.put('/AtualizarProduto/:id_produto', produtosController.putProduto);
produtosRouter.delete('/DeletarProduto/:id_produto', produtosController.destroyProduto);

module.exports = produtosRouter;