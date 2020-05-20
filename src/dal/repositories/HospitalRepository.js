const BaseRepository = require("./base.repository");

class HospitalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Hospitales");
  }
}

module.exports = HospitalRepository;