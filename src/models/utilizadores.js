var Sequelize = require('sequelize');
var sequelize = require('./database');

var Utilizadores = sequelize.define('utilizadores',
{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: Sequelize.STRING,
    anos: Sequelize.STRING,
    funcao: Sequelize.STRING,
},
{
timestamps: false,
}
);

module.exports = Utilizadores;