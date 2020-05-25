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
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Idade: Sequelize.INTEGER,
    Localidade: Sequelize.STRING,
    Email: Sequelize.STRING,
    DataNascimento: Sequelize.DATE,
    DisponibilidadeViajar: Sequelize.STRING,
    Recomendacoes: Sequelize.INTEGER,
    Genero: Sequelize.STRING,
    AnosEmpresa: Sequelize.INTEGER,
    TipoUser: Sequelize.INTEGER,
},
{
timestamps: false,
}
);

module.exports = Users;