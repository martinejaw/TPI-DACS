const BaseService = require("./base.service");
const { Hospital } = require("../domain/models");

class HospitalService extends BaseService {
    constructor({ HospitalRepository }){
        super(HospitalRepository,Hospital);
    }
}

module.exports = HospitalService;