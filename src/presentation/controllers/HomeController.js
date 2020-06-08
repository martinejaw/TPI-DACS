const path = require("path");

class HomeController{
    constructor({LoginController}){
        this._loginController = LoginController;
    }

    async showView(req,res){
        res.render(path.join(__dirname+'/../views/html/home'));
    }

}

module.exports = HomeController;