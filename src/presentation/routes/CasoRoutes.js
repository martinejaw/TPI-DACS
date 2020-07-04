const { Router } = require("express");


module.exports = ( { CasoController } ) => {
    const router = Router();
    
    /**
     * @swagger
     * /caso:
     *  get:
     *      description: Usar para obtener todos los casos
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todos los casos
     *          '400':
     *              description: Error
     */
    router.get('/', CasoController.getCasos.bind(CasoController));

    /**
     * @swagger
     * /caso:
     *  post:
     *      description: Usar para crear un caso
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '201':
     *              description: Se creo correctamente el caso
     *          '400':
     *              description: Error
     */
    router.post("/", CasoController.createCaso.bind(CasoController));
    
    /**
     * @swagger
     * /caso/{idCaso}:
     *  put:
     *      description: Usar para actualizar un caso
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se actualizo correctamente el caso
     *          '400':
     *              description: Error
     */
    router.put("/:idCaso", CasoController.updateCaso.bind(CasoController));

    return router;
}
