const { Router } = require("express");


module.exports = ( { ConsultaController } ) => {
    const router = Router();
    
    router.get('/', ConsultaController.getConsultas.bind(ConsultaController));

    /**
     * @swagger
     * /consulta:
     *  get:
     *      description: PACIENTES - Usar para crear nuevas consultas para que sean diagnosticadas
     *      tags: ["PACIENTES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se agrego correctamente la consulta
     *          '412':
     *              description: Error
     */
    router.post("/", ConsultaController.createConsulta.bind(ConsultaController));

    router.get('/consultasinresponder/:medicodni', ConsultaController.getConsultaSinResponder.bind(ConsultaController));
    router.post("/consultasinresponder/:medicodni", ConsultaController.getConsultaSinResponder.bind(ConsultaController));


    router.put("/diagnosticar", ConsultaController.diagnosticar.bind(ConsultaController));

    return router;
}
