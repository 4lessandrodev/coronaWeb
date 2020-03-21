const usuarioModel = require('./../models/UsuarioModel');



const cadastrarUsuario = (req, res, next) => {
  const usuario = new usuarioModel(req.body.telefone, req.body.senha);
  usuario.salvarUsuario(usuario).then(resosta => {
    res.send('usuario cadastrado');
  });
};




module.exports = {cadastrarUsuario};