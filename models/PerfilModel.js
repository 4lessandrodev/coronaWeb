const conect = require('../config/BD_CONECT');

class PerfilModel {
  constructor (nome, email, idade, genero, id_usuario) {
    this.id = null;
    this._nome = nome;
    this._email = email;
    this._idade = idade;
    this._genero = genero;
    this._id_usuario = id_usuario;
  }
  
  get id(){
    return this._id
  }
  get nome() {
    return this._nome;
  }
  get email() {
    return this._email;
  }
  get idade() {
    return this._idade;
  }
  get genero(){
      return this._genero;
  }
  get id_usuario(){
      return this._id_usuario;
  }

  set id(value){
    this.id = value
  }
  set nome(value){
    this._nome = value
  }
  set email(value) {
    this._email = value;
  }
  set idade(value) {
    this._idade = value;
  }
  set genero(value){
    this._genero = value;
  }
  set id_usuario(value){
      this._id_usuario = value;
  }
  
  salvarPerfil(perfil) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO perfil(nome, email, idade, genero, id_usuario) VALUES(?,?,?,?,?)`, [perfil._nome, perfil._email, perfil._idade, perfil._genero, perfil._id_usuario], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });   
  }
}

module.exports = PerfilModel;




