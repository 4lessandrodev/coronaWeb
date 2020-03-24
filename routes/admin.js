var express = require('express');
var router = express.Router();

const sintomaController = require('./../controllers/adminController');
const consultaController = require('./../controllers/consultaController');
const adminController = require('./../controllers/adminController');

/* GET home page. */
//Salvar um sintoma 
router.post('/salvar-sintoma', sintomaController.salvarSintomas);

//Salvar uma observação para a consulta 
router.post('/salvar-observacao/:id', consultaController.salvarObservaCaoEmConsulta);

//Salvar uma pergunta auxiliar a ser feita apos o usuario criar uma consulta 
router.post('/salvar-pergunta-auxiliar', adminController.salvarPerguntaAuxiliar);

//Alterar status de uma consulta 
router.put('/alterar-status', adminController.alterarStatusConsulta);

//renderizar pagina
router.get('/main', adminController.adminDashboard)

module.exports = router;