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
     * /consulta/consultaNuevaId:
     *  get:
     *      description: PACIENTES - Recibir la lista de id de las nuevas consultas para asignarlo a los médicos
     *      tags: ["PACIENTES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '201':
     *              description: Se asignó correctamente las consultas
     *          '400':
     *              description: Error
     */
    router.get("/consultaNuevaId", ConsultaController.recibirConsultaId.bind(ConsultaController));

    /**
     * @swagger
     * /consulta/consultaNueva/{estado}:
     *  get:
     *      description: PACIENTES - Recibir la lista de las nuevas consultas para visualizarlos
     *      tags: ["PACIENTES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvo correctamente las consultas
     *          '400':
     *              description: Error
     */
    router.get("/consultaNueva/:estado", ConsultaController.recibirConsultaCompleta.bind(ConsultaController));

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
     * /consulta/obtenerConsulta:
     *  get:
     *      description: Usar obtener la consulta pasandole el id
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvo correctamente la consulta
     *          '400':
     *              description: Error
     */
    router.get("/obtenerConsulta/:id", ConsultaController.obtenerConsulta.bind(ConsultaController));

    /**
     * @swagger
     * /consulta/obtenerConsultaDni:
     *  get:
     *      description: Usar obtener la consulta pasandole el dni
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvo correctamente la consulta
     *          '400':
     *              description: Error
     */
    router.get("/obtenerConsultaDni/:dni", ConsultaController.obtenerConsultaDni.bind(ConsultaController));

    return router;
}
