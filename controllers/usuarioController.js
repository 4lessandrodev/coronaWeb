const UsuarioModel = require('./../models/UsuarioModel');
const PerfilModel = require('./../models/PerfilModel');
const RespostasModel = require('./../models/RespostasModel');
const ConsultaModel = require('./../models/ConsultaModel');
const SintomaModel = require('./../models/SintomasModel');
//--------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------
//RENDERIZAR A PAGINA DE LOGIN
const carregarPaginaLogin = (req, res, next) => {
    if (req.session.user == undefined) {
        res.render('login', { err: null, body: req.body });
    } else {
        res.redirect('dashboard');
    }
};
//--------------------------------------------------------------------------------------------------------------
//CADASTRO DE USUARIO 
const cadastrarUsuario = (req, res, next) => {
    const usuario = new UsuarioModel(req.body.telefone, req.body.senha);
    usuario.salvarUsuario(usuario).then(resposta => {
        cadastradoDePerfil(req, res, next, resposta.insertId);
    });
};

//--------------------------------------------------------------------------------------------------------------
//CADASTRAR PERFIL DE USUARIO 
const cadastradoDePerfil = (req, res, next, id_usuario) => {
    let endereco = `${req.body.endereco} ${req.body.numero}`;
    const perfil = new PerfilModel(req.body.nome, req.body.email, req.body.idade, req.body.genero, id_usuario, endereco, req.body.bairro, req.body.cidade, req.body.estado, req.body.cep, req.body.ibge);
    perfil.cep = req.body.cep.replace('-', '');
    perfil.salvarPerfil(perfil).then(resposta => {
        res.redirect('dashboard');
    });
};

//--------------------------------------------------------------------------------------------------------------
//AUTENTICAÇÃO DO USUÁRIO - LOGIN 
const realizarLogin = (req, res, next) => {
    const usuario = new UsuarioModel(req.body.telefone, req.body.senha);
    if (req.body.telefone.trim() == '' || req.body.senha.trim() == '') {
        res.render('login', { body: req.body, err: 'Usuário ou senha inválido' });
    } else {
        usuario.login(usuario).then(user => {
            if (user[0] == null || user[0] == undefined || user[0] == '') {
                req.session.user = undefined;
                res.render('login', { body: req.body, err: 'Usuário ou senha inválido' });
            } else {
                req.session.user = user[0];
                if (user[0].admin == 1) {
                    res.redirect('/admin/dashboard');   
                } else {
                    res.redirect('dashboard');
                }
            }
        });
    }
};
//--------------------------------------------------------------------------------------------------------------
//SALVAR RESPOSTAS ALATÓRIAS/AUXILIARES DO USUÁRIO
const salvarRespostas = (req, res, next) => {
    const resposta = new RespostasModel(req.body.resposta, req.body.id_usuario, req.body.id_pergunta);
    resposta.salvarRespostas(resposta).then(respo => {
        res.send('Resposta salva');
    });
};
//--------------------------------------------------------------------------------------------------------------
//VISUALIZAR PERFIL - USUARIO 
const verPerfil = (req, res, next) => {
    if (req.session.user != undefined) {
        const usuario = new UsuarioModel();
        usuario.id = req.session.user.id;
        usuario.visualizarPerfil(usuario).then(user => {
            res.render('perfil', { user: user[0] });
        });
    } else {
        res.redirect('login', { err: null, body: req.body });
    }
};
//--------------------------------------------------------------------------------------------------------------
//CARREGAR DASHBOARD DO USUÁRIO 
const carregarDashboard = (req, res, next) => {
    if (req.session.user != undefined) {
        const usuario = new UsuarioModel();
        usuario.id = req.session.user.id;
        const consulta = new ConsultaModel();
        const sintoma = new SintomaModel();
        consulta.listarResumoConsultaDoUsuario(usuario).then(consultas => {
            usuario.visualizarPerfil(usuario).then(user => {
                sintoma.listarSintomasParaFormularioDeConsulta(sintoma).then(sintomas => {
                    res.render('userDashboard', { consultas, user: user[0], sintomas }); //alterado de 'dashboard' para 'userDashboard'
                }).catch(err => {
                    res.send(err.message);
                });
            }).catch(err => {
                res.send(err.message);
            });
        }).catch(err => {
            res.send(err.message);
        });
    } else {
        res.render('login', { err: null, body: req.body });
    }
};
//--------------------------------------------------------------------------------------------------------------
//USUARIO SAIR E ENCERRAR A SESSÃO 
const sair = (req, res, next) => {
    req.session.user = undefined;
    res.redirect('/login');
};
//--------------------------------------------------------------------------------------------------------------


module.exports = { cadastrarUsuario, realizarLogin, salvarRespostas, verPerfil, carregarDashboard, carregarPaginaLogin, sair };