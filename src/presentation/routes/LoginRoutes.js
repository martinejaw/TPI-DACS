const { Router } = require("express");
const cors = require('cors');

module.exports = ( { LoginController } ) => {
    const router = Router();

    /**
     * @swagger
     * /login:
     *  post:
     *      description: Usar inicar una sessión
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se inició correctamente la sessión
     *          '400':
     *              description: Error
     *          '401':
     *              description: Denegado
     */
    router.post('/', LoginController.login.bind(LoginController));

    /**
     * @swagger
     * /login/logout:
     *  post:
     *      description: Usar inicar una sessión
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se inició correctamente la sessión
     *          '400':
     *              description: Error
     *          '401':
     *              description: Denegado
     */
    router.post('/logout', LoginController.logout.bind(LoginController));
    
    return router;
}
