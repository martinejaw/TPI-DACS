const BaseService = require("./base.service");
const { Recurso } = require("../domain/models");

class RecursoService extends BaseService {
    constructor({ RecursoRepository }){
        super(RecursoRepository,Recurso);
    }
}

module.exports = RecursoService;