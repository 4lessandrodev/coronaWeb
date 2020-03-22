const conect = require('./../config/BD_CONECT');

class StatusConsultaModel{
  constructor (descricao) {
    this._id = null;
    this._descricao = descricao;
  }

  get id(){
    return this._id;
  }
  get descricao() {
    return this._descricao;
  }

  set id(value){
    this._id = value;
  }
  set descricao(value) {
    this._descricao = value;
  }


  salvarStatus(status) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO status_para_consulta(descricao) VALUES(?)`, [status._descricao], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }

  alterarStatus(status) {
    return new Promise((resolve, reject) => {
      conect.query(`UPDATE status_para_consulta set descricao = ? WHERE id = ?`, [status._descricao, status._id], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }

}