const { Router } = require("express");


module.exports = ({ AdministradorController }) => {
    const router = Router();

    /**
     * @swagger
     * /administrador:
     *  get:
     *      description: Usar para obtener todos los administradores de todos los hospitales
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todos los administradores de todos hospitales
     *          '400':
     *              description: Error
     */
    router.get('/', AdministradorController.getAdministrador.bind(AdministradorController));
    /**
     * @swagger
     * /administrador:
     *  post:
     *      description: Usar para crear un administrador
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '201':
     *              description: Se creo correctamente el administrador
     *          '400':
     *              description: Error
     */
    router.post("/", AdministradorController.createAdministrador.bind(AdministradorController));

    return router;
}