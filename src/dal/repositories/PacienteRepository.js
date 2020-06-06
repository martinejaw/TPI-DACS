const BaseRepository = require("./base.repository");
//const db = require('../entities/index');

class PacienteRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "Pacientes");
    }
    
    async obtenerUno(){
        return this._db.models[this.entity].findOne();
    }
    /*getAll() {
        return this._db.models[this.entity].findAll({ include: [ db.models.Consultas ] });
    }*/

}

module.exports = PacienteRepository;
