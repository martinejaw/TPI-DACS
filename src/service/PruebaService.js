const BaseService = require("./base.service");
const { Prueba } = require("../domain/models");

class PruebaService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.PruebaRepository,Prueba);
    }
}

module.exports = PruebaService;