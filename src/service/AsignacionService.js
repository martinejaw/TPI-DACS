const mapper = require("automapper-js");

class AsignacionService{
    constructor({PacienteService, MedicoService, ConsultaService}){
        this._pacienteService = PacienteService;
        this._medicoService = MedicoService;
        this._consultaService = ConsultaService;
    }

    async asignarConsulta(consultaGenerica){

        const paciente = this._pacienteService.mapear(consultaGenerica.paciente);

        const medicoParaAsignar = this._medicoService.getMedicoLibre();

        const consulta = this._consultaService.mapear(consultaGenerica);
        consulta.setPaciente(paciente.dni);
        consulta.asignarMedico(medicoParaAsignar.dni);

        

        const consulte = consulta.toObject();

        //consulta.asignarMedico(medicoParaAsignar); // Mirar esto
        const pobj = pacienteMap.toObject();

//
        

        this._consultaService.create(consulte)
            .then(result => console.log(result))
            .catch(error => console.log(error.message));

    }

}

module.exports = AsignacionService;