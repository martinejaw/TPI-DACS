class ConsultaController {
    constructor({ConsultaService, AsignacionService}){
        this._consultaService = ConsultaService;
        this._asignacionService = AsignacionService;
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

    async recibirConsulta(req, res) {
        try{
            this._asignacionService.asignarConsulta(req.body.Consulta);
            res.status(202);
        }catch (error){
            res.status(404);
        }
    }

}

module.exports = ConsultaController;
