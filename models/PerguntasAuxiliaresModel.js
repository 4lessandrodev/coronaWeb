const conect = require('../config/BD_CONECT');

class PerguntasAuxiliaresModel {
  constructor (descricao, id_sintoma, frequencia, gatilho_em_horas) {
    this.id = null;
    this._descricao = descricao;
    this._id_sintoma = id_sintoma;
    this._frequencia = frequencia;
    this._gatilho_em_horas = gatilho_em_horas
  }
  
  get id(){
    return this._id;
  }
  get descricao() {
    return this._descricao;
  }
  get id_sintoma() {
    return this._id_sintoma;
  }
  get frequencia() {
      return this._frequencia
  }
  get gatilho_em_horas(){
      return this._gatilho_em_horas
  }

  set id(value){
    this._id = value;
  }
  set descricao(value){
    this._descricao = value;
  }
  set id_sintoma(value){
    this._id_sintoma = value;
  }
  set frequencia(value){
      this._frequencia = value
  }
  set gatilho_em_horas(value){
    this._gatilho_em_horas = value
}

  salvarPerguntasAuxiliares(pergunta) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO perguntas_auxiliares(descricao, id_sintoma, frequencia, gatilho_em_horas) VALUES(?,?,?,?)`, [pergunta._descricao, pergunta._id_sintoma, pergunta._frequencia, pergunta._gatilho_em_horas], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });   
  }
}

module.exports = PerguntasAuxiliaresModel;




