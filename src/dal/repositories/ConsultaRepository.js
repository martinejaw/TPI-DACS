const BaseRepository = require("./base.repository");

class ConsultaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Consultas");
  }

  getSinResponder(medicodni) {
    return this._db.models[this.entity].findAll({ where: {MedicoDni: medicodni}});
  }
}

module.exports = ConsultaRepository;
