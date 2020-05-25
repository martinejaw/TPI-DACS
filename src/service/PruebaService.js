const BaseService = require("./base.service");
const { Prueba } = require("../domain/models");

class PruebaService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.PruebaRepository,Prueba);
    }
    async updatePrueba(idPrueba,idCaso, entity) {
        const updatedEntity = await this._entityRepository.updatePrueba(idPrueba,idCaso, entity);
        return updatedEntity;
    }
}

module.exports = PruebaService;