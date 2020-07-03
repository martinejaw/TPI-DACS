const path = require('path')
class AdministradorController {
    constructor({AdministradorService}){
        this._administradorService = AdministradorService;
    }

    async getAdministrador(req,res){
        await this._administradorService.getAll()
            .then(administradores => res.status(200).json(administradores))
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });
    }

    async createAdministrador(req, res) {
        await this._administradorService.create(req.body)
            .then(administradorCreated => res.status(201).json(administradorCreated))
            .catch(error => {
                res.status(400).json({msg: error.message});  
        });
    }
}

module.exports = AdministradorController;