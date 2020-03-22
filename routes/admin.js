var express = require('express');
var router = express.Router();

const sintomaController = require('./../controllers/adminController');
const consultaController = require('./../controllers/consultaController');

/* GET home page. */
router.post('/salvar-sintoma', sintomaController.salvarSintomas);

router.post('/salvar-observacao/:id', consultaController.salvarObservaCaoEmConsulta);

module.exports = router;
