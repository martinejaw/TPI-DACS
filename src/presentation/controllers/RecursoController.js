const request = require('request-promise')

class RecursoController {
    constructor({RecursoService}){
        this._recursoService = RecursoService;
    }

    async getRecursos(req,res){
        await this._recursoService.getAll()
            .then(recursos => res.status(200).json(recursos))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createRecurso(req, res) {
        await this._recursoService.create(req.body)
            .then(recursoCreated => res.status(201).json(recursoCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
            });
    }

    async obtenerTodosRecursos(req, res){
        await this._recursoService.getAll()
            .then(recursos => res.status(200).json(recursos))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async updateRecurso(req, res) {
        const { body } = req;
        const { id } = req.params;
        const { CUIT } = req.params;
        await this._recursoService.updateRecurso(CUIT, id, body)
            .then(recursoUpdated => {
                if(recursoUpdated[0]==0){
                    res.status(404).json({msg: "No existe recurso con tal id"})
                }else{
                    res.json({msg: "Actualizado correctamente el recurso con id "+id+" en el Hospital con CUIT "+CUIT})
                }})
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    }

    async obtenerRecursosHospital(req, res) {
        const { CUIT } = req.params;
        await this._recursoService.getAll(CUIT)
            .then(recursos => res.status(200).json(recursos))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async pedirRecursos(req, res){
        const recursos = req.body;
        /*
        {
            "CUIT": 2121
        "camillas" :13,
                "jabonLitros" : 41,
                "alcoholLitros" : 23,
                "barbijos" : 15,
                "jeringas" :32,
                "cofias" : 12
        "Test": 150,
        "Respiradores":15,
        }
        */
        // Evaluar la posibilidad de guardar que se hizo el pedido

        let options = {
            method: 'POST',
            uri: 'http://localhost:3000/consulta', // aca va la api de ministerio
            body: recursos,
            json: true
        }

        // Mando la peticion al ministerio
        request(options)
            .then(respuesta => console.log("Okey"))
            .catch(error => {  
                console.log("No Okey")
            }); 

    }
}

module.exports = RecursoController;