class CasoController {
    constructor({CasoService}){
        this._casoService = CasoService;
    }

    async getCasos(req,res){
        await this._casoService.getAll()
            .then(casos => res.status(200).json(casos))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createCaso(req, res) {
        await this._casoService.create(req.body)
            .then(casoCreated => res.status(201).json(casoCreated))
            .catch(error => {
                res.json({msg: error.message});  
        });
    }
    
    async updateCaso(req, res) {
        const {idCaso} = req.params;
        await this._casoService.actualizar(req.body,idCaso)
            .then(casoUpdated => {
                if(casoUpdated[0]==0){
                    res.status(404).json({msg: "No existe caso con tal id"})
                }else{
                    res.json({msg: "Actualizado correctamente el caso con id "+idCaso})
                }})
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    }
}

module.exports = CasoController;