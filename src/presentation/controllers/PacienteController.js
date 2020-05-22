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

    async getPaciente(req, res) {
        const { dni } = req.params;
        let paciente = await this._pacienteService.get(parseInt(dni));
        if (!paciente) {
          return res.status(404).send();
        }
        return res.json(paciente);
    }

    async createPaciente(req, res) {
        await this._pacienteService.create(req.body)
            .then(pacienteCreated => res.status(201).json(pacienteCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }

    async updatePaciente(req, res) {
        const { body } = req;
        const { dni } = req.params;
        await this._pacienteService.update(dni, body);
        return res.status(204).send();
    }

    async deletePaciente(req, res) {
        const { dni } = req.params;
        await this._pacienteService.delete(dni);
        return res.status(204).send();
    }
}

module.exports = PacienteController;