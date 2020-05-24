class ConsultaController {
    constructor({ConsultaService}){
        this._consultaService = ConsultaService;
    }

    async getConsultas(req,res){
        await this._consultaService.getAll()
            .then(consultas => res.status(200).json(consultas))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async getConsultaSinResponder(req,res){
        const { medicodni } = req.params;
        await this._consultaService.getSinResponder(medicodni)
            .then(consultas => res.status(200).json(consultas))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createConsulta(req, res) {
        await this._consultaService.create(req.body)
            .then(consultaCreated => res.status(201).json(consultaCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }
}

module.exports = ConsultaController;
