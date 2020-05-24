const BaseService = require("./base.service");
const { Paciente } = require("../domain/models");

class PacienteService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.PacienteRepository,Paciente);
    }

}

module.exports = PacienteService;