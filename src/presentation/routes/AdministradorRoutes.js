const { Router } = require("express");


module.exports = ( { AdministradorController } ) => {
    const router = Router();
    
    router.get('/', AdministradorController.getCalles.bind(AdministradorController));
    router.post("/", AdministradorController.createCalle.bind(AdministradorController));

    return router;
}