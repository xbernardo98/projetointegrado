const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/utilizador_list', controller.utilizadores_list);



module.exports = router;