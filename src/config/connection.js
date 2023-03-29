//ARQUIVO DE CONEXÃO DO BD, IMPORT DO SEQUELIZE E CRIAÇÃO DO BD 
const Sequelize = require('sequelize');

const connection = new Sequelize( 
   'bd_malit',
   'root',
   '',
   {
    host: 'localhost',
    port: '3006',
    dialect: 'mysql',
    timezone: '-03:00'
   }
);

module.exports = connection;