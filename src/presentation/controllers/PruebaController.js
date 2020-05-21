class PruebaController {
    constructor({PruebaService}){
        this._pruebaService = PruebaService;
    }

    async getPruebas(req,res){
        let pruebas = await this._pruebaService.getAll();
        res.json(pruebas);
    }

    async createPrueba(req, res) {
        const body = req.body;
        const createdPrueba = await this._pruebaService.create(body);
        return res.status(201).json(createdPrueba);
    }
}

module.exports = PruebaController;