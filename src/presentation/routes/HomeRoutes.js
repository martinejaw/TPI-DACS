const { Router } = require("express");


module.exports = ({ HomeController }) => {
    const router = Router();

    router.get("/", HomeController.showView.bind(HomeController));

    return router;
}