class PacienteController {
    constructor({PacienteService}){
        this._pacienteService = PacienteService;
    }

    async getPacientes(req, res){
        await this._pacienteService.getAll()
            .then(pacientes => res.status(200).json(pacientes))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createPaciente(req, res) {
        await this._pacienteService.create(body)
            .then(pacienteCreated => res.status(201).json(pacienteCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }
}

module.exports = PacienteController;