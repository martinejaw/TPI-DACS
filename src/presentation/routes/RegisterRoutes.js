const { Router } = require("express");

module.exports = ({ LoginController }) => {
    const router = Router();

    /**
     * @swagger
     * /registro:
     *  post:
     *      description: Usar para registrar una cuenta
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '201':
     *              description: Se registró correctamente el usuario
     *          '400':
     *              description: Error
     */
    router.post('/', LoginController.register.bind(LoginController));

    return router;
}
