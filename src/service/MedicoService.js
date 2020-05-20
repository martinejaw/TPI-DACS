const BaseService = require("./base.service");
const { Medico } = require("../domain/models");

class MedicoService extends BaseService {
    constructor({ MedicoRepository }){
        super(MedicoRepository,Medico);
    }
}

module.exports = MedicoService;
