class PacienteController {
    constructor({PacienteService}){
        this._pacienteService = PacienteService;
    }

    async getPacientes(req,res){
        let pacientes = await this._pacienteService.getAll();
        res.json(pacientes);
    }

    async createPaciente(req, res) {
        const body = req.body;
        console.log(body);
        const createdPaciente = await this._pacienteService.create(body);
        return res.status(201).json(createdPaciente);
    }
}

module.exports = PacienteController;