const BaseRepository = require("./base.repository");

class CasoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Casos");
  }

  getByDni(MedicoDni) {
    return this._db.models[this.entity].findAll( { where: {MedicoDni}} );
  }

}

module.exports = CasoRepository;