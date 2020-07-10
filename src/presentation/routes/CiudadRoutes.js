const { Router } = require("express");


module.exports = ({ CiudadController }) => {
    const router = Router();

    /**
     * @swagger
     * /ciudad:
     *  get:
     *      description: Usar para obtener todas las ciudades
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todas las ciudades
     *          '400':
     *              description: Error
     */
    router.get('/', CiudadController.getCiudad.bind(CiudadController));

    /**
     * @swagger
     * /ciudad:
     *  post:
     *      description: Usar para crear una ciudad
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '201':
     *              description: Se creo correctamente la ciudad
     *          '400':
     *              description: Error
     */
    router.post("/", CiudadController.createCiudad.bind(CiudadController));

    return router;
}
