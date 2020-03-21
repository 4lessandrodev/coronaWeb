const conect = require('../config/BD_CONECT');

class ConsultaModel {
  constructor (teve_febre, tomou_medicamento, melhorou_apos_medicamento, contato_alguem_corona, viagem_internacional, outros_sintomas, gravidez, id_usuario) {
    this._id = null;
    this._teve_febre = teve_febre;
    this._tomou_medicamento = tomou_medicamento;
    this._melhorou_apos_medicamento =  melhorou_apos_medicamento;
    this._contato_alguem_corona = contato_alguem_corona;
    this._viagem_internacional = viagem_internacional;
    this._outros_sintomas = outros_sintomas;
    this._gravidez = gravidez
    this._id_usuario = id_usuario;
  }
  
  get id() {
    return this._id;
  }
  get teve_febre() {
    return this._teve_febre;
  }
  get tomou_medicamento() {
    return this._tomou_medicamento;
  }
  get melhorou_apos_medicamento() {
    return this._melhorou_apos_medicamento;
  }
  get contato_alguem_corona(){
      return this._contato_alguem_corona;
  }
  get viagem_internacional(){
      return this._viagem_internacional
  }
  get outros_sintomas(){
      return this._outros_sintomas
  }
  get gravidez(){
      return this._gravidez
  }
  get id_usuario(){
      return this._id_usuario;
  }

  set id(value){
    this._id = value
  }

  set teve_febre(value){
    this._teve_febre = value
  }
  set tomou_medicamento(value) {
    this._tomou_medicamento = value;
  }
  set melhorou_apos_medicamento(value) {
    this._melhorou_apos_medicamento = value;
  }
  set contato_alguem_corona(value){
    this._contato_alguem_corona = value;
  }
  set viagem_internacional(value){
    this._viagem_internacional = value
}
    set outros_sintomas(value){
    this._outros_sintomas = value
}
    set gravidez(value){
    this._gravidez = value
}
  set id_usuario(value){
      this._id_usuario = value;
  }
  
  salvarConsulta(consulta) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO consultas(
        teve_febre, tomou_medicamento, melhorou_apos_medicamento,
        contato_alguem_corona, viagem_internacional, outros_sintomas, gravidez, id_usuario
      ) VALUES(?,?,?,?,?,?,?,?)`, [consulta._teve_febre, 
        consulta._tomou_medicamento, 
        consulta._melhorou_apos_medicamento, 
        consulta._contato_alguem_corona,
        consulta._viagem_internacional,
        consulta._outros_sintomas,
        consulta._gravidez, 
        consulta._id_usuario], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });   
  }
}

module.exports =  ConsultaModel;




