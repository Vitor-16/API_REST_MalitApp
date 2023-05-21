const usuariosModel = require('../models/UsuariosModel');
const bcrypt = require('bcrypt');

module.exports = {
  createLogin: async (req, res) => {
    const { cpf, senha } = req.body;

    try {
      const usuario = await usuariosModel.findOne({ where: { cpf } });
      
      if (!usuario) {
        return res.status(400).json({
          erroStatus: true,
          mensagemStatus: 'USUÁRIO NÃO ENCONTRADO',
        });
      }
      
      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
      
      if (senhaCorreta) {
        return res.status(200).json({
          erroStatus: false,
          mensagemStatus: 'LOGIN EFETUADO COM SUCESSO!'
        });
      }else {
        return res.status(400).json({
          erroStatus: true,
          mensagemStatus: 'SENHA INCORRETA'
        });
      }
    }catch (error) {
        return res.status(500).json({
          erroStatus: true,
          mensagemStatus: 'ERRO AO REALIZAR LOGIN',
          errorObject: error
        });
    }
  }
};