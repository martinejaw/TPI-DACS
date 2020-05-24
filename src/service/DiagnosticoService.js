const mapper = require("automapper-js");

class DiagnosticoService{
    constructor({PacienteService, MedicoService, ConsultaService}){
        this._pacienteService = PacienteService;
        this._medicoService = MedicoService;
        this._consultaService = ConsultaService;
    }

    async diagnosticar(consultaDiagnosticada, res){

        this._consultaService.update(consultaDiagnosticada.id, consultaDiagnosticada)
            .then(consultaDiagnosticada => res.status(201).json({msg: "Diagnosticacion Correcta"}))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }

}

module.exports = DiagnosticoService;