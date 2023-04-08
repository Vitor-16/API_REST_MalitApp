//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');
const DiaMedModel = require('./DiaMedModel');
const HoraMedModel = require('./HoraMedModel');

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
    DiaMed_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    HoraMed_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

MedicamentosModel.belongsTo(DiaMedModel, {foreignKey: 'DiaMed_id', allowNull: false});
MedicamentosModel.belongsTo(HoraMedModel, {foreignKey: 'HoraMed_id', allowNull: false});

module.exports = MedicamentosModel;