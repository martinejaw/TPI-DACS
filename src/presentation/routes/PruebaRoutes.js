const { Router } = require("express");


module.exports = ( { PruebaController } ) => {
    const router = Router();
    
    /**
     * @swagger
     * /prueba:
     *  get:
     *      description: Usar para obtener todas las pruebas realizadas
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente las pruebas
     *          '400':
     *              description: Error
     */
    router.get('/', PruebaController.getPruebas.bind(PruebaController));

    /**
     * @swagger
     * /prueba/{casoId}:
     *  get:
     *      description: Usar para obtener todas las pruebas de un caso
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente las pruebas del caso
     *          '400':
     *              description: Error
     */
    router.get('/:casoId', PruebaController.getPruebasDeCaso.bind(PruebaController));

    /**
     * @swagger
     * /prueba:
     *  post:
     *      description: Usar para crear una prueba de un caso
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '201':
     *              description: Se creo correctamente la prueba
     *          '400':
     *              description: Error
     */
    router.post("/", PruebaController.createPrueba.bind(PruebaController));

    /**
     * @swagger
     * /prueba/{idCaso}/{idPrueba}:
     *  put:
     *      description: Usar para modificar los resultados de una prueba de un caso
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se modifico correctamente la prueba del caso
     *          '400':
     *              description: Error
     */
    router.put('/:idCaso/:idPrueba', PruebaController.updatePrueba.bind(PruebaController));

    return router;
}
