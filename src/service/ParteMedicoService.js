const BaseService = require("./base.service");
const { ParteMedico } = require("../domain/models");

class ParteMedicoService extends BaseService {
    constructor({ ParteMedicoRepository }){
        super(ParteMedicoRepository,ParteMedico);
    }
}

module.exports = ParteMedicoService;
