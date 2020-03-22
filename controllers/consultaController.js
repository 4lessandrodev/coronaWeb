const ConsultaParaSintomas = require('./../models/ConsultaParaSintomas');
const Consulta = require('./../models/ConsultaModel');
const Usuario = require('./../models/UsuarioModel');
const Sintomas = require('./../models/SintomasModel');




const cadastrarUsuario = (req, res, next) => {
  const usuario = new usuarioModel(req.body.telefone, req.body.senha);
  usuario.salvarUsuario(usuario).then(resposta => {
    cadastradoDePerfil(req, res, next, resposta.insertId);
  });
};

const salvarConsultaParaSintomas = (req, res, next, id_consulta, ids_sintomas) => {
  let ids = ids_sintomas.split(',');
  for (let id_sintoma of ids) {
    const consultaParaSintomas = new ConsultaParaSintomas(id_consulta, id_sintoma);
    consultaParaSintomas.salvarConsultaParaSintomas(consultaParaSintomas).then(resposta => { });
  }
  res.send('Consulta cadastrada com sucesso');
};

const salvarConsultas = (req, res, next) => {
  const consulta = new Consulta(req.body.teve_febre, req.body.tomou_medicamento, req.body.melhorou_apos_medicamento,
    req.body.contato_alguem_corona, req.body.viagem_internacional, req.body.outros_sintomas, req.body.gravidez,
    req.body.id_usuario, req.body.id_status_consulta);
  consulta.salvarConsulta(consulta).then(resposta => {
    salvarConsultaParaSintomas(req, res, next, resposta.insertId, req.body.ids_sintomas);
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




module.exports = { cadastrarUsuario, salvarConsultas, listarResumoConsultasUsuario, verConsulta };