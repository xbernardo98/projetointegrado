var sequelize = require('../models/database');
var utilizadores = require('../models/users');
var projetos = require('../models/projetos');
const { QueryTypes } = require('sequelize');


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


controllers.user_select= async (req,res) => {
    const { AnosEmpresa } = req.body;
    
    Anos = AnosEmpresa;
}
controllers.users_list_1 = async (req, res) => {
    var Anos=2;
    const data = await utilizadores.findAll({ where : {AnosEmpresa:Anos}
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
    const { Nome, Idade, Localidade, Email, DataNascimento, DisponibilidadeViajar, Recomendacoes, Genero, AnosEmpresa, TipoUser, Password} = req.body;
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
            TipoUser: TipoUser,
            Password :Password
        });
        const data = utilizadores.findAll();
        return data;
    })
        .catch(err => {
            return err;
        });
    res.json({ sucess: true, data: data, message: "utilizador criado com sucesso!!" });
}

controllers.login = async (req, res) =>{
    var email = req.body.email;
    var pass = req.body.password;
    if( email == "" || pass =="")
    {
        res.json({ success: false, message: 'Tem de preencher os campos!' });
    }
    const login = await sequelize.query("SELECT * FROM Users WHERE email='"+email+"' AND pass='"+pass+"'", { type: QueryTypes.SELECT } );


    console.log(login)

    if(login.length != 0)
    {
        res.json({ success: true, data: login, message: 'Login efectuado com sucesso!' });
    }
    else{
        res.json({success: false, data:login, message:'Tem de preencher os campos corretamente!'});
    }
}










module.exports = controllers;