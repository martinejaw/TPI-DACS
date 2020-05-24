const BaseRepository = require("./base.repository");

class RecursoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Recursos");
  }
}

module.exports = RecursoRepository;