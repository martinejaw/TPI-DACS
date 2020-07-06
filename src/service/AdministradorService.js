const BaseService = require("./base.service");

class AdministradorService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.AdministradorRepository,"Administrador");
    }

    async obtenerHospital(dni) {
        const resultado = await this._entityRepository.obtenerHospital(dni);
        return resultado;
    }
}

module.exports = AdministradorService;