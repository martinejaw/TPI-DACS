const BaseRepository = require("./base.repository");
const { Op } = require('sequelize')
const { QueryTypes } = require('sequelize');

class PruebaRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "Pruebas");
    }
    updatePrueba(id, idCaso, entity){
        return this._db.models[this.entity].update(entity, {where: {id:id,CasoId:idCaso}});
    }

    async contarPruebasRealizadas(CUIT){
        const consulta = "SELECT COUNT(Pruebas.id) as cont FROM Pruebas INNER JOIN (SELECT Casos.id FROM Casos INNER JOIN (SELECT Medicos.dni FROM Medicos WHERE HospitaleCUIT = "+CUIT+") AS M ON Casos.MedicoDni = M.dni) AS C ON Pruebas.CasoId = C.id WHERE date(Pruebas.fecha) >= date('now');";

        const resultado = await this._db.sequelize.query(consulta, {
            nest: true,
            type: QueryTypes.SELECT
        });

        return resultado[0].cont;

        // Pruebas Realizadas Hoy
        //return this._db.models[this.entity].count({where: {fecha:{[Op.gte]: date}}});
    }

    async contarPruebasRealizadasSinResultados(CUIT){
        //let fechaHoy = new Date();
        //let date = fechaHoy.getFullYear()+'-'+(fechaHoy.getMonth()+1)+'-'+fechaHoy.getDate();

        const consulta = "SELECT COUNT(Pruebas.id) as cont FROM Pruebas INNER JOIN (SELECT Casos.id FROM Casos INNER JOIN (SELECT Medicos.dni FROM Medicos WHERE HospitaleCUIT = "+CUIT+") AS M ON Casos.MedicoDni = M.dni) AS C ON Pruebas.CasoId = C.id WHERE Pruebas.fechaResultado IS NULL AND date(Pruebas.fecha) >= date('now');";

        const resultado = await this._db.sequelize.query(consulta, {
            nest: true,
            type: QueryTypes.SELECT
        });
        return resultado[0].cont;

        // Pruebas sin resultado de Hoy
        //return this._db.models[this.entity].count({where: {fechaResultado: null, fecha:{[Op.gte]: date}}});
    }

    async contarPruebasPositivas(CUIT){
        //Pruebas Positivas de Hoy

        const consulta = "SELECT COUNT(Pruebas.id) as cont FROM Pruebas INNER JOIN (SELECT Casos.id FROM Casos INNER JOIN (SELECT Medicos.dni FROM Medicos WHERE HospitaleCUIT = "+CUIT+") AS M ON Casos.MedicoDni = M.dni) AS C ON Pruebas.CasoId = C.id WHERE Pruebas.fechaResultado IS NOT NULL AND date(Pruebas.fecha) >= date('now') AND Pruebas.resultado = true;";

        const resultado = await this._db.sequelize.query(consulta, {
            nest: true,
            type: QueryTypes.SELECT
        });
        return resultado[0].cont;
        //return this._db.models[this.entity].count({where: {resultado: true, fechaResultado: {[Op.ne]: null},fechaResultado:{[Op.gte]: date}}});
    }

    async contarPruebasNegativas(CUIT){
        
        //Pruebas Negativas de Hoy

        const consulta = "SELECT COUNT(Pruebas.id) as cont FROM Pruebas INNER JOIN (SELECT Casos.id FROM Casos INNER JOIN (SELECT Medicos.dni FROM Medicos WHERE HospitaleCUIT = "+CUIT+") AS M ON Casos.MedicoDni = M.dni) AS C ON Pruebas.CasoId = C.id WHERE Pruebas.fechaResultado IS NOT NULL AND date(Pruebas.fecha) >= date('now') AND Pruebas.resultado = false;";

        const resultado =  await this._db.sequelize.query(consulta, {
            nest: true,
            type: QueryTypes.SELECT
        });
        return resultado[0].cont;

        //return this._db.models[this.entity].count({where: {resultado: false, fechaResultado: {[Op.ne]: null}, fechaResultado:{[Op.gte]: date}}});
  }

    async getPruebasDeCaso(casoId){
        return this._db.models[this.entity].findAll({ where: { CasoId: casoId } });
    }

}

module.exports = PruebaRepository;