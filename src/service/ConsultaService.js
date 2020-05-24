const BaseService = require("./base.service");
const { Consulta } = require("../domain/models");

class ConsultaService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.ConsultaRepository,Consulta);
    }
    async getSinResponder(id){
        const entity = await this._entityRepository.getSinResponder(id);
        return entity;
    }
    
}

module.exports = ConsultaService;
