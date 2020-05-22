const { Router } = require("express");


module.exports = ( { CalleController } ) => {
    const router = Router();
    
    router.get('/', CalleController.getCalles.bind(CalleController));
    router.post("/", CalleController.createCalle.bind(CalleController));

    return router;
}
