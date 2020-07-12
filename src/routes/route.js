const express = require('express');
const router = express.Router();
const controller_users = require('../controllers/controller_users');
const controller_projetos = require('../controllers/controller_projetos');

//users
router.post('/user_create',controller_users.user_create);
router.get('/users_list', controller_users.users_list);
router.get('/user_detail/:id',controller_users.user_detail);
router.get('/user_detalhe_session/:id',controller_users.user_detalhe_session);
router.get('/user_select/:anosempresa',controller_users.user_select);
router.get('/users_list_1',controller_users.users_list_1);
router.post('/login',controller_users.login);
router.post('/user_update/:id',controller_users.user_update);
//users

//projetos
router.get('/projetos_list', controller_projetos.projetos_list);
router.post('/projeto_create',controller_projetos.projeto_create);
router.get('/projetos_detail/:id', controller_projetos.projeto_detail);
//projetos

//softskills


//softskills





module.exports = router;