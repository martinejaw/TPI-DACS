const path = require('path')
class CalleController {
    constructor({ CalleService }) {
        this._calleService = CalleService;
    }

    async getCalles(req, res) {
        await this._calleService.getAll()
            .then(calles => res.status(200).json(calles))
            .catch(error => {
                res.status(400).json({ msg: error.message });
            });
    }

    async createCalle(req, res) {
        await this._calleService.create(req.body)
            .then(calleCreated => res.status(201).json(calleCreated))
            .catch(error => {
                res.status(400).json({ msg: error.message });
            });
    }
}

module.exports = CalleController;