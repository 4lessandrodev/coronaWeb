var express = require('express');
var router = express.Router();
const usuarioController = require('./../controllers/usuarioController');
const consultaController = require('./../controllers/consultaController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Cadastrar um usuário 
router.post('/cadastro', usuarioController.cadastrarUsuario);

//Salvar uma consulta do usuário
router.post('/salvar-consulta', consultaController.salvarConsultas);

//Listar as consultas do usuario
router.get('/consultas', consultaController.listarConsultas);

//Realizar login
router.post('/login', usuarioController.realizarLogin);


module.exports = router; 
