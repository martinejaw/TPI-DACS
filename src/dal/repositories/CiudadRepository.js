const BaseRepository = require("./base.repository");

class CiudadRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Ciudad");
  }
}

module.exports = CiudadRepository;