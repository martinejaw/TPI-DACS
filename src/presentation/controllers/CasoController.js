class CasoController {
    constructor({CasoService}){
        this._casoService = CasoService;
    }

    async getCasos(req,res){
        let casos = await this._casoService.getAll();
        res.json(casos);
    }

    async createCaso(req, res) {
        const body = req.body;
        const createdCaso = await this._casoService.create(body);
        return res.status(201).json(createdCaso);
    }
}

module.exports = CasoController;