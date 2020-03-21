const usuarioModel = require('./../models/UsuarioModel');
const perfilModel = require('./../models/PerfilModel')



const cadastrarUsuario = (req, res, next) => {
  const usuario = new usuarioModel(req.body.telefone, req.body.senha);
  usuario.salvarUsuario(usuario).then(resposta => {
  cadastradoDePerfil(req, res, next, resposta.insertId)
  });
};

const cadastradoDePerfil = (req, res, next, id_usuario) => {
  const perfil = new perfilModel(req.body.nome, req.body.email, req.body.idade, req.body.genero, id_usuario)
  perfil.salvarPerfil(perfil).then(resposta => {
    res.send(`usuario cadastrado`)
  })
} 





module.exports = {cadastrarUsuario};