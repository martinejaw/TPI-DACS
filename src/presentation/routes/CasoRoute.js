const { Router } = require("express");


module.exports = ( { CasoController } ) => {
    const router = Router();
    
    router.get('/', CasoController.getCasos.bind(CasoController));
    router.post("/", CasoController.createCaso.bind(CasoController));

    return router;
}
