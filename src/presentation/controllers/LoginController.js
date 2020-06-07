const path = require('path')

class LoginController {
    constructor({LoginService}){
        this._loginService = LoginService;
    }

    loginFront(req,res){
        res.render(path.join(__dirname+'/../views/login'), {headerTitle: "Login"});
    }

    async login(req,res){
        await this._loginService.validarRegistro(req.body)
            .then(usuarioValidado => {  
                if(usuarioValidado!=false){
                    res.status(200).json({msg: "Usuario Validado"})
                } else {
                    res.status(404).json({msg: "No capo, no es valido"})
                }})
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }
}

module.exports = LoginController;