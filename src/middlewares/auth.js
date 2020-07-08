const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')
let servicio;

class AuthMiddle {
    constructor({ LoginService }){
        this._loginService = LoginService;
        servicio = LoginService;
    }

    isAuth (req, res, next) {
        if (req.path === '/login') {    // En login no requiero autenticacion
            next();
        } else {
            if (!req.headers.authorization) {
                return res.status(403).send({ message: 'Autenticación requerida' })
            }
            servicio.decodeToken(req.headers.authorization)
                .then(payload => {
                    req.payload = payload;
                    next();
                })
                .catch(err =>
                    res.status(err.status).json({ message: err.message }));
        }
    }
}

module.exports = AuthMiddle;