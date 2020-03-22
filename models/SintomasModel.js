const conect = require('../config/BD_CONECT');

class SintomasModel {
  constructor (descricao) {
    this._id = null;
    this._descricao = descricao;
    this._grupo_risco = grupo_risco;
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
  
  set id(value){
    this._id = value;
  }
  set descricao(value){
    this._descricao = value;
  }
  set grupo_risco(value) {
    this._grupo_risco = value;
  }
  
  salvarSintomas(sintoma) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO sintomas(descricao, grupo_risco) VALUES(?,?)`, [sintoma._descricao, sintoma._grupo_risco], (err, result) => {
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
      WHERE con_sin.id_consulta = con.id AND sin.id = con_sin.id_sintoma AND con.id = ?`, [consulta._id], (err, result) => {
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
      conect.query(`UPDATE sintomas SET descricao = ?, SET grupo_risco = ? WHERE id = ?`, [sintoma._descricao, sintoma._grupo_risco, sintoma._id], (err, result) => {
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




