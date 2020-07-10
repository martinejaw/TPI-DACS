const BaseService = require("./base.service");
const { Hospital } = require("../domain/models");

class HospitalService extends BaseService {
    constructor({ UnitOfWork }) {
        super(UnitOfWork.HospitalRepository, Hospital);
    }

    async getHospitalCiudad(CUIT) {
        const entity = await this._entityRepository.getHospitalCiudad(CUIT);
        return entity;
    }
}

module.exports = HospitalService;