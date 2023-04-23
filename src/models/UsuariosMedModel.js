//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');
const UsuariosModel = require('./UsuariosModel');
const MedicamentosModel = require('./MedicamentosModel');

//CONEXÃO COM BD
const connection = require('../config/connection');

const UsuariosMedModel = connection.define('tbl_UsuariosMed',
{
    id_UsuariosMed:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cpf_Usuarios: {
        type: DataTypes.STRING,
        references: {
          model: UsuariosModel, 
          key: 'cpf_Usuarios'
        }
      },
      id_Medicamento: {
        type: DataTypes.INTEGER,
        references: {
          model: MedicamentosModel,
          key: 'id_Medicamento'
        }
      }
}); 

module.exports = UsuariosMedModel;