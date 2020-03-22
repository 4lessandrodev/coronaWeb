const usuarioModel = require('./../models/UsuarioModel');
const perfilModel = require('./../models/PerfilModel');
const respostasModel = require('./../models/RespostasModel')



const cadastrarUsuario = (req, res, next) => {
  const usuario = new usuarioModel(req.body.telefone, req.body.senha);
  usuario.salvarUsuario(usuario).then(resposta => {
    cadastradoDePerfil(req, res, next, resposta.insertId);
  });
};

const cadastradoDePerfil = (req, res, next, id_usuario) => {
  const perfil = new perfilModel(req.body.nome, req.body.email, req.body.idade, req.body.genero, id_usuario, req.body.endereco, req.body.bairro, req.body.cidade, req.body.estado, req.body.cep, req.body.ibge);
  perfil.salvarPerfil(perfil).then(resposta => {
    res.send(`usuario cadastrado`);
  });
};


const realizarLogin = (req, res, next) => {
  const usuario = new usuarioModel(req.body.telefone, req.body.senha);
  usuario.login(usuario).then(resposta => {
    if (resposta[0] !== null) {
      res.send('Usuario logado');
    } else {
      res.send('Não realizado login');
    }
  });
};


const salvarRespostas = (req, res, next) => {
  const resposta = new respostasModel(req.body.resposta, req.body.id_usuario, req.body.id_pergunta);
  resposta.salvarRespostas(resposta).then( respo => {
      res.send('Resposta salva')
  })
}




module.exports = { cadastrarUsuario, realizarLogin};