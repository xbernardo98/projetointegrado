var Sequelize = require('sequelize');
var sequelize = require('./database');


var hardskill = sequelize.define('hardskill', 
{

    id_hardskill: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomehardskill: Sequelize.STRING,
   
},
    { timestamps: false, }

);
module.exports = hardskill;  