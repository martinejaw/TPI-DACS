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
     *              description: Se obtuvo correctamente el reporte del hospital
     *          '400':
     *              description: Error
     */
    router.get("/:CUIT", ReporteController.reporteDiario.bind(ReporteController));

    /**
     * @swagger
     * /reporte:
     *  get:
     *      description: MINISTERIO - Usar para obtener el reporte de todos los hospitales
     *      tags: ["MINISTERIO"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvo correctamente el reporte
     *          '400':
     *              description: Error
     */
    router.get("/", ReporteController.reporteTotal.bind(ReporteController));

    return router;
}