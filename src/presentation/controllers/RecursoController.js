class RecursoController {
    constructor({RecursoService}){
        this._recursoService = RecursoService;
    }

    async getRecursos(req,res){
        let recursos = await this._recursoService.getAll();
        res.json(recursos);
    }

    async createRecurso(req, res) {
        const body = req.body;
        console.log(body);
        const createdRecurso = await this._recursoService.create(body);
        return res.status(201).json(createdRecurso);
    }
}

module.exports = RecursoController;