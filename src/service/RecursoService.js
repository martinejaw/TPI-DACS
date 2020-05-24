const BaseService = require("./base.service");
const { Recurso } = require("../domain/models");

class RecursoService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.RecursoRepository,Recurso);
    }
}

module.exports = RecursoService;