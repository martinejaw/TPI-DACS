const BaseService = require("./base.service");
const { Recurso } = require("../domain/models");

class RecursoService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.RecursoRepository,Recurso);
    }

    async updateRecurso(CUIT, id, entity) {
        const updatedEntity = await this._entityRepository.update(id, CUIT, entity);
        return updatedEntity;
      }

    async obtenerTodosRecursosHospital(CUIT) {
        const updatedEntity = await this._entityRepository.obtenerTodosRecursosHospital(CUIT);
        return updatedEntity;
      }

}

module.exports = RecursoService;