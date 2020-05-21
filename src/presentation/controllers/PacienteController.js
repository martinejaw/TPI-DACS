class PacienteController {
    constructor({PacienteService}){
        this._pacienteService = PacienteService;
    }

    async getPacientes(req,res){
        let pacientes = await this._pacienteService.getAll();
        res.json(pacientes);
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
        const body = req.body;
        console.log(body);
        const createdPaciente = await this._pacienteService.create(body);
        return res.status(201).json(createdPaciente);
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