const bcrypt = require('bcrypt');
const usuariosModel = require('../models/UsuariosModel');

module.exports = {
  createLogin: async (req, res) => {
    const { cpf, senha } = req.body;

    try {
      const usuario = await usuariosModel.findOne({ where: { cpf } });
      
      if (!usuario) {
        return res.status(400).json({
          erroStatus: true,
          mensagemStatus: 'Usuário não encontrado',
        });
      }
      
      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
      
      if (senhaCorreta) {
        return res.status(200).json({
          erroStatus: false,
          mensagemStatus: 'Login efetuado com sucesso!',
        });
      } else {
        return res.status(400).json({
          erroStatus: true,
          mensagemStatus: 'Senha incorreta',
        });
      }
    } catch (error) {
      return res.status(500).json({
        erroStatus: true,
        mensagemStatus: 'Erro ao fazer login',
        errorObject: error,
      });
    }
  },
};