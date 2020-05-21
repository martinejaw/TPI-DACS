const BaseService = require("./base.service");
const { Calle } = require("../domain/models");

class CalleService extends BaseService {
    constructor({ CalleRepository }){
        super(CalleRepository,Calle);
    }
}

module.exports = CalleService;