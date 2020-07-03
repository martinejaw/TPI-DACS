const path = require('path')
class AdministradorController {
    constructor({AdministradorService}){
        this._administradorService = AdministradorService;
    }

    async getAdministrador(req,res){
        await this._administradorService.getAll()
            .then(administradores => res.render(path.join(__dirname+'/../views/index'), {calles: JSON.stringify(administradores)}))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createAdministrador(req, res) {
        await this._administradorService.create(req.body)
            .then(administradorCreated => res.status(201).json(administradorCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }
}

module.exports = AdministradorController;