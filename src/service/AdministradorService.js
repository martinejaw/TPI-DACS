const BaseService = require("./base.service");

class AdministradorService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.AdministradorRepository,"Administrador");
    }
}

module.exports = AdministradorService;