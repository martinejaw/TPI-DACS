const BaseService = require("./base.service");
const { Medico } = require("../domain/models");

class MedicoService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.MedicoRepository,Medico);
    }
}

module.exports = MedicoService;
