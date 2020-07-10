const mapper = require("automapper-js");

class AsignacionService {
    constructor({ MedicoService, ConsultaService }) {
        this._medicoService = MedicoService;
        this._consultaService = ConsultaService;
    }

    async asignarConsulta(consultaID) {

        let consultaNueva = {
            id: undefined,
            MedicoDni: undefined,
            dni: undefined,
        };
        const medicoParaAsignarDni = await this._medicoService.getMedicoLibre();
        let consultasNuevas;
        await this._consultaService.recibirConsultasCompleta(0)
            .then(consultas => consultasNuevas = consultas)
            .catch(error => {
                res.json({ msg: error.message })
            });
        consultaNueva.id = Number(consultaID);
        consultaNueva.MedicoDni = medicoParaAsignarDni;
        let consultaObtenida = await this._consultaService.consultaByID(consultaNueva.id, consultasNuevas)
            .catch(error => console.log());
        consultaNueva.dni = Number(consultaObtenida.paciente.nroDeDocumento);
        return consultaNueva;
    }

}

module.exports = AsignacionService;