const BaseService = require("./base.service");

class CiudadService extends BaseService {
    constructor({ UnitOfWork }) {
        super(UnitOfWork.CiudadRepository, "Ciudad");
    }
}

module.exports = CiudadService;