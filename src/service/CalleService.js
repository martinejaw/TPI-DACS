const BaseService = require("./base.service");
const { Caso } = require("../domain/models");

class CalleService extends BaseService {
    constructor({ CalleRepository }){
        super(CalleRepository,Calle);
    }
}

module.exports = CalleService;