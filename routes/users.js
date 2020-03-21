var express = require('express');
var router = express.Router();
const usuarioController = require('./../controllers/usuarioController');
const consultaController = require('./../controllers/consultaController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/salvar-consulta', consultaController.salvarConsultas )


router.post('/cadastro', usuarioController.cadastrarUsuario);

module.exports = router; 
