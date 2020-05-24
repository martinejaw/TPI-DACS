const { Router } = require("express");


module.exports = ( { MedicoController } ) => {
    const router = Router();
    
    router.get('/', MedicoController.getMedicos.bind(MedicoController));
    router.post("/", MedicoController.createMedico.bind(MedicoController));

    return router;
}
