const { Router } = require("express");


module.exports = ( { PacienteController } ) => {
    const router = Router();
    
<<<<<<< HEAD
    router.get('/', PacienteController.getPacientes.bind(PacienteController));
    router.get("/:dni", PacienteController.getPaciente.bind(PacienteController));
=======
    router.get('/', PacienteController.getPacientes.bind(PacienteController))
>>>>>>> ff7867093243797591ce596c3b5e60510cbf04d6
    router.post("/", PacienteController.createPaciente.bind(PacienteController));
    router.put("/:dni", PacienteController.updatePaciente.bind(PacienteController));
    router.delete("/:dni", PacienteController.deletePaciente.bind(PacienteController));

    return router;
}
