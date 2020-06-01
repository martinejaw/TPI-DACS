const BaseService = require("./base.service");

class LoginService extends BaseService{
    constructor({ UnitOfWork }){
        super(UnitOfWork.CuentaRepository,"Cuenta");
    }

    async validarRegistro(cuenta){
        const cuentaValida = await this._entityRepository.get(cuenta.usuario);
        if (cuentaValida === null || cuentaValida.password != cuenta.password){
            return false;
        }
        return cuentaValida;
    }
}

module.exports = LoginService;