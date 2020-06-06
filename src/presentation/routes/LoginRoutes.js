const { Router } = require("express");


module.exports = ( { LoginController } ) => {
    const router = Router();
    router.post('/', LoginController.login.bind(LoginController));
    router.get('/', LoginController.loginFront.bind(LoginController));
    
    return router;
}
