const BaseService = require("./base.service");
const { Medico } = require("../domain/models");

class MedicoService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.MedicoRepository,Medico);
    }

    async getMedicoLibre(){
        let resultado = await this._entityRepository.getMedicoLibre();
        return resultado[0].dni;
    }

    async obtenerMedicosHospital(CUIT){
        let medicos = await this._entityRepository.obtenerMedicosHospital(CUIT);
        return medicos;
    }

}

module.exports = MedicoService;
