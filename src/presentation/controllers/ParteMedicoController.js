class ParteMedicoController {
    constructor({ParteMedicoService}){
        this._partemedicoService = ParteMedicoService;
    }

    async getPartesMedicos(req,res){
        let partesmedicos = await this._partemedicoService.getAll();
        res.json(partesmedicos);
    }

    async createParteMedico(req, res) {
        const body = req.body;

        const createdParteMedico = await this._partemedicoService.create(body);
        return res.status(201).json(createdParteMedico);
    }
}

module.exports = ParteMedicoController;
