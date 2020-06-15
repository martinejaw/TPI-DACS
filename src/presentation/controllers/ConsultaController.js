const request = require('request-promise')

class ConsultaController {
    constructor({ConsultaService, AsignacionService, DiagnosticoService}){
        this._consultaService = ConsultaService;
        this._asignacionService = AsignacionService;
        this._diagnosticoService = DiagnosticoService;
    }

    async getConsultas(req,res){
        await this._consultaService.getAll()
            .then(consultas => res.status(200).json(consultas))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async getConsultaSinResponder(req,res){
        const { medicodni } = req.params;
        await this._consultaService.getSinResponder(medicodni)
            .then(consultas => res.status(200).json(consultas))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async getConsultaRespondidas(req,res) {
    const { medicodni } = req.params;
        await this._consultaService.getRespondidas(medicodni)
            .then(consultas => res.status(200).json(consultas))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createConsulta(req, res) {
        await this._consultaService.create(req.body)
            .then(consultaCreated => res.status(201).json(consultaCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }

    async recibirConsulta(req, res) {
        let consultaAsignada = await this._asignacionService.asignarConsulta(req.body.Consulta);
        this._consultaService.create(consultaAsignada)
            .then(consultaCreated => res.status(201).json(consultaCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }

    async diagnosticar(req, res) {
        //await this._diagnosticoService.diagnosticar(req.body, res);
        let consultaDiagnosticada = req.body;

        if(consultaDiagnosticada.diagnostico == null){
            res.status(404).json({msg: "Diagnostico nulo no permitido"});
        } else {
            // Guardo la consulta diagnosticada en mi API
            this._consultaService.update(consultaDiagnosticada.id, consultaDiagnosticada)
            .then(consultaDiagnosticada => res.status(201).json({msg: "Diagnosticacion Correcta"}))
            .catch(error => {  
                res.status(412).json({msg: error.message});  
            });
        }  
    }

    async obtenerConsultas(req, res){
        //AQUI SE HACE UN GET AL GRUPO DE PACIENTES
        let consultasNuevas = req.body;
        for (const consulta in consultasNuevas){
            console.log(consulta);
        }
        
        res.sendStatus(202);
    }


}

module.exports = ConsultaController;
