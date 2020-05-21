class ParteMedicoController {
    constructor({ParteMedicoService}){
        this._partemedicoService = ParteMedicoService;
    }

    async getPartesMedicos(req,res){
        await this._partemedicoService.getAll()
            .then(partesMedicos => res.status(200).json(partesMedicos))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createParteMedico(req, res) {
        await this._partemedicoService.create(req.body)
            .then(parteMedicoCreated => res.status(201).json(parteMedicoCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }
}

module.exports = ParteMedicoController;
