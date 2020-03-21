const conect = require('../config/BD_CONECT');

class UsuarioModel {
  constructor (telefone, senha) {
    this._telefone = telefone;
    this._senha = senha;
  }
  
  get senha() {
    return this._senha;
  }
  get telefone() {
    return this._telefone;
  }
  set senha(value) {
    this._senha = value;
  }
  set telefone(value) {
    this._telefone = value;
  }
  
  salvarUsuario(usuario) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO usuario(telefone, senha) VALUES(?,?)`, [usuario._telefone, usuario._senha], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });   
  }
}

module.exports = UsuarioModel;




