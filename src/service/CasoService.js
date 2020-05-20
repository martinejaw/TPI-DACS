const BaseService = require("./base.service");
const { Caso } = require("../domain/models");

class CasoService extends BaseService {
    constructor({ CasoRepository }){
        super(CasoRepository,Caso);
    }
}

module.exports = CasoService;