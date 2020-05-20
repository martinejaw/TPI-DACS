const BaseService = require("./base.service");
const { Consulta } = require("../domain/models");

class ConsultaService extends BaseService {
    constructor({ ConsultaRepository }){
        super(ConsultaRepository,Consulta);
    }
}

module.exports = ConsultaService;
