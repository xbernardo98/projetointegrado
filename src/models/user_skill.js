var Sequelize = require('sequelize');
var sequelize = require('./database');


var userskill = sequelize.define('userskill', 
{

    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: Sequelize.STRING,
    nomehardskill: Sequelize.STRING,
    nomesoftskill: Sequelize.STRING,
   
},
    { timestamps: false, } 

);
module.exports = userskill;  