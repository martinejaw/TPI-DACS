class ParteMedicoController {
    constructor({ ParteMedicoService }) {
        this._partemedicoService = ParteMedicoService;
    }

    async getPartesMedicos(req, res) {
        await this._partemedicoService.getAll()
            .then(partesMedicos => res.status(200).json(partesMedicos))
            .catch(error => {
                res.status(400).json({ msg: error.message });
            });
    }

    async createParteMedico(req, res) {
        await this._partemedicoService.create(req.body)
            .then(parteMedicoCreated => res.status(201).json(parteMedicoCreated))
            .catch(error => {
                res.json({ msg: error.message });
            });
    }
    async obtenerPartesCaso(req, res) {
        const { idCaso } = req.params;
        await this._partemedicoService.getByCasoId(idCaso)
            .then(partesMedicosDelCaso => res.status(200).json(partesMedicosDelCaso))
            .catch(error => {
                res.status(400).json({ msg: error.message });
            });
    }
}

module.exports = ParteMedicoController;
