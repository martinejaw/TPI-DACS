const request = require('request-promise')

class ReporteController {
    constructor({ReporteService, PruebaService}){
        this._reporteService = ReporteService;
        this._pruebaService = PruebaService
    }

    async obtenerReporte(req, res){


        this._pruebaService.contarPruebas()
            .then(respuesta => res.status(201).json(respuesta))
            .catch(error => {
                res.status(404)
            });
    }

}

module.exports = ReporteController;