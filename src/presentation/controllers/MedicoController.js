class MedicoController {
    constructor({MedicoService}){
        this._medicoService = MedicoService;
    }

    async getMedicos(req,res){
        await this._medicoService.getAll()
            .then(medicos => res.status(200).json(medicos))
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });
    }

    async createMedico(req, res) {
        await this._medicoService.create(req.body)
            .then(medicoCreated => res.status(201).json(medicoCreated))
            .catch(error => {
                res.status(400).json({msg: error.message});  
        });
    }
    
    async getMedicosHospital(req, res) {
        const { CUIT } = req.params;
        await this._medicoService.obtenerMedicosHospital(CUIT)
            .then(medico => res.status(200).json(medico))
            .catch(error => {
                res.status(400).json({msg: error.message});  
        });
    }
}

module.exports = MedicoController;
