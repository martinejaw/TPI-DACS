const BaseRepository = require("./base.repository");

class RecursoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Recursos");
  }

  update(id, CUIT, entity) {
    return this._db.models[this.entity].update(entity, { where: { id, HospitaleCUIT: CUIT } });
  }

  obtenerTodosRecursosHospital(CUIT) {
    return this._db.models[this.entity].findAll({ where: { HospitaleCUIT: CUIT } });
  }
}

module.exports = RecursoRepository;