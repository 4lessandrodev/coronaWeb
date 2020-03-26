const sintomasModel = require('./../models/SintomasModel');
const perguntasAuxiliares = require('./../models/PerguntasAuxiliaresModel');
const Consulta = require('./../models/ConsultaModel');

const salvarSintomas = (req, res, next) => {
    const sintoma = new sintomasModel(req.body.descricao, req.body.grupo_risco);
    sintoma.salvarSintomas(sintoma).then(resposta => {
        res.send('Sintoma cadastrado');
    });
};

const salvarPerguntaAuxiliar = (req, res, next) => {
    const pergunta = new perguntasAuxiliares(req.body.descricao, req.body.id_sintoma, req.body.frequencia, req.body.gatilho_em_horas);
    pergunta.salvarPerguntasAuxiliares(pergunta).then(resposta => {
        res.send('Pergunda salva com sucesso');
    });
};

const alterarStatusConsulta = (req, res, next) => {
    const consulta = new Consulta();
    consulta.id = req.params.id;
    consulta.alterarStatusDaConsulta(consulta).then(resposta => {
        res.send(resposta);
    });
};

const salvarPergunta = (req, res, next) => {
    const pergunta = new perguntasAuxiliares(req.body.descricao, req.body.id_sintoma, req.body.frequencia, req.body.gatilho_em_horas);
    pergunta.salvarPerguntasAuxiliares(pergunta).then(resposta => {
        res.send('Pergunda salva com sucesso');
    });
};

const quantidadeDeAtendimentos = (req, res, next) => {
    const consulta = new Consulta();
    consulta.contarAtendimentos().then(qtd => {
        return (qtd[0] > 0) ? qtd[0] : 0;
    });
};

//renderizar página
const adminDashboard = (req, res, next) => {
    let user = req.session.user;
    (user.admin == 0) ? res.redirect('/users/dashboard') : '';
    const consulta = new Consulta();
    consulta.contarAtendimentos().then(qtd => {
        let qtdAtendimentos = (qtd[0].qtd_atendimentos > 0) ? qtd[0].qtd_atendimentos : 0;
        consulta.suspeitosDeCorona().then(suspeitos => {

            let listaSuspeitos = suspeitos.filter((item) => {
                return item.sintomas >= 3;
            });
            
            consulta.consultasPorBairros().then(porRegiao => {
                
                    res.render('adminDashboard', { qtdAtendimentos, qtdSuspeitos: listaSuspeitos.length, porRegiao }); 
                
            }).catch(err => {
                res.send(err.message);
            });
        }).catch(err => {
            res.send(err.message);
        });
    }).catch(err => {
        res.send(err.message);
    });
    
};

module.exports = { salvarSintomas, salvarPerguntaAuxiliar, alterarStatusConsulta, salvarPergunta, adminDashboard };