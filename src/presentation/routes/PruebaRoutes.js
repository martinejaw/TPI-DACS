const { Router } = require("express");


module.exports = ( { PruebaController } ) => {
    const router = Router();
    
    router.get('/', PruebaController.getCasos.bind(PruebaController));
    router.post("/", PruebaController.createCaso.bind(PruebaController));

    return router;
}
