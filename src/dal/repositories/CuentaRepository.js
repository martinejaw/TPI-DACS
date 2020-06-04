const BaseRepository = require("./base.repository");

class CuentaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Cuentas");
  }
}

module.exports = CuentaRepository;