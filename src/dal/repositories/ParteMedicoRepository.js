const BaseRepository = require("./base.repository");
const { Op } = require('sequelize')

class ParteMedicoRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "PartesMedicos");
    }

    async cantidadCurados(){
        let fechaHoy = new Date();
        let date = fechaHoy.getFullYear()+'-'+(fechaHoy.getMonth()+1)+'-'+fechaHoy.getDate();

        return this._db.models[this.entity].count({where: {[Op.and]: [{estadoVital: "Curado"},{fecha:{[Op.gte]: date} } ] }});
    }

    async cantidadMuertos(){
        let fechaHoy = new Date();
        let date = fechaHoy.getFullYear()+'-'+(fechaHoy.getMonth()+1)+'-'+fechaHoy.getDate();

        return this._db.models[this.entity].count({where: {[Op.and]: [{estadoVital: "Muerto"},{fecha:{[Op.gte]: date} } ] }});
    }

    async cantidadEnfermos(){
        let fechaHoy = new Date();
        let date = fechaHoy.getFullYear()+'-'+(fechaHoy.getMonth()+1)+'-'+fechaHoy.getDate();

        return this._db.models[this.entity].count({where: {[Op.and]: [{estadoVital: "Enfermo"},{fecha:{[Op.gte]: date} } ] }});
    }

}

module.exports = ParteMedicoRepository;
