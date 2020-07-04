const BaseRepository = require("./base.repository");

class HospitalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Hospitales");
  }

  async getHospitalCiudad(CUIT) {
    return this._db.models[this.entity].findByPk(CUIT,{ include: {  model:this._db.models.Direcciones, include: {model:this._db.models.Calles, include: [this._db.models.Ciudades]} } });
  }
}

module.exports = HospitalRepository;