const BaseService = require("./base.service");
const { Caso } = require("../domain/models");

class CasoService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.CasoRepository,Caso);
    }
}

module.exports = CasoService;