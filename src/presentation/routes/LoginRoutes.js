const { Router } = require("express");


module.exports = ( { LoginController } ) => {
    const router = Router();
    router.post('/', LoginController.login.bind(LoginController));
    
    return router;
}
