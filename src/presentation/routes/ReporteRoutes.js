const { Router } = require("express");


module.exports = ( { ReporteController } ) => {
    const router = Router();

    /**
     * @swagger
     * /reporte/{CUIT}:
     *  get:
     *      description: MINISTERIO - Usar para obtener el reporte de un hospital
     *      tags: ["MINISTERIO"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvo correctamente el reporte
     *          '412':
     *              description: Error
     */
    router.get("/:CUIT", ReporteController.reporteDiario.bind(ReporteController));

    return router;
}