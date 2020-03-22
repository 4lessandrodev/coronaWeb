const sintomasModel = require('./../models/SintomasModel')

const salvarSintomas = (req, res, next) => {
  const sintoma = new sintomasModel(req.body.descricao, req.body.grupo_risco);
  sintoma.salvarSintomas(sintoma).then(resposta => {
    res.send('Sintoma cadastrado')
  });
};

module.exports = { salvarSintomas }