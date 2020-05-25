const BaseRepository = require("./base.repository");

class PruebaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Pruebas");
  }
  updatePrueba(id, idCaso, entity){
    return this._db.models[this.entity].update(entity, {where: {id:id,CasoId:idCaso}});
  }
}

module.exports = PruebaRepository;