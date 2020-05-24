const { Router } = require("express");


module.exports = ( { ConsultaController } ) => {
    const router = Router();
    
    router.get('/', ConsultaController.getConsultas.bind(ConsultaController));
    router.post("/", ConsultaController.createConsulta.bind(ConsultaController));

    router.post("/api", ConsultaController.recibirConsulta.bind(ConsultaController));

    router.put("/diagnosticar", ConsultaController.diagnosticar.bind(ConsultaController));

    return router;
}
