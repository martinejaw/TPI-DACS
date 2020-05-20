const BaseRepository = require("./base.repository");

class ConsultaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Consultas");
  }
}

module.exports = ConsultaRepository;
