const BaseRepository = require("./base.repository");
const { Op } = require('sequelize')

class PruebaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Pruebas");
  }
  updatePrueba(id, idCaso, entity){
    return this._db.models[this.entity].update(entity, {where: {id:id,CasoId:idCaso}});
  }

  contarPruebas(){
    let fechaHoy = new Date();
    var date = fechaHoy.getFullYear()+'-'+(fechaHoy.getMonth()+1)+'-'+fechaHoy.getDate();

    return this._db.models[this.entity].count({where: {resultado: false, fechaResultado:{[Op.gte]: date}}});
    return this._db.models[this.entity].count({where: {resultado: false, fechaResultado:{[Op.gte]: date}}});
    return this._db.models[this.entity].count({where: {resultado: false, fechaResultado:{[Op.gte]: date}}});
  }
}

module.exports = PruebaRepository;