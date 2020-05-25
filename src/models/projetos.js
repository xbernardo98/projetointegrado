var Sequelize = require('sequelize');
var sequelize = require('./database');


var projetos = sequelize.define('Projetos', 
{

    ID_Projeto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    NomeProjeto: Sequelize.STRING,
    DataInicio: Sequelize.DATE,
    DataFim: Sequelize.DATE,
    Membro1: Sequelize.STRING,
    Membro2: Sequelize.STRING,
    Membro3: Sequelize.STRING,
    Membro4: Sequelize.STRING,
    Membro5: Sequelize.STRING,
    Membro6: Sequelize.STRING,
    Info_Projeto: Sequelize.STRING,
    Avaliacao: Sequelize.INTEGER,
    Comentario: Sequelize.STRING,
},
    { timestamps: false, }

);
module.exports = projetos;