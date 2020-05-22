var Sequelize = require('sequelize');
var sequelize = require('./database');


var projetos = sequelize.define('projetos', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeprojeto: Sequelize.STRING,
    datafim:Sequelize.STRING,
    datainicio: Sequelize.STRING,
    },
    {timestamps: false,}
    
    );
    module.exports = projetos;