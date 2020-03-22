const conect = require('./../config/BD_CONECT');

class ObservacaoConsultaModel{
  constructor (id_consulta, descricao) {
    this._id = null;
    this._id_consulta = id_consulta;
    this._descricao = descricao;
  }
  
  get id() {
    return this._id;
  }
  get id_consulta() {
    return this._id_consulta;
  }
  get descricao() {
    return this._descricao;
  }

  set id(value) {
    this._id = value;
  }
  set id_consulta(value) {
    this._id_consulta = value;
  }
  set descricao(value) {
    this._descricao = value;
  }

  salvarObservacao(observacao) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO observacoes_para_consulta(descricao, id_consulta) VALUES(?,?)`, [observacao._descricao, observacao._id_consulta], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }

  alterarObservacao(observacao) {
    return new Promise((resolve, reject) => {
      conect.query(`UPDATE observacoes_para_consulta SET descricao = ? WHERE  id = ?`, [observacao._descricao, observacao._id], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }

}

module.exports = ObservacaoConsultaModel;