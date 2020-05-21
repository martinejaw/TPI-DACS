const { Router } = require("express");


module.exports = ( { HospitalController } ) => {
    const router = Router();
    
    router.get('/', HospitalController.getHospitales.bind(HospitalController));
    router.post("/", HospitalController.createHospital.bind(HospitalController));

    return router;
}
