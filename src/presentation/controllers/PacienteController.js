
    function getPureError(error) {
        return JSON.parse(JSON.stringify(error, replaceErrors));
    }
    
class PacienteController {
    constructor({PacienteService}){
        this._pacienteService = PacienteService;
    }


    async getPacientes(err, req,res, next){
        try{
            let pacientes = await this._pacienteService.getAll();
            res.json(pacientes);
        }
        catch(err){
            next(err);
            res.sendStatus(404);
        }
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
        const createdPaciente = await this._pacienteService.create(body).catch(error => {
            res.status(412).json({msg: error.message});  
        });;
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