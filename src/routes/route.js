const express = require('express');
const router = express.Router();
const controller_users = require('../controllers/controller_users');
const controller_projetos = require('../controllers/controller_projetos');


router.get('/users_list', controller_users.users_list);
router.get('/projetos_list', controller_projetos.projetos_list);



module.exports = router;