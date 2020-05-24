const BaseRepository = require("./base.repository");

class MedicoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Medicos");
  }

  async encontrar(dni){
    const l = await this._db.models[this.entity].findByPk( dni );
    return l;
  }

  async getMedicoLibre(){
    const encontraalgo = await this.encontrar(41000000);
    return encontraalgo;
  }

}

module.exports = MedicoRepository;
