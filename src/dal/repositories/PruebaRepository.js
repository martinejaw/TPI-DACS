const BaseRepository = require("./base.repository");
const { Op } = require('sequelize')

class PruebaRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "Pruebas");
    }
    updatePrueba(id, idCaso, entity){
        return this._db.models[this.entity].update(entity, {where: {id:id,CasoId:idCaso}});
    }

    contarPruebasRealizadas(){
        let fechaHoy = new Date();
        let date = fechaHoy.getFullYear()+'-'+(fechaHoy.getMonth()+1)+'-'+fechaHoy.getDate();

        // Pruebas Realizadas Hoy
        return this._db.models[this.entity].count({where: {fecha:{[Op.gte]: date}}});
    }

    contarPruebasRealizadasSinResultados(){
        let fechaHoy = new Date();
        let date = fechaHoy.getFullYear()+'-'+(fechaHoy.getMonth()+1)+'-'+fechaHoy.getDate();

        // Pruebas sin resultado de Hoy
        return this._db.models[this.entity].count({where: {fechaResultado: null, fecha:{[Op.gte]: date}}});
    }

    contarPruebasPositivas(){
        let fechaHoy = new Date();
        let date = fechaHoy.getFullYear()+'-'+(fechaHoy.getMonth()+1)+'-'+fechaHoy.getDate();
        //Pruebas Positivas de Hoy
        return this._db.models[this.entity].count({where: {resultado: true, fechaResultado: {[Op.ne]: null},fechaResultado:{[Op.gte]: date}}});
    }

    contarPruebasNegativas(){
        let fechaHoy = new Date();
        let date = fechaHoy.getFullYear()+'-'+(fechaHoy.getMonth()+1)+'-'+fechaHoy.getDate();
        //Pruebas Negativas de Hoy
        return this._db.models[this.entity].count({where: {resultado: false, fechaResultado: {[Op.ne]: null}, fechaResultado:{[Op.gte]: date}}});
  }
}

module.exports = PruebaRepository;