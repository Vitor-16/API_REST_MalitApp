const { Sequelize, DataTypes } = require('sequelize');
const usuariosModel = require('./usuariosModel');
const medicamentosModel = require('./medicamentosModel');

const connection = require('../config/connection');

const usuariosMedModel = connection.define('tbl_usuariosMed',
{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }
}); 

usuariosModel.belongsToMany(medicamentosModel, { through: usuariosMedModel});
medicamentosModel.belongsToMany(usuariosModel, { through: usuariosMedModel});

module.exports = usuariosMedModel;