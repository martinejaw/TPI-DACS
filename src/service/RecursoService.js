const BaseService = require("./base.service");
const { Recurso } = require("../domain/models");
const axios = require("axios");

class RecursoService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.RecursoRepository,Recurso);
    }

    async updateRecurso(CUIT, id, entity) {
        const updatedEntity = await this._entityRepository.update(id, CUIT, entity);
        return updatedEntity;
    }

    async obtenerTodosRecursosHospital(CUIT) {
        const updatedEntity = await this._entityRepository.obtenerTodosRecursosHospital(CUIT);
        return updatedEntity;
    }
    async pedirRecursos(recu){
        let recursos = { "Peticion": recu };
        await axios({
            method: 'post',
            timeout: 5000,
            url: 'https://6iubewzdng.execute-api.sa-east-1.amazonaws.com/dev/peticiones',
            headers: {'x-api-key': 'FTlS2bc9lo1OtmzHCBrju4ZL8PqFM5yr4JB775RR'},
            data: recursos
        })
        .catch(error => {
            res.json({msg: error.message})});
    }

}

module.exports = RecursoService;