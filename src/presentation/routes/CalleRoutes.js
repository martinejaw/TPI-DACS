const { Router } = require("express");


module.exports = ( { CalleController } ) => {
    const router = Router();
    
    /**
     * @swagger
     * /calle:
     *  get:
     *      description: Usar para obtener todas las calles
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todas las calles
     *          '412':
     *              description: Error
     */
    router.get('/', CalleController.getCalles.bind(CalleController));

    /**
     * @swagger
     * /calle:
     *  post:
     *      description: Usar para crear una calle
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se creo correctamente la calle
     *          '412':
     *              description: Error
     */
    router.post("/", CalleController.createCalle.bind(CalleController));

    return router;
}
