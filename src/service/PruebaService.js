const BaseService = require("./base.service");
const { Hospital } = require("../domain/models");

class PruebaService extends BaseService {
    constructor({ PruebaRepository }){
        super(PruebaRepository,Prueba);
    }
}

module.exports = PruebaService;