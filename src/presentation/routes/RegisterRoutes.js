const { Router } = require("express");

module.exports = ( { LoginController } ) => {
    const router = Router();
    router.post('/', LoginController.register.bind(LoginController));
    
    return router;
}
