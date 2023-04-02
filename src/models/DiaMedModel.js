//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');

//CONEXÃO COM BD
const connection = require('../config/connection');

const DiaMedModel = connection.define('tbl_Data',
{
    id_DiaMed:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_DiaMed:{
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

//DiaMedModel.associate = (models) => {
//    hasMany(models.MedicamentosModel, { foreignKey: 'id_DiaMed' })
//};

module.exports = DiaMedModel;