const produtosModel = require('../models/ProdutosModel');

const produtosController = {
    createProduto: (req, res)=>{
        let{tamanho, 
            quantidade,
            valor} = req.body
        produtosModel.create(
            {tamanho, 
             quantidade, 
             valor
        })
        .then(()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"PRODUTO ADICIONADO.",
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ADICIONAR O PRODUTO.",
                errorObject:error
            });
         })
    },
    getProdutos:(req, res)=>{
        produtosModel.findAll()
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"PRODUTOS LISTADOS COM SUCESSO.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR PRODUTOS.",
                errorObject:error
            });
        })
    },
    getProdutoId:(req, res)=>{
        let {id_produto} = req.params;
        produtosModel.findByPk(id_produto)
        .then((response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"PRODUTO LISTADO POR ID.",
                data:response
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR PRODUTO POR ID.",
                errorObject:error
            });
        })
    },
    putProduto:(req, res)=>{
        let{tamanho,
            quantidade, 
            valor} = req.body;
        let{id_produto} = req.params;
        produtosModel.update(
            {tamanho, 
             quantidade, 
             valor},
            {where:{id_produto}}
        )
        .then(()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"DADOS DO PRODUTO ATUALIZADOS COM SUCESSO."
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR DADOS DO PRODUTO.",
                errorObject:error
            });
        })
    },
    destroyProduto:(req, res)=>{
        let{id_produto} = req.params;
        produtosModel.findByPk(id_produto)
        .then((tbl_produtos)=>{
            if (tbl_produtos){
                produtosModel.destroy({where:{id_produto}})
                .then(()=>{
                    return res.status(200).json({
                        erroStatus:false,
                        mensagemStatus:"PRODUTO EXCLUÍDO.",
                    });
                })
                .catch((error)=>{
                        return res.status(400).json({
                            erroStatus:true,
                            mensagemStatus:"ERRO NA EXCLUSÃO DO PRODUTO.",
                            errorObject:error
                        });
                    })}else {
                    return res.status(404).json({
                    erroStatus:true,
                    mensagemStatus:"PRODUTO NÃO ENCONTRADO."
                });
                }
        })
        .catch((error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO BUSCAR PRODUTO.",
                    errorObject:error
                });
            }
        )
    }
};

module.exports = produtosController;