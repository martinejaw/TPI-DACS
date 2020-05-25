const { Router } = require("express");


module.exports = ( { CiudadController } ) => {
    const router = Router();
    
    router.get('/', CiudadController.getCiudad.bind(CiudadController));
    router.post("/", CiudadController.createCiudad.bind(CiudadController));

    return router;
}
