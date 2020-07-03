const { Router } = require("express");


module.exports = ( { AdministradorController } ) => {
    const router = Router();
    
    router.get('/', AdministradorController.getAdministrador.bind(AdministradorController));
    router.post("/", AdministradorController.createAdministrador.bind(AdministradorController));

    return router;
}