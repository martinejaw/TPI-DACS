class MedicoController {
    constructor({MedicoService}){
        this._medicoService = MedicoService;
    }

    async getMedicos(req,res){
        let medicos = await this._medicoService.getAll();
        res.json(medicos);
    }

    async createMedico(req, res) {
        const body = req.body;
        console.log(body);
        const createdMedico = await this._medicoService.create(body);
        return res.status(201).json(createdMedico);
    }
}

module.exports = MedicoController;
