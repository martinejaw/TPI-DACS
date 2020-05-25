const { Router } = require("express");


module.exports = ( { PruebaController } ) => {
    const router = Router();
    
    router.get('/', PruebaController.getPruebas.bind(PruebaController));
    router.post("/", PruebaController.createPrueba.bind(PruebaController));

    router.put('/:idCaso/:idPrueba', PruebaController.updatePrueba.bind(PruebaController));

    return router;
}
