const { Router } = require("express");


module.exports = ( { RecursoController } ) => {
    const router = Router();
    
    router.get('/', RecursoController.getRecursos.bind(RecursoController));
    router.post("/", RecursoController.createRecurso.bind(RecursoController));

    return router;
}
