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
     *          '400':
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
     *          '201':
     *              description: Se creo correctamente el medico
     *          '400':
     *              description: Error
     */
    router.post("/", MedicoController.createMedico.bind(MedicoController));

    /**
     * @swagger
     * /medico/{CUIT}:
     *  get:
     *      description: Usar para obtener los medicos de un hospital
     *      tags: ["HOSPITALES"]
     *      parameters:
     *        - in: path
     *          name: CUIT
     *          description: CUIT del hospital
     *          required: true
     *          schema:
     *              type: integer
     *              example: 2121 
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente los medicos del hospital
     *          '400':
     *              description: Error
     */
    router.get("/:CUIT", MedicoController.getMedicosHospital.bind(MedicoController));

    return router;
}
