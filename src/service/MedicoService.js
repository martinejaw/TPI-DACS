const BaseService = require("./base.service");
const { Medico } = require("../domain/models");

class MedicoService extends BaseService {
    constructor({ MedicoRepository }){
        super(MedicoRepository,Medico);
    }

    async getMedicoLibre(){
        let resultado = await this._entityRepository.getMedicoLibre();
        return resultado[0].dni;
    }

}

module.exports = MedicoService;
