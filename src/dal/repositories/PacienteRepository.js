const BaseRepository = require("./base.repository");
//const db = require('../entities/index');

class PacienteRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Pacientes");
  }
  
  /*get(dni) {
    return this._db.models[this.entity].findOne({ where: { dni } });
  }

  update(dni, entity) {
    delete entity.createdAt;
    delete entity.updatedAt;
    return this._db.models[this.entity].update(entity, { where: { dni } });
  }

  delete(dni) {
    return this._db.models[this.entity].destroy({ where: { dni } });
  }*/
  /*getAll() {
    return this._db.models[this.entity].findAll({ include: [ db.models.Consultas ] });
  }*/

}

module.exports = PacienteRepository;
