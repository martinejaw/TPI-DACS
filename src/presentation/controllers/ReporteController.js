const request = require('request-promise')

class ReporteController {
    constructor({ReporteService, PruebaService}){
        this._reporteService = ReporteService;
        this._pruebaService = PruebaService
    }

    async reporteDiario(req, res){

        await this._reporteService.reporteDiario(req.params.CUIT)
            .then(reporte => res.status(201).json(reporte))
            .catch(error => {
                res.status(404)
            });
    }

}

module.exports = ReporteController;