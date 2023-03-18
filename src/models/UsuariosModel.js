//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');   

//CONEXÃO COM BD
const connection = require('../config/connection');

const UsuariosModel = connection.define('tbl_usuarios', 
{
    id_Usuarios:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_Usuarios:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf_Usuarios:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isCPF(cpf_Usuarios) {
                const cpfPattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
                if (!cpfPattern.test(cpf_Usuarios)) {
                  throw new Error('CPF INSERIDO INVÁLIDO');
                } 
            }  
        }
    },
    dataNasc_Usuarios:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate:{
            isDate: true
        }
    },
    email_Usuarios:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    senha_Usuarios:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
        len: [8, 20]
        }
    }
}, {Sequelize});

UsuariosModel.beforeSave(async (tbl_usuarios) => {
    if (tbl_usuarios.changed('senha_Usuarios')) {
      const salt = await bcrypt.genSalt(10);
      tbl_usuarios.senha_Usuarios = await bcrypt.hash(tbl_usuarios.senha_Usuarios, salt);
    }
});
  
//UsuariosModel.sync({force: true});
module.exports = UsuariosModel;
