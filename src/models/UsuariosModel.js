const { Sequelize, DataTypes } = require('sequelize');
const enderecosModel = require('./EnderecosModel');

const connection = require('../config/Connection');

const usuariosModel = connection.define('Usuarios', 
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
            isCPF(cpf) {
                const cpfPattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
                if (!cpfPattern.test(cpf)) {
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
        len: [6, 80]
        }
    }
}, {Sequelize});

enderecosModel.hasMany( usuariosModel);
usuariosModel.belongsTo(enderecosModel, {allowNull: true});

module.exports =  usuariosModel;


