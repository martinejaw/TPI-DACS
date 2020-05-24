const BaseService = require("./base.service");
const { ParteMedico } = require("../domain/models");

class ParteMedicoService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.ParteMedicoRepository,ParteMedico);
    }
}

module.exports = ParteMedicoService;
