class LoginController {
    constructor({LoginService}){
        this._loginService = LoginService;
    }

    async login(req,res){
        

        await this._loginService.validarRegistro(req.body)
            .then(token => {  
                if(token != false){
                    res.status(200).json({token: token})
                } else {
                    res.status(401).json({ message: "Acceso denegado" })
                }})
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });

        await this._loginService.decodeToken(1);
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