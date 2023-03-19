const MaletasProdModel = require('../models/MaletasProdModel');

const MaletasProdController = {
    createMaletasProd: (req, res)=>{
        let{tamanho_MaletasProd, quantidade_MaletasProd, valor_MaletasProd} = req.body
        MaletasProdModel.create({tamanho_MaletasProd, quantidade_MaletasProd, valor_MaletasProd})
        .then(
            ()=>{
                return res.status(201).json({
                    erroStatus:false,
                    mensagemStatus:"PRODUTO ADICIONADO.",
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO ADICIONAR O PRODUTO.",
                    errorObject:error
                });
             }
        )
    },
    getMaletasProd:(req, res)=>{
        MaletasProdModel.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"PRODUTOS LISTADOS COM SUCESSO.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR PRODUTOS.",
                    errorObject:error
                });
            }
        )
    },
    getMaletasProdID:(req, res)=>{
        let {id_MaletasProd} = req.params;
        MaletasProdModel.findByPk(id_MaletasProd)
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"PRODUTO LISTADO POR ID.",
                    data:response
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR PRODUTO POR ID.",
                    errorObject:error
                });
            }
        )
    },
    putMaletasProd:(req, res)=>{
        let{tamanho_MaletasProd, quantidade_MaletasProd, valor_MaletasProd} = req.body;
        let{id_MaletasProd} = req.params;
        MaletasProdModel.update(
            {tamanho_MaletasProd, quantidade_MaletasProd, valor_MaletasProd},
            {where:{id_MaletasProd}}
        )
        .then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"DADOS DO PRODUTO ATUALIZADOS COM SUCESSO."
                });
            }
        )
        .catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO ALTERAR DADOS DO PRODUTO.",
                    errorObject:error
                });
            }
        )
    },
    destroyMaletasProd:(req, res)=>{
        let{id_MaletasProd} = req.params;
        MaletasProdModel.findByPk(id_MaletasProd)
        .then((tbl_MaletasProd)=>{
            if (tbl_MaletasProd){
                ProdutosVendasModel.destroy({where:{id_MaletasProd}})
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

module.exports = MaletasProdController;