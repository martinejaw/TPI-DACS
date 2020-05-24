const { Router } = require("express");


module.exports = ( { HospitalController } ) => {
    const router = Router();
    
    /**
     * @swagger
     * /hospital:
     *  get:
     *      description: Usar para obtener todos los hospitales
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todos los hospitales
     *          '412':
     *              description: Error
     */
    router.get('/', HospitalController.getHospitales.bind(HospitalController));

    /**
     * @swagger
     * /hospital:
     *  post:
     *      description: Usar para crear un hospital
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se creo correctamente el hospital
     *          '412':
     *              description: Error
     */
    router.post("/", HospitalController.createHospital.bind(HospitalController));

    return router;
}
