var express = require('express');
var router = express.Router();
const usuarioController = require('./../controllers/usuarioController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/cadastro', usuarioController.cadastrarUsuario);

module.exports = router; 
