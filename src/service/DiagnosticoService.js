const mapper = require("automapper-js");

class DiagnosticoService{
    constructor({MedicoService, ConsultaService}){
        this._medicoService = MedicoService;
        this._consultaService = ConsultaService;
    }

    async diagnosticar(consultaDiagnosticada, res){

        this._consultaService.update(consultaDiagnosticada.id, consultaDiagnosticada)
            .then(consultaDiagnosticada => res.status(200).json({msg: "Diagnosticacion Correcta"}))
            .catch(error => {  
                res.status(400).json({msg: error.message});  
        });
    }

}

module.exports = DiagnosticoService;