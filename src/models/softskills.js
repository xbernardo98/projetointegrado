var Sequelize = require('sequelize');
var sequelize = require('./database');


var softskill = sequelize.define('softskill', 
{

    id_softskill: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomesoftskill: Sequelize.STRING,
   
},
    { timestamps: false, }

);
module.exports = softskill;  