const mapper = require("automapper-js");

class AsignacionService{
    constructor({MedicoService, ConsultaService}){
        this._medicoService = MedicoService;
        this._consultaService = ConsultaService;
    }

    async asignarConsulta(consultaGenerica){


        const medicoParaAsignarDni = await this._medicoService.getMedicoLibre();

        const consulta = this._consultaService.mapear(consultaGenerica);
        consulta.asignarMedico(medicoParaAsignarDni);

        const consultaGenericaAsignada = consulta.toObject(); // Mirar esto

        return consultaGenericaAsignada;
        //consulta.asignarMedico(medicoParaAsignar); // Mirar esto
    }

}

module.exports = AsignacionService;