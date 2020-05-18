const BaseService = require("./base.service");
const { Paciente } = require("../domain/models");

class PacienteService extends BaseService {
    constructor({ PacienteRepository }){
        super(PacienteRepository,Paciente);
    }
}

module.exports = PacienteService;