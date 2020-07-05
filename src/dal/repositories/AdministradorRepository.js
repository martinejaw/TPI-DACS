const BaseRepository = require("./base.repository");

class AdministradorRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Administradores");
  }

  async obtenerHospital(dni) {
    return this._db.models[this.entity].findByPk(dni, { include: [this._db.models.Hospitales] });
  }
}

module.exports = AdministradorRepository;