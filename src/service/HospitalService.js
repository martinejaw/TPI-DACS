const BaseService = require("./base.service");
const { Hospital } = require("../domain/models");

class HospitalService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.HospitalRepository,Hospital);
    }
}

module.exports = HospitalService;