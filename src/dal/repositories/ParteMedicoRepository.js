const BaseRepository = require("./base.repository");

class ParteMedicoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "PartesMedicos");
  }
}

module.exports = ParteMedicoRepository;
