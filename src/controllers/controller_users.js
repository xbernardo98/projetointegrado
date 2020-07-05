var sequelize = require('../models/database');
var utilizadores = require('../models/users');
var projetos = require('../models/projetos');

const controllers = {};

sequelize.sync();

controllers.utilizadores_create = async (req, res) => {
    const { nome, anos, funcao } = req.body;
    let data;
    const response = await sequelize.sync().then(function () {
        utilizadores.create({
            nome: nome,
            anos: anos,
            funcao: funcao,
        });
        const data = utilizadores.findAll();
        return data;
    })
        .catch(err => {
            return err;
        });
    res.json({ sucess: true, data: data, message: "tudo beleza" });
}

controllers.users_list = async (req, res) => {
    const data = await utilizadores.findAll({
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ sucess: true, data: data });
}

controllers.user_detail = async (req, res) => {
    const { id } = req.params;
    const data = await utilizadores.findAll({
        where: { ID_User: id },

    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        })
    res.json({ sucess: true, data: data });
}

controllers.user_create = async (req, res) => {
    const { Nome, Idade, Localidade, Email, DataNascimento, DisponibilidadeViajar, Recomendacoes, Genero, AnosEmpresa, TipoUser } = req.body;
    let data;
    const response = await sequelize.sync().then(function () {  
        utilizadores.create({
            Nome: Nome,
            Idade: Idade,
            Localidade: Localidade,
            Email: Email,
            DataNascimento: DataNascimento,
            DisponibilidadeViajar: DisponibilidadeViajar,
            Recomendacoes: Recomendacoes,
            Genero: Genero,
            AnosEmpresa: AnosEmpresa,
            TipoUser: TipoUser
        });
        const data = utilizadores.findAll();
        return data;
    })
        .catch(err => {
            return err;
        });
    res.json({ sucess: true, data: data, message: "utilizador criado com sucesso!!" });
}







module.exports = controllers;