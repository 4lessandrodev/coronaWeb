const conect = require('../config/BD_CONECT');

class SintomasModel {
  constructor (descricao, grupo_risco, pergunta_mae = 0, ativo = 1) {
    this._id = null;
    this._descricao = descricao;
    this._grupo_risco = grupo_risco;
    this._pergunta_mae = pergunta_mae;
    this._ativo = ativo;
  }
  
  get id(){
    return this._id;
  }
  get descricao() {
    return this._descricao;
  }
  get grupo_risco() {
    return this._grupo_risco;
  }
  get pergunta_mae() {
    return this._pergunta_mae;
  }
  get ativo() {
    return this._ativo;
  }

  set id(value){
    this._id = value;
  }
  set descricao(value){
    this._descricao = value;
  }
  set grupo_risco(value) {
    this._grupo_risco = value;
  }
  set pergunta_mae(value) {
  this._pergunta_mae = value;
  }
  set ativo(value) {
  this._ativo = value;
  }
  
  salvarSintomas(sintoma) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO sintomas(descricao, grupo_risco, ativo, pergunta_mae) VALUES(?,?)`, [sintoma._descricao, sintoma._grupo_risco, sintoma._ativo, sintoma.pergunta_mae], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });   
  }
  
  listarSintomasDeUmaConsulta(consulta) {
    return new Promise((resolve, reject) => {
      conect.query(`SELECT sin.id, sin.descricao 
      FROM sintomas AS sin, consultas AS con, consulta_para_sintomas AS con_sin 
      WHERE con_sin.id_consulta = con.id AND sin.id = con_sin.id_sintoma AND con.id = ? AND ativo = ?`, [consulta._id, consulta._ativo], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }

  alterarSintomas(sintoma) {
    return new Promise((resolve, reject) => {
      conect.query(`UPDATE sintomas SET descricao = ?, SET grupo_risco = ?, SET pergunta_mae = ?, SET ativo = ? WHERE id = ?`, [sintoma._descricao, sintoma._grupo_risco, sintoma._pergunta_mae, sintoma._ativo, sintoma._id], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }


}

module.exports = SintomasModel;




