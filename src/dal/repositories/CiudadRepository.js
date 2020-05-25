const BaseRepository = require("./base.repository");

class CiudadRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Ciudades");
  }
}

module.exports = CiudadRepository;