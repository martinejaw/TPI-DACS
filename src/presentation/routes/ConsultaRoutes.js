const { Router } = require("express");


module.exports = ( { ConsultaController } ) => {
    const router = Router();
    
    router.get('/', ConsultaController.getConsultas.bind(ConsultaController));
    router.post("/", ConsultaController.createConsulta.bind(ConsultaController));

<<<<<<< HEAD
    router.get('/consultasinresponder/:medicodni', ConsultaController.getConsultaSinResponder.bind(ConsultaController));
    router.post("/consultasinresponder/:medicodni", ConsultaController.getConsultaSinResponder.bind(ConsultaController));
=======
    router.post("/api", ConsultaController.recibirConsulta.bind(ConsultaController));
>>>>>>> e37959a305c2e716f978795b2420c81caf72b9d3

    return router;
}
