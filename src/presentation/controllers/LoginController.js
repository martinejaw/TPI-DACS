class LoginController {
    constructor({LoginService}){
        this._loginService = LoginService;
    }

    async login(req,res){
        await this._loginService.validarRegistro(req.body)
            .then(calles => res.status(200).json(calles))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }
}

module.exports = LoginController;