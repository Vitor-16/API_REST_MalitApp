const usuariosModel = require('../models/UsuariosModel');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

module.exports = {
    recuperarSenha: async (req, res) => {
        const { email } = req.body;

        try {
            const usuario = await usuariosModel.findOne({ where: { email } });

            const transport = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "213a6890c46d88",
                    pass: "c6cc4e6e2332c5"
                }
            });

            const novaSenha = crypto.randomBytes(10).toString('hex');

            transport.sendMail({
                from: 'noreply@gmail.com.br',
                to: email,
                subject: 'Recuperação de senha!',
                html: `<p>Olá, está é sua nova senha para acesso no seu app Malit: ${novaSenha}</p><br/>
                       <p>É recomendado após login realizar a alteração desta senha.</p>`
            }).then(() => {
                bcrypt.hash(novaSenha, 10).then(senha => {
                    usuario.update({ senha }).then(() => {
                        return res.status(200).json({
                            erroStatus: false,
                            mensagemStatus: "EMAIL ENVIADO!"
                        });
                    }).catch(error => {
                        return res.status(404).json({
                            erroStatus: true,
                            mensagemStatus: "USUÁRIO NÃO ENCONTRADO.",
                            errorObject: error
                        });
                    });
                }).catch(error => {
                    return res.status(404).json({
                        erroStatus: true,
                        mensagemStatus: "FALHA AO ENVIAR EMAIL.",
                        errorObject: error
                    });
                });
            })
        } catch (error) {
            return res.status(404).json({
                erroStatus: true,
                mensagemStatus: "USUÁRIO NÃO ENCONTRADO.",
                errorObject: error
            });
        }
    }
};
