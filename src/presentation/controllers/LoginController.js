const path = require('path')

class LoginController {
    constructor({LoginService}){
        this._loginService = LoginService;
    }

    loginView(req,res){
        res.render(path.join(__dirname+'/../views/login'));
    }

    async login(req,res){
        await this._loginService.validarRegistro(req.body)
            .then(usuarioValidado => {  
                if(usuarioValidado!=false){
                    res.status(200).json({msg: "Usuario Valido"})
                } else {
                    res.status(401).json({msg: "Acceso denegado"})
                }})
            .catch(error => {
                res.status(401).json({msg: error.message});  
            });
    }
}

module.exports = LoginController;