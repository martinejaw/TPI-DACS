const BaseRepository = require("./base.repository");

class SesionRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Sesiones");
  }

  borrar(uuid) {
    return this._db.models[this.entity].destroy({ where: { uuid } });
  }
}

module.exports = SesionRepository;