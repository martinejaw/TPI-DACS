const BaseService = require("./base.service");
const bcrypt = require("bcryptjs");

class LoginService extends BaseService{
    constructor({ UnitOfWork, MedicoService }){
        super(UnitOfWork.CuentaRepository,"Cuenta");
        this._medicoService = MedicoService;
        this._adminRepository = UnitOfWork.AdministradorRepository;
    }

    async validarRegistro(cuenta){
        const cuentaValida = await this._entityRepository.get(cuenta.usuario);
        if (cuentaValida === null){
            return false;
        }
        else{
            const v = bcrypt.compareSync(cuenta.password, cuentaValida.password);
            if (v == true) {
                let dni;
                let HospitalCuit;
                let nombre;
                let nombreHospital;

                if (cuentaValida.rol === 'medico'){
                    const consulta = await this._medicoService.obtenerHospital(cuentaValida.MedicoDni);
                    dni = cuentaValida.MedicoDni;
                    HospitalCuit = consulta.HospitaleCUIT;
                    nombre = consulta.nombre;
                    nombreHospital = consulta.Hospitale.nombre;
                } else {
                    const consulta = await this._adminRepository.obtenerHospital(cuentaValida.AdministradoreDni);
                    dni = cuentaValida.AdministradoreDni;
                    HospitalCuit = consulta.HospitaleCUIT;
                    nombre = consulta.nombre;
                    nombreHospital = consulta.Hospitale.nombre;
                }
                
                return {
                    usuario: cuentaValida.usuario, 
                    password: cuentaValida.password, 
                    rol: cuentaValida.rol, 
                    dni: dni, 
                    cuit: HospitalCuit, 
                    nombre: nombre,
                    hospital: nombreHospital
                };
                
            } else {
                return false;
            }
        }
    }
}

module.exports = LoginService;
