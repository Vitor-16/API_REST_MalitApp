//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const MedicamentosModel = connection.define('tbl_Medicamentos',
{
    id_Medicamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_Medicamento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao_Medicamento: {
        type: DataTypes.STRING,
        allowNull: true
    },
    quantidade_Medicamento: { 
        type: DataTypes.FLOAT,
        allowNull: false
    },
    validade_Medicamento: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    dia_Med:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora_Med:{
        type: DataTypes.TIME,
        allowNull: false
    }
});

MedicamentosModel.associate = (models)=>{
    MedicamentosModel.belongsToMany(models.UsuariosModel, {
        through: require('./UsuariosMedModel'),
        as: 'UsuariosMedModel',
        foreignKey: 'id_Medicamento'
    });
};
 
module.exports = MedicamentosModel;