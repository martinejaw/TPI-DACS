const { Router } = require("express");


module.exports = ( { ConsultaController } ) => {
    const router = Router();
    
    router.get('/', ConsultaController.getConsultas.bind(ConsultaController));
    router.post("/", ConsultaController.createConsulta.bind(ConsultaController));

    router.get('/consultasinresponder/:medicodni', ConsultaController.getConsultaSinResponder.bind(ConsultaController));
    router.post("/consultasinresponder/:medicodni", ConsultaController.getConsultaSinResponder.bind(ConsultaController));

    router.put("/diagnosticar", ConsultaController.diagnosticar.bind(ConsultaController));

    return router;
}
