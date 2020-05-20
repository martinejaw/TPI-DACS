class HospitalController {
    constructor({HospitalService}){
        this._hospitalService = HospitalService;
    }

    async getHospitales(req,res){
        let hospitales = await this._hospitalService.getAll();
        res.json(hospitales);
    }

    async createHospital(req, res) {
        const body = req.body;
        console.log(body);
        const createdHospital = await this._hospitalService.create(body);
        return res.status(201).json(createdHospital);
    }
}

module.exports = HospitalController;