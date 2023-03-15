//IMPORTS
const { DataTypes } = require('sequelize');

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
        allowNull: false
    },
    quantidade_Medicamentos: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    validade_Medicamentos: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

//MedicamentosModel.sync({force: true});
module.exports = MedicamentosModel;