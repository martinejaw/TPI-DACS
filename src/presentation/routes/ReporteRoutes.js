const { Router } = require("express");


module.exports = ( { ReporteController } ) => {
    const router = Router();

    router.get("/:CUIT", ReporteController.reporteDiario.bind(ReporteController));

    return router;
}