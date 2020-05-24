const { Router } = require("express");


module.exports = ( { ParteMedicoController } ) => {
    const router = Router();
    
    router.get('/', ParteMedicoController.getPartesMedicos.bind(ParteMedicoController));
    router.post("/", ParteMedicoController.createParteMedico.bind(ParteMedicoController));

    return router;
}
