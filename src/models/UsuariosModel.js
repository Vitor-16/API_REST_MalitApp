const { Sequelize, DataTypes } = require('sequelize');
const enderecosModel = require('./enderecosModel');
const bcrypt = require('bcrypt');   

const connection = require('../config/connection');

const usuariosModel = connection.define('tbl_usuarios', 
{
    id_usuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_usuario:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isCPF(cpf_Usuarios) {
                const cpfPattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
                if (!cpfPattern.test(cpf_Usuarios)) {
                  throw new Error('CPF INVÁLIDO');
                } 
            }  
        }
    },
    dataNasc:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate:{
            isDate: true
        }
    },
    telefone:{
        type: DataTypes.STRING(20),
        allowNull: false,
        validate:{
            is: /^\(\d{2}\)\s\d{5}\-\d{4}$/
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
        len: [8, 20]
        }
    }
}, {Sequelize});

usuariosModel.beforeSave(async (tbl_usuarios)=> {
    if (tbl_usuarios.changed('senha')) {
      const salt = await bcrypt.genSalt();
      tbl_usuarios.senha = await bcrypt.hash(tbl_usuarios.senha, salt);
    }
});

enderecosModel.hasMany( usuariosModel);
usuariosModel.belongsTo(enderecosModel, {allowNull: true});

module.exports =  usuariosModel;


