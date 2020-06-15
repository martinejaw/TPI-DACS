const { Router } = require("express");


module.exports = ( { ParteMedicoController } ) => {
    const router = Router();
    
    /**
     * @swagger
     * /partemedico:
     *  get:
     *      description: Usar para obtener todos los partes medicos
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente los partes medicos
     *          '412':
     *              description: Error
     */
    router.get('/', ParteMedicoController.getPartesMedicos.bind(ParteMedicoController));

    /**
     * @swagger
     * /partemedico:
     *  post:
     *      description: Usar para crear un nuevo parte medico
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se creo correctamente el parte medico
     *          '412':
     *              description: Error
     */
    router.post("/", ParteMedicoController.createParteMedico.bind(ParteMedicoController));

    /**
     * @swagger
     * /partemedico/{id}:
     *  get:
     *      description: Usar para obtener los partes medicos de un caso
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente los partes
     *          '412':
     *              description: Error
     */
    router.get("/:idCaso", ParteMedicoController.obtenerPartesCaso.bind(ParteMedicoController));

    return router;
}
