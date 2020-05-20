const BaseRepository = require("./base.repository");

class PacienteRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Pacientes");
  }
}

module.exports = PacienteRepository;
