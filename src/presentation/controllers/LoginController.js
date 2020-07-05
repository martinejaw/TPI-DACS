const path = require('path')
const jwt = require('jwt-simple')

class LoginController {
    constructor({LoginService}){
        this._loginService = LoginService;
    }

    async login(req,res){
        await this._loginService.validarRegistro(req.body)
            .then(usuarioValidado => {  
                if(usuarioValidado!=false){
                    const token = jwt.encode(usuarioValidado, 'pass');
                    res.status(200).json({token: token})
                } else {
                    res.status(401).json({msg: "Acceso denegado"})
                }})
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });
    }

    async register(req,res){
        await this._loginService.create(req.body)
            .then(cuentaCreated => res.status(201).json(cuentaCreated))
            .catch(error => {
                res.status(400).json({msg: error.message});  
        });
    }

}

module.exports = LoginController;