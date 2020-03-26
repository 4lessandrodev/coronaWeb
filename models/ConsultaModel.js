const conect = require('../config/BD_CONECT');

class ConsultaModel {
  constructor (id_usuario, id_status_consulta = 1) {
    this._id = null;
    this._id_usuario = id_usuario;
    this._id_status_consulta = id_status_consulta;
  }
  
  get id() {
    return this._id;
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
  
  set id_usuario(value){
    this._id_usuario = value;
  }
  
  set id_status_consulta(value) {
    this._id_status_consulta = value;
  }
  
  salvarConsulta(consulta) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO consultas(id_usuario, id_status_consulta) VALUES(?,?)`, [consulta._id_usuario, consulta._id_status_consulta], (err, result) => {
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
      conect.query(`SELECT c.id, c.data_hora, c.id_usuario, st.descricao AS status_consulta
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
      FROM consultas AS c , status_para_consultas AS st WHERE c.id_usuario = ? AND c.id_status_consulta = st.id`, [usuario._id], (err, result) => {
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
  
  contarAtendimentos() {
    return new Promise((resolve, reject) => {
      conect.query(`SELECT COUNT(c.id) AS qtd_atendimentos FROM consultas AS c`, (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }
  
  suspeitosDeCorona() {
    return new Promise((resolve, reject) => {
      conect.query(`SELECT COUNT(cps.id_consulta) AS sintomas FROM consulta_para_sintomas AS cps WHERE cps.id_sintoma IN('2','6','8','10','18','19') GROUP BY cps.id_consulta`, (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }
  
  consultasPorBairros() {
    return new Promise((resolve, reject) => {
      conect.query(`SELECT perfil.bairro, COUNT(perfil.id_usuario) AS consultas_usuario FROM consultas, perfil WHERE perfil.id_usuario = consultas.id_usuario AND consultas.id IN(SELECT cps.id_consulta AS sintomas FROM consulta_para_sintomas AS cps WHERE cps.id_sintoma IN('2','6','8','10','18','19') GROUP BY cps.id_consulta) ORDER BY consultas_usuario`, (err, result) => {
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




