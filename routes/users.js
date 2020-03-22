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

//Listar resumo das consultas do usuario
router.get('/consultas', consultaController.listarResumoConsultasUsuario);

//Realizar login
router.post('/login', usuarioController.realizarLogin);

//Visualizar a consulta selecionada
router.get('/consulta/:id', consultaController.verConsulta);


module.exports = router; 
