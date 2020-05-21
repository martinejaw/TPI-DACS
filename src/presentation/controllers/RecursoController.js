class RecursoController {
    constructor({RecursoService}){
        this._recursoService = RecursoService;
    }

    async getRecursos(req,res){
        await this._recursoService.getAll()
            .then(recursos => res.status(200).json(recursos))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createRecurso(req, res) {
        await this._recursoService.create(req.body)
            .then(recursoCreated => res.status(201).json(recursoCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }
}

module.exports = RecursoController;