const { Router } = require("express");


module.exports = ( { ConsultaController } ) => {
    const router = Router();
    
    router.get('/', ConsultaController.getConsultas.bind(ConsultaController));

    /**
     * @swagger
     * /consulta:
     *  post:
     *      description: Usar para crear nuevas consultas
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '201':
     *              description: Se agrego correctamente la consulta
     *          '400':
     *              description: Error
     */
    router.post("/", ConsultaController.createConsulta.bind(ConsultaController));

    /**
     * @swagger
     * /consulta:
     *  post:
     *      description: PACIENTES - Usar para crear nuevas consultas para que sean diagnosticadas
     *      tags: ["PACIENTES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '201':
     *              description: Se agrego correctamente la consulta
     *          '400':
     *              description: Error
     */
    router.post("/consultaNueva", ConsultaController.recibirConsulta.bind(ConsultaController));

    /**
     * @swagger
     * /consulta/consultasinresponder/{medicodni}:
     *  get:
     *      description: Usar para obtener las consultas no contestadas de un medico
     *      tags: ["HOSPITALES"]
     *      parameters:
     *        - in: path
     *          name: medicodni
     *          description: DNI del medico
     *          required: true
     *          schema:
     *              type: integer
     *              example: 41031555 
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente las consultas no contestadas del medico
     *          '400':
     *              description: Error
     */
    router.get('/consultasinresponder/:medicodni', ConsultaController.getConsultaSinResponder.bind(ConsultaController));

    /**
     * @swagger
     * /consulta/consultasrespondidas/{medicodni}:
     *  get:
     *      description: Usar para obtener las consultas respondidas de un medico
     *      tags: ["HOSPITALES"]
     *      parameters:
     *        - in: path
     *          name: medicodni
     *          description: DNI del medico
     *          required: true
     *          schema:
     *              type: integer
     *              example: 41031555 
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente las consultas respondidas del medico
     *          '400':
     *              description: Error
     */
    router.get('/consultasrespondidas/:medicodni', ConsultaController.getConsultaRespondidas.bind(ConsultaController));

    /**
     * @swagger
     * /consulta/diagnosticar:
     *  put:
     *      description: Usar para agregar un diagnostico a una consulta (update)
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se agrego correctamente el diagnostico a la consulta
     *          '400':
     *              description: Error
     */
    router.put("/diagnosticar", ConsultaController.diagnosticar.bind(ConsultaController));

    /**
     * @swagger
     * /consulta/obtenerConsultas:
     *  get:
     *      description: Usar obtener las consultas nuevas desde el grupo de pacientes
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente las consultas nuevas
     *          '400':
     *              description: Error
     */
    router.get("/obtenerConsultas", ConsultaController.obtenerConsultas.bind(ConsultaController));

    return router;
}
