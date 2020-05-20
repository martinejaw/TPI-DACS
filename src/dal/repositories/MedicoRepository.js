const BaseRepository = require("./base.repository");

class MedicoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Medicos");
  }
}

module.exports = MedicoRepository;
