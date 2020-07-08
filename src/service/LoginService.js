const BaseService = require("./base.service");
const bcrypt = require("bcryptjs");
const moment = require('moment')
const cfg = require('../config/environments/cfg')
const jwt = require('jwt-simple')

class LoginService extends BaseService{
    constructor({ UnitOfWork, MedicoService }){
        super(UnitOfWork.CuentaRepository,"Cuenta");
        this._medicoService = MedicoService;
        this._adminRepository = UnitOfWork.AdministradorRepository;
        this._token = null;
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
                
                const payload = {
                    rol: cuentaValida.rol, 
                    dni: dni, 
                    cuit: HospitalCuit, 
                    nombre: nombre,
                    hospital: nombreHospital,
                    iat: moment().unix(),
                    exp: moment().add(3, 'hours').unix()
                }

                const token = jwt.encode(payload, cfg.SECRET);
                this._token = token;
                console.log(token);

                // ######### Si tuvieramos que hacer a mano con algun codificador ##########
                /* const header = {
                    alg: "HS256",
                    typ: "JWT"
                } */
                // const unsignedToken = jwt.encode(header, cfg.SECRET) + '.' + jwt.encode(payload, cfg.SECRET);
                // const signature = jwt.encode(unsignedToken, cfg.SECRET, 'RS256') ;
                // const token = unsignedToken + '.' + signature ;

                return token;
                
            } else {
                return false;
            }
        }
    }


    async decodeToken(authHeader) {
        const decodedPayload = new Promise((resolve, reject) => {
            try {
                /* SI TUVIERAMOS QUE HACER A MANO
                if (!authHeader) {
                    reject({
                        status: 401,
                        message: 'Token vacio'
                    });
                }

                const token = authHeader.split(' ')[1];
                const token = token.split('.');

                const header = jwt.decode(token[0], cfg.SECRET);
                const payload = jwt.decode(token[1], cfg.SECRET);

                const unsignedToken = jwt.decode(token[2], cfg.SECRET, 'RS256');  // Es decir la firma / signature decodificada
                unsignedToken = unsignedToken.split('.');

                const headerFirma = unsignedToken[0];
                const payloadFirma = unsignedToken[1];

                if (header != headerFirma || payload != payloadFirma) {
                    reject({
                        status: 403,
                        message: 'Token sin integridad'
                    });
                }   */

                let token = header.split(' ')[1];

                payload = jwt.decode(token, cfg.SECRET);


                if (payload.exp > moment.unix()) {
                    reject({
                        status: 403,
                        message: 'El token ha expirado'
                    });
                }

                // Comprobar que el id de la sesion exista en el almacenamiento de sesiones

                resolve(token);

            } catch(err) {
                reject({
                    status: 403,
                    message: err.message
                });
            }
        })

        return decodedPayload;
    }

}

module.exports = LoginService;
