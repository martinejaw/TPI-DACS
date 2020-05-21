const { Router } = require("express");


module.exports = ( { PacienteController } ) => {
    const router = Router();
    
    router.get('/', PacienteController.getPacientes.bind(PacienteController));
    router.get("/:dni", PacienteController.getPaciente.bind(PacienteController));
    router.post("/", PacienteController.createPaciente.bind(PacienteController));
    router.put("/:dni", PacienteController.updatePaciente.bind(PacienteController));
    router.delete("/:dni", PacienteController.deletePaciente.bind(PacienteController));

    return router;
}
