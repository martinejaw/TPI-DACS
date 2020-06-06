const path = require('path')

class LoginController {
    constructor({LoginService}){
        this._loginService = LoginService;
    }

    async loginFront(req,res){
        await this._loginService.validarRegistro(req.body)
            .then(usuarioValidado => res.render(path.join(__dirname+'/../views/login')))//status(200).json(calles))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }
    async login(req,res){
        await this._loginService.validarRegistro(req.body)
            .then(usuarioValidado => 
                res.status(200).json(usuarioValidado))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

}

module.exports = LoginController;