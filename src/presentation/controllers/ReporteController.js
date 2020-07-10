const request = require('request-promise')

class ReporteController {
    constructor({ ReporteService, PruebaService }) {
        this._reporteService = ReporteService;
        this._pruebaService = PruebaService
    }

    async reporteDiario(req, res) {
        await this._reporteService.reporteDiario(req.params.CUIT)
            .then(reporte => res.status(200).json(reporte))
            .catch(error => {
                res.status(400)
            });
    }

    async reporteTotal(req, res) {
        await this._reporteService.reporteTotal(req.params.CUIT)
            .then(reporte => res.status(200).json(reporte))
            .catch(error => {
                res.status(400)
            });
    }
}

module.exports = ReporteController;