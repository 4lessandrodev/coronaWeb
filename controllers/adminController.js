const sintomasModel = require('./../models/SintomasModel')
const perguntasAuxiliares = require('./../models/PerguntasAuxiliaresModel')

const salvarSintomas = (req, res, next) => {
  const sintoma = new sintomasModel(req.body.descricao, req.body.grupo_risco);
  sintoma.salvarSintomas(sintoma).then(resposta => {
    res.send('Sintoma cadastrado')
  });
};

const salvarPerguntaAuxiliar = (req, res, next) => {
  const pergunta = new perguntasAuxiliares(req.body.descricao, req.body.id_sintoma,
    req.body.frequencia, req.body.gatilho_em_horas);
    pergunta.salvarPerguntasAuxiliares(pergunta).then( resposta => {
      res.send('Pergunda salva com sucesso')
    })
}

module.exports = { salvarSintomas }