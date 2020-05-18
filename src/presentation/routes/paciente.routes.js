const { Router } = require("express");


module.exports = ( { PacienteController } ) => {
    const router = Router();

    /*router.get('/a', (req,res) => {
        res.json({"Tile": "Hello World"});
    });*/
    
    router.get('/', PacienteController.getPacientes.bind(PacienteController));
    router.post("/", PacienteController.createPaciente.bind(PacienteController));

    return router;
}
