const { Router } = require("express");
const cors = require('cors');

module.exports = ( { LoginController } ) => {
    const router = Router();
    router.post('/', LoginController.login.bind(LoginController));
    router.get('/', LoginController.loginView.bind(LoginController));
    
    return router;
}
