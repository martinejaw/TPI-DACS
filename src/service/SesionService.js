const BaseService = require("./base.service");

class SesionService extends BaseService {
    constructor({ UnitOfWork }) {
        super(UnitOfWork.SesionRepository, "Sesion");
    }

    async borrar(uuid) {
        const entity = await this._entityRepository.borrar(uuid);
        return entity;
    }
}

module.exports = SesionService;