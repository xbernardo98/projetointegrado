var sequelize = require('../models/database');
var utilizadores = require('../models/users');
var projetos = require('../models/projetos');
var userskill = require('../models/user_skill'); 
var softskills = require('../models/softskills'); 
var  hardskills = require('../models/hardskills'); 
const { QueryTypes } = require('sequelize');


const controllers = {};

sequelize.sync();

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

var anos ="";
controllers.users_list_1 = async (req, res) => {
    const data = await utilizadores.findAll({
        where: { anosempresa: anos }
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ sucess: true, data: data });
}
controllers.user_select = async (req, res) => {
    anos = req.params.anosempresa;
    res.json({sucess : true, data : anos});
}




controllers.user_detail = async (req, res) => {
    const { id } = req.params;
    const data = await utilizadores.findAll({
        where: { id_user: id },

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
    const { nome, idade, localidade, email, datanascimento, disponibilidade, recomendacoes,  genero, anosempresa, tipo, pass,telemovel, linguas} = req.body;
    let data;
    const response = await sequelize.sync().then(function () {  
        utilizadores.create({
            nome: nome,
            idade: idade,
            localidade: localidade,
            email: email,
            datanascimento: datanascimento,
            disponibilidade: disponibilidade,
            recomendacoes: recomendacoes,
            genero:  genero,
            anosempresa: anosempresa,
            tipo: tipo,
            pass :pass,
            telemovel :telemovel,
            linguas :linguas
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

//softskills

module.exports = controllers;