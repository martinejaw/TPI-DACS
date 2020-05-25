const mapper = require("automapper-js");

class AsignacionService{
    constructor({PacienteService, MedicoService, ConsultaService}){
        this._pacienteService = PacienteService;
        this._medicoService = MedicoService;
        this._consultaService = ConsultaService;
    }

    async asignarConsulta(consultaGenerica, res){

        const paciente = this._pacienteService.mapear(consultaGenerica.paciente);

        const medicoParaAsignarDni = await this._medicoService.getMedicoLibre();

        const consulta = this._consultaService.mapear(consultaGenerica);
        consulta.setPaciente(paciente.dni);
        consulta.asignarMedico(medicoParaAsignarDni);

        const consultaGenericaAsignada = consulta.toObject(); // Mirar esto

        //consulta.asignarMedico(medicoParaAsignar); // Mirar esto
        
        this._consultaService.create(consultaGenericaAsignada)
            .then(consultaCreated => res.status(201).json(consultaCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }

}

module.exports = AsignacionService;