class LoginController {
    constructor({ LoginService }) {
        this._loginService = LoginService;
    }

    async login(req, res) {
        await this._loginService.validarRegistro(req.body)
            .then(result =>
                res.status(200).json({ token: result.token, info: result.datosPublicos }))
            .catch(error => {
                res.status(400).json({ msg: error.message });
            });
    }

    async register(req, res) {
        await this._loginService.create(req.body)
            .then(cuentaCreated => res.status(201).json(cuentaCreated))
            .catch(error => {
                res.status(400).json({ msg: 'Datos invalidos' });
            });
    }

}

module.exports = LoginController;