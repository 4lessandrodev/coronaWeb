const conect = require('../config/BD_CONECT');

class SintomasModel {
  constructor (descricao) {
    this._id = null;
    this._descricao = descricao;
  }
  
  get id(){
    return this._id
  }
  get descricao() {
    return this._descricao;
  }

  set id(value){
    this._id = value
  }
  set descricao(value){
    this._descricao = value
  }

  salvarSintomas(sintoma) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO sintomas(descricao) VALUES(?)`, [sintoma._descricao], (err, result) => {
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




