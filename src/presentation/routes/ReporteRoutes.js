const { Router } = require("express");


module.exports = ( { ReporteController } ) => {
    const router = Router();

    router.post("/", ReporteController.obtenerReporte.bind(ReporteController));

    return router;
}