//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');
const DataMedModel = require('./DataMedModel');
const UsuariosModel = require('./UsuariosModel');
const UsuariosMedModel = require('./UsuariosMedModel');

//CONEXÃO COM BD
const connection = require('../config/connection');

const MedicamentosModel = connection.define('tbl_Medicamentos',
{
    id_Medicamentos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_Medicamentos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao_Medicamentos: {
        type: DataTypes.STRING,
        allowNull: true
    },
    quantidade_Medicamentos: { 
        type: DataTypes.FLOAT,
        allowNull: false
    },
    validade_Medicamentos: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    dataMed_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

MedicamentosModel.belongsTo(DataMedModel, {foreignKey: 'dataMed_id', allowNull: true});
 
module.exports = MedicamentosModel;