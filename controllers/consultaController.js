const ConsultaParaSintomas = require('./../models/ConsultaParaSintomas');
const Consulta = require('./../models/ConsultaModel');
const Usuario = require('./../models/UsuarioModel');
const Sintomas = require('./../models/SintomasModel');
const Observacao = require('./../models/ObservacaoConsultaModel');




const cadastrarUsuario = (req, res, next) => {
  const usuario = new usuarioModel(req.body.telefone, req.body.senha);
  usuario.salvarUsuario(usuario).then(resposta => {
    cadastradoDePerfil(req, res, next, resposta.insertId);
  });
};

const salvarConsultaParaSintomas = (req, res, next, id_consulta) => {
  let ids = req.body;
  for (let id_sintoma of ids) {
    const consultaParaSintomas = new ConsultaParaSintomas(id_consulta, id_sintoma);
    consultaParaSintomas.salvarConsultaParaSintomas(consultaParaSintomas).then(resposta => { });
  }
  res.send('Consulta cadastrada com sucesso');
};

const salvarConsultas = (req, res, next) => {
  let id_usuario = req.session.user.id;
  const consulta = new Consulta(id_usuario, req.body.id_status_consulta);
  consulta.salvarConsulta(consulta).then(resposta => {
    salvarConsultaParaSintomas(req, res, next, resposta.insertId);
  });
};

const listarResumoConsultasUsuario = (req, res, next) => {
  const consulta = new Consulta();
  const usuario = new Usuario();
  usuario.id = req.body.id;
  consulta.id = req.body.consulta_id;
  consulta.listarResumoConsultaDoUsuario(usuario, consulta).then(resposta => {
    res.send(resposta);
  });
};


const verConsulta = (req, res, next) => {
  let consultaSelecionada;
  const consulta = new Consulta();
  const usuario = new Usuario();
  const sintoma = new Sintomas();
  usuario.id = req.body.id;
  consulta.id = req.params.id;
  consulta.verConsultaEspecificaDoUsuario(usuario, consulta).then(resposta => {
    consultaSelecionada = resposta[0];
    sintoma.listarSintomasDeUmaConsulta(consulta).then(sintomas => {
      consultaSelecionada.sintomas = sintomas;
      res.send(consultaSelecionada);
    });
  });
};

const salvarObservaCaoEmConsulta = (req, res, next) => {
  let observacao = new Observacao(req.params.id, req.body.descricao);
  observacao.salvarObservacao(observacao).then(resposta => {
    res.send('Observação salva');
  });
};




module.exports = { cadastrarUsuario, salvarConsultas, listarResumoConsultasUsuario, verConsulta, salvarObservaCaoEmConsulta };