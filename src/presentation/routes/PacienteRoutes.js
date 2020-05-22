const { Router } = require("express");

module.exports = ( { PacienteController } ) => {
    const router = Router();
    /** @class Circle representing a circle. */
    /**
     * @swagger
     * /paciente:
     *  get:
     *      description: Usar para obtener todos los pacientes
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente los pacientes
     *          '404':
     *              description: No se encuentra el recurso
     */
    router.get('/', PacienteController.getPacientes.bind(PacienteController));

    /**
     * @swagger
     * /paciente/{dni}:
     *  get:
     *      description: Usar para obtener un paciente
     *      parameters:
     *        - in: path
     *          name: dni
     *          required: true
     *          schema:
     *              type: integer
     *              example: 41200400 
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvo correctamente
     *          '404':
     *              description: No se encuentra el recurso
     *              
     */
    router.get("/:dni", PacienteController.getPaciente.bind(PacienteController));

    /**
     * @swagger
     * Health check
     * @memberof health
     * @function
     * @name happy
     */
    router.post("/", PacienteController.createPaciente.bind(PacienteController));
    router.put("/:dni", PacienteController.updatePaciente.bind(PacienteController));
    router.delete("/:dni", PacienteController.deletePaciente.bind(PacienteController));

    return router;
}
