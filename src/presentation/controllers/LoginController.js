class LoginController {
    constructor({ LoginService }) {
        this._loginService = LoginService;
    }

    async login(req, res) {
        await this._loginService.validarRegistro(req.body)
            .then(token, info =>
                res.status(200).json({ token: token, info: info }))
            .catch(error => {
                res.status(400).json({ msg: error.message });
            });
    }

    async logout(req, res) {
        await this._loginService.logout(req.payload)
            .then(result =>
                res.status(200).json({ message: 'Deslogueado' }))
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