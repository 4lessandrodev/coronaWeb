var express = require('express');
var router = express.Router();

const sintomaController = require('./../controllers/adminController')

/* GET home page. */
router.post('/salvar-sintoma', sintomaController.salvarSintomas)

module.exports = router;
