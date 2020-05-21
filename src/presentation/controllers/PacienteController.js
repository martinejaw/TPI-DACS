
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

    async createPaciente(req, res) {

        const body = req.body;
        const createdPaciente = await this._pacienteService.create(body).catch(error => {
            res.status(412).json({msg: error.message});  
        });;
        return res.status(201).json(createdPaciente);

    }
}

module.exports = PacienteController;