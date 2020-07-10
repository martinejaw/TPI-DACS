const BaseService = require("./base.service");
const { Calle } = require("../domain/models");

class CalleService extends BaseService {
    constructor({ UnitOfWork }) {
        super(UnitOfWork.CalleRepository, Calle);
    }
}

module.exports = CalleService;