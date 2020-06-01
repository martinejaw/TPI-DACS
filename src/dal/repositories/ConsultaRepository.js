const BaseRepository = require("./base.repository");
const { Op } = require("sequelize");

class ConsultaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Consultas");
  }

  getSinResponder(medicodni) {
    return this._db.models[this.entity].findAll({ where: {[Op.and]: 
      [{MedicoDni: medicodni},{diagnostico: null}] }
    });
  }
}

module.exports = ConsultaRepository;
