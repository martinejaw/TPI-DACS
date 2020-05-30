const mapper = require("automapper-js");

class AsignacionService{
    constructor({PacienteService, MedicoService, ConsultaService}){
        this._pacienteService = PacienteService;
        this._medicoService = MedicoService;
        this._consultaService = ConsultaService;
    }

    async asignarConsulta(consultaGenerica){

        const paciente = this._pacienteService.mapear(consultaGenerica.paciente);

        const medicoParaAsignarDni = await this._medicoService.getMedicoLibre();

        const consulta = this._consultaService.mapear(consultaGenerica);
        consulta.setPaciente(paciente.dni);
        consulta.asignarMedico(medicoParaAsignarDni);

        const consultaGenericaAsignada = consulta.toObject(); // Mirar esto

        return consultaGenericaAsignada;
        //consulta.asignarMedico(medicoParaAsignar); // Mirar esto
    }

}

module.exports = AsignacionService;