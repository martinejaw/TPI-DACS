class CiudadController {
    constructor({CiudadService}){
        this._ciudadService = CiudadService;
    }

    async getCiudad(req,res){
        await this._ciudadService.getAll()
            .then(ciudad => res.status(200).json(ciudad))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createCiudad(req, res) {
        await this._ciudadService.create(req.body)
            .then(ciudadCreated => res.status(201).json(ciudadCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }
}

module.exports = CiudadController;