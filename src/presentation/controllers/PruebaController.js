class PruebaController {
    constructor({PruebaService}){
        this._pruebaService = PruebaService;
    }

    async getPruebas(req,res){
        await this._pruebaService.getAll()
            .then(pruebas => res.status(200).json(pruebas))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createPrueba(req, res) {
        await this._pruebaService.create(req.body)
            .then(pruebaCreated => res.status(201).json(pruebaCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }

    async updatePrueba(req,res) {
        const { body } = req;
        const { idCaso } = req.params;
        const { idPrueba } = req.params;
        await this._pruebaService.updatePrueba(idPrueba,idCaso, body)
            .then(pruebaUpdated => {
                if(pruebaUpdated[0]==0){
                    res.status(404).json({msg: "No existe prueba con tal id"})
                }else{
                    res.json({msg: "Actualizado correctamente la prueba con id "+idPrueba+" del caso "+idCaso})
                }})
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    }
}

module.exports = PruebaController;