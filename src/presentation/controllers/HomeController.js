const path = require("path");

class HomeController{
    constructor({LoginService}){
        this._loginService = LoginService;
    }

    async showView(req,res){
        res.render(path.join(__dirname+'/../views/html/home'));
    }

}

module.exports = HomeController;