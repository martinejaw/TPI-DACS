const BaseRepository = require("./base.repository");

class CasoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Casos");
  }
}

module.exports = CasoRepository;