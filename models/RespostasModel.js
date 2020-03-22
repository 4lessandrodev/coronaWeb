const conect = require('../config/BD_CONECT');

class RespostasModel {
  constructor (resposta, id_usuario, id_pergunta) {
    this.id = null;
    this._resposta = resposta;
    this._id_usuario = id_usuario;
    this._id_pergunta = id_pergunta;
  }
  
  get id(){
    return this._id;
  }
  get resposta() {
    return this._resposta;
  }
  get id_usuario() {
    return this._id_usuario;
  }
  get id_pergunta() {
    return this._id_pergunta;
  }

  set id(value){
    this._id = value;
  }
  set resposta(value){
    this._resposta = value;
  }
  set id_usuario(value){
    this._id_usuario = value;
  }
  set id_pergunta(value){
    this._id_pergunta = value;
  }

  salvarRespostas(resposta) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO respostas(resposta, id_usuario, id_pergunta) VALUES(?,?,?)`, [resposta._resposta, resposta._id_usuario, resposta._id_pergunta], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });   
  }
}

module.exports = RespostasModel;




