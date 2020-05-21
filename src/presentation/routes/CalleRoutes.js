const { Router } = require("express");


module.exports = ( { CalleController } ) => {
    const router = Router();
    
    router.get('/', CalleController.getCasos.bind(CalleController));
    router.post("/", CalleController.createCaso.bind(CalleController));

    return router;
}
