const BaseRepository = require("./base.repository");
//const db = require('../entities/index');

class PacienteRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Pacientes");
  }

  /*getAll() {
    return this._db.models[this.entity].findAll({ include: [ db.models.Consultas ] });
  }*/

}

module.exports = PacienteRepository;
