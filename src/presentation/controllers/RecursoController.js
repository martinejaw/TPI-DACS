const request = require('request-promise')
const axios = require("axios");
const dateFormat = require("dateformat");

class RecursoController {
    constructor({RecursoService}){
        this._recursoService = RecursoService;
    }

    async createRecurso(req, res) {
        await this._recursoService.create(req.body)
            .then(recursoCreated => res.status(201).json(recursoCreated))
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });
    }

    async obtenerTodosRecursos(req, res){
        await this._recursoService.getAll()
            .then(recursos => res.status(200).json(recursos))
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });
    }

    async updateRecurso(req, res) {
        const { body } = req;
        const { id } = req.params;
        const { CUIT } = req.params;
        await this._recursoService.updateRecurso(CUIT, id, body)
            .then(recursoUpdated => {
                if(recursoUpdated[0]==0){
                    res.status(400).json({msg: "No existe recurso con tal id"})
                }else{
                    res.status(200).json({msg: "Actualizado correctamente el recurso con id "+id+" en el Hospital con CUIT "+CUIT})
                }})
            .catch(error => {
                res.status(400).json({msg: error.message});
            });
    }

    async obtenerTodosRecursosHospital(req, res) {
        const { CUIT } = req.params;
        await this._recursoService.obtenerTodosRecursosHospital(CUIT)
            .then(recursos => res.status(200).json(recursos))
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });
    }

    async pedirRecursos(req, res){
        let fecha = dateFormat(new Date(), "yyyy-mm-dd H:MM:ss");
        const recursos = { "createAt": fecha,"Peticion": req.body};
        await axios({
            method: 'post',
            timeout: 5000,
            url: 'https://6iubewzdng.execute-api.sa-east-1.amazonaws.com/dev/peticiones',
            headers: {'x-api-key': 'FTlS2bc9lo1OtmzHCBrju4ZL8PqFM5yr4JB775RR'},
            data: recursos
        })
        .then(recursos => res.status(200).json(recursos))
        .catch(error => {
            res.json({msg: error.message})});
    }
}

module.exports = RecursoController;