const { Router } = require("express");


module.exports = ( { MedicoController } ) => {
    const router = Router();
    
    /**
     * @swagger
     * /medico:
     *  get:
     *      description: Usar para obtener todos los medicos de todos los hospitales
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todos los medicos de todos hospitales
     *          '412':
     *              description: Error
     */
    router.get('/', MedicoController.getMedicos.bind(MedicoController));

    /**
     * @swagger
     * /medico:
     *  post:
     *      description: Usar para crear un medico
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se creo correctamente el medico
     *          '412':
     *              description: Error
     */
    router.post("/", MedicoController.createMedico.bind(MedicoController));

    return router;
}
