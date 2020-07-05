const BaseRepository = require("./base.repository");
const { Op } = require('sequelize')
const { QueryTypes } = require('sequelize')

class ParteMedicoRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "PartesMedicos");
    }

    async cantidadCurados(CUIT){

        const consulta = "SELECT COUNT(PartesMedicos.id) as cont FROM PartesMedicos INNER JOIN (SELECT Casos.id FROM Casos INNER JOIN (SELECT Medicos.dni FROM Medicos WHERE HospitaleCUIT = "+CUIT+") AS M ON Casos.MedicoDni = M.dni) AS C ON PartesMedicos.CasoId = C.id WHERE date(PartesMedicos.fecha) >= date('now') AND PartesMedicos.estadoVital = :estadoVital;";

        const resultado = await this._db.sequelize.query(consulta, {
            replacements: { estadoVital: 'Estable' },
            nest: true,
            type: QueryTypes.SELECT
        });

        return resultado[0].cont;

        //return this._db.models[this.entity].count({where: {[Op.and]: [{estadoVital: "Curado"},{fecha:{[Op.gte]: date} } ] }});
    }

    async cantidadMuertos(CUIT){
        const consulta = "SELECT COUNT(PartesMedicos.id) as cont FROM PartesMedicos INNER JOIN (SELECT Casos.id FROM Casos INNER JOIN (SELECT Medicos.dni FROM Medicos WHERE HospitaleCUIT = "+CUIT+") AS M ON Casos.MedicoDni = M.dni) AS C ON PartesMedicos.CasoId = C.id WHERE date(PartesMedicos.fecha) >= date('now') AND PartesMedicos.estadoVital = :estadoVital;";

        const resultado = await this._db.sequelize.query(consulta, {
            replacements: { estadoVital: 'Fallecido' },
            nest: true,
            type: QueryTypes.SELECT
        });
        return resultado[0].cont;

        //return this._db.models[this.entity].count({where: {[Op.and]: [{estadoVital: "Muerto"},{fecha:{[Op.gte]: date} } ] }});
    }

    async cantidadEnfermos(CUIT){
        const consulta = "SELECT COUNT(PartesMedicos.id) as cont FROM PartesMedicos INNER JOIN (SELECT Casos.id FROM Casos INNER JOIN (SELECT Medicos.dni FROM Medicos WHERE HospitaleCUIT = "+CUIT+") AS M ON Casos.MedicoDni = M.dni) AS C ON PartesMedicos.CasoId = C.id WHERE date(PartesMedicos.fecha) >= date('now') AND (PartesMedicos.estadoVital = :estadoVital or PartesMedicos.estadoVital = :estadoVital2);";

        const resultado = await this._db.sequelize.query(consulta, {
            replacements: { estadoVital: 'Grave', estadoVital2: 'Critico' },
            nest: true,
            type: QueryTypes.SELECT
        });
        return resultado[0].cont;

        //return this._db.models[this.entity].count({where: {[Op.and]: [{estadoVital: "Enfermo"},{fecha:{[Op.gte]: date} } ] }});
    }

    async getByCasoId(casoId){
        return this._db.models[this.entity].findAll({ where: { CasoId: casoId } });
    }

}

module.exports = ParteMedicoRepository;
