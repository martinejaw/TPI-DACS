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
    let date = fechaHoy.getFullYear()+'-'+(fechaHoy.getMonth()+1)+'-'+fechaHoy.getDate();

    // Pruebas Realizadas Hoy
    return this._db.models[this.entity].count({where: {fecha:{[Op.gte]: date}}});

    // Pruebas sin resultado de Hoy
    return this._db.models[this.entity].count({where: {fechaResultado: null, fecha:{[Op.gte]: date}}});

    //Pruebas Positivas de Hoy
    return this._db.models[this.entity].count({where: {resultado: true, fechaResultado: {[Op.ne]: null},fechaResultado:{[Op.gte]: date}}});

    //Pruebas Negativas de Hoy
    return this._db.models[this.entity].count({where: {resultado: false, fechaResultado: {[Op.ne]: null}, fechaResultado:{[Op.gte]: date}}});
  }
}

module.exports = PruebaRepository;