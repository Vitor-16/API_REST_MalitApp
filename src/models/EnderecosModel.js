//IMPORTS
const { DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const EnderecosModel = connection.define ('tbl_Enderecos',
{
    id_Enderecos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cep_Enderecos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado_Enderecos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade_Enderecos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro_Enderecos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logradouro_Enderecos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_Enderecos: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

//EnderecosModel.sync({force: true});
module.exports = EnderecosModel;