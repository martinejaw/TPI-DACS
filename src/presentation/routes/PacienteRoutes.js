const { Router } = require("express");


module.exports = ( { PacienteController } ) => {
    const router = Router();
    
    router.get('/', PacienteController.getPacientes.bind(PacienteController))
    router.post("/", PacienteController.createPaciente.bind(PacienteController));

    return router;
}
