var Sequelize = require('sequelize');
var sequelize = require('./database');

var Users = sequelize.define('Users',
{
    ID_User:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nome:{
        type: Sequelize.STRING,
        primaryKey: true
    },

    Idade: Sequelize.INTEGER,
    Localidade: Sequelize.STRING,
    Email: Sequelize.STRING,
    DataNascimento: Sequelize.STRING,
    DisponibilidadeViajar: Sequelize.STRING,
    Recomendacoes: Sequelize.INTEGER,
    Genero: Sequelize.STRING,
    AnosEmpresa: Sequelize.INTEGER,
    TipoUser: Sequelize.STRING,
},
{
timestamps: false,
}
);

module.exports = Users;