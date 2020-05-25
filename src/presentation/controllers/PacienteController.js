const PacienteClase = require('../../domain/models/Paciente');
const mapper = require('automapper-js');

class PacienteController {
    constructor({PacienteService}){
        this._pacienteService = PacienteService;
    }

    async getPacientes(req, res){
        await this._pacienteService.getAll()
            .then(pacientes => res.status(200).json(pacientes))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async getPaciente(req, res) {
        const { medicodni } = req.params;
        await this._pacienteService.get(parseInt(medicodni))
            .then(pacientes => res.status(200).json(pacientes))
            .catch(error => {
                res.status(404).json({msg: error.message});  
            });
    }

    async createPaciente(req, res) {
        await this._pacienteService.create(req.body)
            .then(pacienteCreated => res.status(201).json(pacienteCreated))
            .catch(error => {
                res.status(412).json({msg: error.message});  
        });
    }

    async updatePaciente(req, res) {
        const { body } = req;
        const { dni } = req.params;
        await this._pacienteService.update(dni, body)
            .then(pacienteUpdated => res.status(204).json({msg: "Paciente actualizado"}))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    }

    async deletePaciente(req, res) {
        const { dni } = req.params;
        await this._pacienteService.delete(dni);
        return res.status(204).send();
    }
}

module.exports = PacienteController;