const BaseService = require("./base.service");
const { Consulta } = require("../domain/models");

class ConsultaService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.ConsultaRepository,Consulta);
    }
}

module.exports = ConsultaService;
