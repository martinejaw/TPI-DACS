const BaseRepository = require("./base.repository");

class DireccionRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Direccion");
  }
}

module.exports = DireccionRepository;