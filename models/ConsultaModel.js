const conect = require('../config/BD_CONECT');

class ConsultaModel {
  constructor (contato_alguem_corona, viagem_internacional, id_usuario, id_status_consulta = 1) {
    this._id = null;
    this._contato_alguem_corona = contato_alguem_corona;
    this._viagem_internacional = viagem_internacional;
    this._id_usuario = id_usuario;
    this._id_status_consulta = id_status_consulta;
  }
  
  get id() {
    return this._id;
  }
  get contato_alguem_corona(){
    return this._contato_alguem_corona;
  }
  get viagem_internacional(){
    return this._viagem_internacional;
  }
  get id_usuario(){
    return this._id_usuario;
  }
  get id_status_consulta() {
    return this._id_status_consulta;
  }
  
  
  set id(value){
    this._id = value;
  }
  set contato_alguem_corona(value){
    this._contato_alguem_corona = value;
  }
  
  set viagem_internacional(value){
    this._viagem_internacional = value;
  }
  
  set id_usuario(value){
    this._id_usuario = value;
  }
  
  set id_status_consulta(value) {
    this._id_status_consulta = value;
  }
  
  salvarConsulta(consulta) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO consultas(
        contato_alguem_corona, viagem_internacional, id_usuario, id_status_consulta
        ) VALUES(?,?,?,?)`, [ consulta._contato_alguem_corona,
          consulta._viagem_internacional,
          consulta._id_usuario,
          consulta._id_status_consulta], (err, result) => {
            if (err) {
              reject(err.message);
            } else {
              resolve(result);
            }
          });
        });   
      }
      
      verConsultaEspecificaDoUsuario(usuario, consulta) {
        return new Promise((resolve, reject) => {
          conect.query(`SELECT c.id, c.data_hora, c.contato_alguem_corona,
          c.viagem_internacional, c.id_usuario, st.descricao AS status_consulta
          FROM consultas AS c, status_para_consultas AS st
          WHERE st.id = c.id_status_consulta AND c.id_usuario = ? AND c.id = ?`, [usuario._id, consulta._id,], (err, result) => {
            if (err) {
              reject(err.message);
            } else {
              resolve(result);
            }
          });
        });
      } 
      
      listarResumoConsultaDoUsuario(usuario) {
        return new Promise((resolve, reject) => {
          conect.query(`SELECT c.id, c.data_hora, st.descricao AS status_consulta
          FROM consultas AS c , status_para_consultas AS st WHERE c.id_usuario = ? AND c.id_status_consulta`, [usuario._id], (err, result) => {
            if (err) {
              reject(err.message);
            } else {
              resolve(result);
            }
          });
        });
      }
      
      alterarStatusDaConsulta(consulta) {
        return new Promise((resolve, reject) => {
          conect.query(`UPDATE consultas SET id_status_consulta = ? WHERE id = ?`, [consulta._id_status_consulta, consulta._id], (err, result) => {
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
    
    
    
    
    