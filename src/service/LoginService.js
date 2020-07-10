const BaseService = require("./base.service");
const bcrypt = require("bcryptjs");
const moment = require('moment')
const cfg = require('../config/environments/cfg')
const jwt = require('jwt-simple')

class LoginService extends BaseService{
    constructor({ UnitOfWork, MedicoService, SesionService, AdministradorService }){
        super(UnitOfWork.CuentaRepository,"Cuenta");
        this._medicoService = MedicoService;
        this._adminService = AdministradorService;
        this._sesionService = SesionService;
        this._token = null;
    }

    async validarRegistro(cuenta){
        const token = await new Promise(async (resolve, reject) => {
            const cuentaValida = await this._entityRepository.get(cuenta.usuario);
            if (cuentaValida === null){
                reject();
            }
            else{
                const v = bcrypt.compareSync(cuenta.password, cuentaValida.password);
                if (v == true) {
                    let dni;
                    let HospitalCuit;
                    let nombre;
                    let nombreHospital;

                    if (cuentaValida.rol === 'medico'){
                        const consulta = await this._medicoService.obtenerHospital(cuentaValida.MedicoDni).catch(e => reject(e));
                        dni = cuentaValida.MedicoDni;
                        HospitalCuit = consulta.HospitaleCUIT;
                        nombre = consulta.nombre;
                        nombreHospital = consulta.Hospitale.nombre;
                    } else {
                        const consulta = await this._adminService.obtenerHospital(cuentaValida.AdministradoreDni).catch(e => reject(e));
                        dni = cuentaValida.AdministradoreDni;
                        HospitalCuit = consulta.HospitaleCUIT;
                        nombre = consulta.nombre;
                        nombreHospital = consulta.Hospitale.nombre;
                    }

                    const iat = moment().unix();
                    const exp = moment().add(3, 'hours').unix();

                    const sesion = await this._sesionService.create({
                        usuario: cuentaValida.usuario,
                        exp: exp,
                    }).catch(e => reject(e));
                    
                    const payload = {
                        idSesion: sesion.uuid,
                        rol: cuentaValida.rol, 
                        dni: dni, 
                        cuit: HospitalCuit, 
                        nombre: nombre,
                        hospital: nombreHospital,
                        iat: iat,
                        exp: exp,
                    }

                    const token = jwt.encode(payload, cfg.SECRET);
                    this._token = token;

                    // ######### Si tuvieramos que hacer a mano con algun codificador ##########
                    /* const header = {
                        alg: "HS256",
                        typ: "JWT"
                    } */
                    // const unsignedToken = jwt.encode(header, cfg.SECRET) + '.' + jwt.encode(payload, cfg.SECRET);
                    // const signature = jwt.encode(unsignedToken, cfg.SECRET, 'RS256') ;
                    // const token = unsignedToken + '.' + signature ;

                    resolve(token);
                    
                } else {
                    reject();
                }
            }
        });
        return token;
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

                const token = authHeader.split(' ')[1];

                if (!token) {
                    reject({
                        status: 401,
                        message: 'Token vacio'
                    });
                }

                const payload = jwt.decode(token, cfg.SECRET);

                if (payload.exp > moment.unix()) {
                    this._sesionService.borrar(payload.idSesion);
                    reject({
                        status: 403,
                        message: 'El token ha expirado'
                    });
                }

                // Comprobar que el id de la sesion exista en el almacenamiento de sesiones

                resolve(payload);

            } catch(err) {
                reject({
                    status: 403,
                    message: 'Token no valido'
                });
            }
        })

        return decodedPayload;
    }

    async logout(payload) {
        return this._sesionService.borrar(payload.idSesion);
    }

}

module.exports = LoginService;
