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
        console.log("aqui", medicoParaAsignarDni);
        consultaNueva.id = Number(consultaID);
        consultaNueva.MedicoDni = medicoParaAsignarDni;
        consultaNueva.dni = 40000000; //Arreglar despues
        // const consultaNuevaAsignada = consulta.toObject(); // Mirar esto
        console.log("vamooo que falta esto nomas",consultaNueva);
        return consultaNueva;
        //consulta.asignarMedico(medicoParaAsignar); // Mirar esto
    }

}

module.exports = AsignacionService;