var Sequelize = require('sequelize');
var sequelize = require('./database');


var projetos = sequelize.define('projetos', 
{

    ID_Projeto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    NomeProjeto: Sequelize.STRING,
    DataInicio: Sequelize.STRING,
    DataFim: Sequelize.STRING,
    Membro1: Sequelize.STRING,
    Membro2: Sequelize.STRING,
    Membro3: Sequelize.STRING,
    Membro4: Sequelize.STRING,
    Membro5: Sequelize.STRING,
    Membro6: Sequelize.STRING,
    Info_Projeto: Sequelize.STRING,
    Avaliacao: Sequelize.INTEGER,
    Comentario: Sequelize.STRING,
    Estado:Sequelize.INTEGER,
}, 
    { timestamps: false, }

); 
module.exports = projetos;