const conect = require('../config/BD_CONECT');

class ConsultaParaSintomas {
  constructor (id_consulta, id_sintoma) {
    this._id_consulta = id_consulta;
    this._id_sintoma = id_sintoma;
  }
  
  get id_consulta() {
    return this._id_consulta;
  }
  get id_sintoma() {
    return this._id_sintoma;
  }
  set id_consulta(value){
    this._id_consulta = value
  }
  set id_sintoma(value){
    this._id_sintoma = value
  }

  salvarConsultaParaSintomas(consultaParaSintomas) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO consulta_para_sintomas(id_consulta, id_sintoma) VALUES(?,?)`, [consultaParaSintomas._id_consulta, consultaParaSintomas._id_sintoma], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });   
  }
}

module.exports = ConsultaParaSintomas;




