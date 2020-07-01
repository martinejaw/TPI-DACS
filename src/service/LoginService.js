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
            const v = bcrypt.compareSync(cuenta.password, cuentaValida.password);
            if (v == true) {
                return {usuario: cuentaValida.usuario, password: cuentaValida.password};
            } else {
                return false;
            }
        }
    }
}

module.exports = LoginService;
