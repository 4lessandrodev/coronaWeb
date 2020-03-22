const conect = require('../config/BD_CONECT');

class PerfilModel {
  constructor (nome, email, idade, genero, id_usuario, endereco, bairro, cidade, estado, cep, ibge) {
    this._id = null;
    this._nome = nome;
    this._email = email;
    this._idade = idade;
    this._genero = genero;
    this._id_usuario = id_usuario;
    this._endereco = endereco;
    this._bairro = bairro;
    this._cidade = cidade;
    this._estado = estado;
    this._cep = cep;
    this._ibge = ibge;
  }
  
  get id(){
    return this._id;
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

  get bairro() {
    return this._bairro;
  }
  
  get endereco(){
    return this._endereco;
  }
  get cidade(){
    return this._cidade;
  }
  get estado(){
    return this._estado;
  }
  get cep(){
    return this._cep;
  }
  get ibge(){
    return this._ibge;
  }
  
  set id(value){
    this._id = value;
  }
  set nome(value){
    this._nome = value;
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
  
  set endereco(value) {
    this._endereco = value;
  }
  set cidade(value) {
    this._cidade = value;
  }
  set estado(value) {
    this._estado = value;
  }
  set cep(value) {
    this._cep = value;
  }
  set ibge(value) {
    this._ibge = value;
  }
  set bairro(value) {
    this._bairro = value;
  }
  
  salvarPerfil(perfil) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO perfil(nome, email, idade, genero, id_usuario, endereco, bairro, cidade, estado, cep, ibge) VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
        [perfil._nome, perfil._email, perfil._idade, perfil._genero, perfil._id_usuario,
        perfil._endereco, perfil._bairro, perfil._cidade, perfil._estado, perfil._cep, perfil._ibge
        ], (err, result) => {
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




