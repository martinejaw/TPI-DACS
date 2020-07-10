class CasoController {
    constructor({ CasoService }) {
        this._casoService = CasoService;
    }

    async getCasos(req, res) {
        await this._casoService.getAll()
            .then(casos => res.status(200).json(casos))
            .catch(error => {
                res.status(400).json({ msg: error.message });
            });
    }

    async getCasosByMedicoDni(req, res) {
        await this._casoService.getCasosByMedicoDni(req.params.MedicoDni)
            .then(casos => res.status(200).json(casos))
            .catch(error => {
                res.status(400).json({ msg: error.message });
            });
    }

    async createCaso(req, res) {
        await this._casoService.create(req.body)
            .then(casoCreated => res.status(201).json(casoCreated))
            .catch(error => {
                res.status(400).json({ msg: error.message });
            });
    }

    async updateCaso(req, res) {
        const { idCaso } = req.params;
        await this._casoService.actualizar(req.body, idCaso)
            .then(casoUpdated => {
                if (casoUpdated[0] == 0) {
                    res.status(400).json({ msg: "No existe caso con tal id" })
                } else {
                    res.status(200).json({ msg: "Actualizado correctamente el caso con id " + idCaso })
                }
            })
            .catch(error => {
                res.status(400).json({ msg: error.message });
            });
    }
}

module.exports = CasoController;