const BaseService = require("./base.service");
const bcrypt = require("bcryptjs");

class LoginService extends BaseService{
    constructor({ UnitOfWork }){
        super(UnitOfWork.CuentaRepository,"Cuenta");
    }

    async validarRegistro(cuenta){
        const cuentaValida = await this._entityRepository.get(cuenta.usuario);
        if (cuentaValida === null /*|| cuentaValida.password != cuenta.password*/){
            return false;
        }
        else{
            bcrypt.compareSync(cuenta.password, cuentaValida.password, (err, result) => {
                if (result == true) {
                    return cuentaValida;
                } else {
                    return false;
                }
            });
        }
    }
}

module.exports = LoginService;
