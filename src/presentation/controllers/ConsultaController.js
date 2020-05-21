class ConsultaController {
    constructor({ConsultaService}){
        this._consultaService = ConsultaService;
    }

    async getConsultas(req,res){
        let consultas = await this._consultaService.getAll();
        res.json(consultas);
    }

    async createConsulta(req, res) {
        const body = req.body;
        const createdConsulta = await this._consultaService.create(body);
        return res.status(201).json(createdConsulta);
    }
}

module.exports = ConsultaController;
