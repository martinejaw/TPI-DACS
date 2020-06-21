const BaseService = require("./base.service");
const { Caso } = require("../domain/models");

class CasoService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.CasoRepository,Caso);
    }
    async actualizar(entity, idCaso){
    	const updatedEntity = await this._entityRepository.update(idCaso, entity);
        return updatedEntity;
    }
}

module.exports = CasoService;