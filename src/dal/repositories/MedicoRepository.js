const BaseRepository = require("./base.repository");

class MedicoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Medicos");
  }

  async obtenerMedicoLibre(){
    return this._db.models[this.entity].findOne();
  }

}

module.exports = MedicoRepository;
