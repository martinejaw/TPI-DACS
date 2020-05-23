
class AsignacionService{
    constructor({PacienteService, MedicoService, ConsultaService}){
        this._pacienteService = PacienteService;
        this._medicoService = MedicoService;
        this._consultaService = ConsultaService;
    }

    async asignarConsulta(consultaGenerica){

        //const medicoParaAsignar = this._pacienteService.mapear(consultaGenerica.paciente);

        const consulta = this._consultaService.mapear(consultaGenerica);

        const medicoNoMapeado = await this._pacienteService._entityRepository.obtenerUno();

        const paciente = this._pacienteService.mapear(consultaGenerica.paciente);

        //consulta.asignarMedico(medicoParaAsignar); // Mirar esto

        this._consultaService.create(consulta)
            .then(result => console.log(result))
            .catch(error => console.log(error.msg));

        return uno;
    }

}

module.exports = AsignacionService;