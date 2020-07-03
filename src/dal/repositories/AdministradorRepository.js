const BaseRepository = require("./base.repository");

class AdministradorRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Administradores");
  }
}

module.exports = AdministradorRepository;