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
                res.status(400).json({msg: error.message});  
            });
    }

    async getConsultaSinResponder(req,res){
        const { medicodni } = req.params;
        await this._consultaService.getSinResponder(medicodni)
            .then(consultas => res.status(200).json(consultas))
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });
    }

    async getConsultaRespondidas(req,res) {
    const { medicodni } = req.params;
        await this._consultaService.getRespondidas(medicodni)
            .then(consultas => res.status(200).json(consultas))
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });
    }

    async createConsulta(req, res) {
        await this._consultaService.create(req.body)
            .then(consultaCreated => res.status(201).json(consultaCreated))
            .catch(error => {
                res.status(400).json({msg: error.message});  
        });
    }

    async recibirConsultaId(req, res) {
        let consultasNuevas ;
        await this._consultaService.recibirConsultasId()
          .then(consultas => consultasNuevas = consultas)
          .catch(error => {
              res.json({msg: error.message})});
        for (const consulta of consultasNuevas){
            await this._asignacionService.asignarConsulta(consulta)
              .then(consultaAsignada => {
                this._consultaService.create(consultaAsignada);
                this._consultaService.setRecibido(consulta);
                })
              .catch(error => {
                  res.status(400).json({msg: error.message});  
            });  
        }
        res.sendStatus(200);
        //implementar lo de post de confirmacion
    }

    async diagnosticar(req, res) {
        //await this._diagnosticoService.diagnosticar(req.body, res);
        let consultaDiagnosticada = req.body;

        if(consultaDiagnosticada.diagnostico == null){
            res.status(400).json({msg: "Diagnostico nulo no permitido"});
        } else {
            // Guardo la consulta diagnosticada en mi API
            await this._consultaService.update(consultaDiagnosticada.id, consultaDiagnosticada)
            .then(consultaDiagnosticada => {
              this._consultaService.postDiagnostico(consultaDiagnosticada);
              res.status(201).json({msg: "Diagnostico Concretado"})
              })
            .catch(error => {  
                res.status(400).json({msg: error.message});
            });
        }  
    }

    async obtenerConsulta(req, res){
        const { id } = req.params;
        let consultasNuevas;
        await this._consultaService.recibirConsultasCompleta(1)
          .then(consultas => consultasNuevas = consultas)
          .catch(error => {
              res.json({msg: error.message})
          });
        await this._consultaService.consultaByID(id,consultasNuevas)
            .then(consultas => res.json(consultas))
            .catch(error => res.json({msg: error.message}));  
    }

    async obtenerConsultaDni(req, res){
        const { dni } = req.params;
        await this._consultaService.consultaByDni(dni)
            .then(consultas => res.json(consultas))
            .catch(error => res.json({msg: error.message}));    
  }


}

module.exports = ConsultaController;
