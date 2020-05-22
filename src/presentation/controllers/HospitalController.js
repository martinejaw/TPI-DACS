class HospitalController {
    constructor({HospitalService}){
        this._hospitalService = HospitalService;
    }

    async getHospitales(req,res){
        await this._hospitalService.getAll()
            .then(hospitales => res.status(200).json(hospitales))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createHospital(req, res) {
        await this._hospitalService.create(req.body)
            .then(hospitalCreated => res.status(201).json(hospitalCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }
}

module.exports = HospitalController;