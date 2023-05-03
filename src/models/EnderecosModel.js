const { Sequelize, DataTypes } = require('sequelize');

const connection = require('../config/connection');

const enderecosModel = connection.define ('tbl_enderecos',
{
    id_endereco: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isCepValidate(cep_Enderecos) {
                const cepRegex = /^\d{5}-\d{3}$/;
                if (!cepRegex.test(cep_Enderecos)) {
                  throw new Error('CEP INVÁLIDO');
                }
            }
        }
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logradouro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = enderecosModel;