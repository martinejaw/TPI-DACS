class CalleController {
    constructor({CalleService}){
        this._calleService = CalleService;
    }

    async getCalles(req,res){
        let calles = await this._calleService.getAll();
        res.json(calles);
    }

    async createCalle(req, res) {
        const body = req.body;
        console.log(body);
        const createdCalle = await this._calleService.create(body);
        return res.status(201).json(createdCalle);
    }
}

module.exports = CalleController;