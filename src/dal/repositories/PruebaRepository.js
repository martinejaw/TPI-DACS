const BaseRepository = require("./base.repository");

class PruebaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Pruebas");
  }
}

module.exports = PruebaRepository;