const BaseRepository = require("./base.repository");
const { Op } = require('sequelize')
const { QueryTypes } = require('sequelize')

class ParteMedicoRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "PartesMedicos");
    }

    async cantidadCurados(CUIT){

        const consulta = "SELECT COUNT(PartesMedicos.id) as cont FROM PartesMedicos INNER JOIN (SELECT Casos.id FROM Casos INNER JOIN (SELECT Medicos.dni FROM Medicos WHERE HospitaleCUIT = "+CUIT+") AS M ON Casos.MedicoDni = M.dni) AS C ON PartesMedicos.CasoId = C.id WHERE date(PartesMedicos.fecha) >= date('now') AND PartesMedicos.estadoVital = :estadoVital;";

        return await this._db.sequelize.query(consulta, {
            replacements: { estadoVital: 'Curado' },
            nest: true,
            type: QueryTypes.SELECT
        });

        //return this._db.models[this.entity].count({where: {[Op.and]: [{estadoVital: "Curado"},{fecha:{[Op.gte]: date} } ] }});
    }

    async cantidadMuertos(CUIT){
        const consulta = "SELECT COUNT(PartesMedicos.id) as cont FROM PartesMedicos INNER JOIN (SELECT Casos.id FROM Casos INNER JOIN (SELECT Medicos.dni FROM Medicos WHERE HospitaleCUIT = "+CUIT+") AS M ON Casos.MedicoDni = M.dni) AS C ON PartesMedicos.CasoId = C.id WHERE date(PartesMedicos.fecha) >= date('now') AND PartesMedicos.estadoVital = :estadoVital;";

        return await this._db.sequelize.query(consulta, {
            replacements: { estadoVital: 'Muerto' },
            nest: true,
            type: QueryTypes.SELECT
        });

        //return this._db.models[this.entity].count({where: {[Op.and]: [{estadoVital: "Muerto"},{fecha:{[Op.gte]: date} } ] }});
    }

    async cantidadEnfermos(CUIT){
        const consulta = "SELECT COUNT(PartesMedicos.id) as cont FROM PartesMedicos INNER JOIN (SELECT Casos.id FROM Casos INNER JOIN (SELECT Medicos.dni FROM Medicos WHERE HospitaleCUIT = "+CUIT+") AS M ON Casos.MedicoDni = M.dni) AS C ON PartesMedicos.CasoId = C.id WHERE date(PartesMedicos.fecha) >= date('now') AND PartesMedicos.estadoVital = :estadoVital;";

        return await this._db.sequelize.query(consulta, {
            replacements: { estadoVital: 'Enfermo' },
            nest: true,
            type: QueryTypes.SELECT
        });

        //return this._db.models[this.entity].count({where: {[Op.and]: [{estadoVital: "Enfermo"},{fecha:{[Op.gte]: date} } ] }});
    }

}

module.exports = ParteMedicoRepository;
