const { Router } = require("express");


module.exports = ( { RecursoController } ) => {
    const router = Router();
    
    router.get('/', RecursoController.getCasos.bind(RecursoController));
    router.post("/", RecursoController.createCaso.bind(RecursoController));

    return router;
}
