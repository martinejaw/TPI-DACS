const BaseService = require("./base.service");
const { Prueba } = require("../domain/models");

class PruebaService extends BaseService {
    constructor({ PruebaRepository }){
        super(PruebaRepository,Prueba);
    }
}

module.exports = PruebaService;