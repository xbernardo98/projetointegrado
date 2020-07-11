var Sequelize = require('sequelize');
var sequelize = require('./database');

var users = sequelize.define('users',
    {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        nome:Sequelize.STRING,
        idade:Sequelize.INTEGER,
        localidade:Sequelize.STRING,
        email: Sequelize.STRING,
        pass: Sequelize.STRING,
        tipo: Sequelize.STRING,
        datanascimento:Sequelize.INTEGER,
        disponibilidadeviajar:Sequelize.STRING,
        recomendacoes:Sequelize.INTEGER,
        genero:Sequelize.STRING,
        anosempresa:Sequelize.INTEGER,
        nome:Sequelize.STRING,
        telemovel:Sequelize.INTEGER,
        linguas:Sequelize.STRING, 
    },
    { timestamps: false, }
);


module.exports = users;   