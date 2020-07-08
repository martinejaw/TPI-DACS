const mapper = require("automapper-js");

class AsignacionService{
    constructor({MedicoService, ConsultaService}){
        this._medicoService = MedicoService;
        this._consultaService = ConsultaService;
    }

    async asignarConsulta(consultaID){

        let consultaNueva = {
          id : undefined,
          MedicoDni: undefined,
          dni: undefined ,
        };
        const medicoParaAsignarDni = await this._medicoService.getMedicoLibre();
        consultaNueva.id = Number(consultaID);
        consultaNueva.MedicoDni = medicoParaAsignarDni;
        consultaNueva.dni = 40000000; //Arreglar despues
        // const consultaNuevaAsignada = consulta.toObject(); // Mirar esto
        return consultaNueva;
        //consulta.asignarMedico(medicoParaAsignar); // Mirar esto
    }

}

module.exports = AsignacionService;