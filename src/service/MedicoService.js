const BaseService = require("./base.service");
const { Medico } = require("../domain/models");

class MedicoService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.MedicoRepository,Medico);
    }

    async getMedicoLibre(){
        let resultado = await this._entityRepository.getMedicoLibre();
        return resultado[0].dni;
    }

    //SELECT dni FROM (SELECT Medicos.dni,COUNT(id) AS cont FROM Medicos LEFT OUTER JOIN (SELECT * FROM Consultas WHERE date(Consultas.createdAt) = date('now')) AS C ON Medicos.dni = C.MedicoDni GROUP BY Medicos.dni ORDER BY cont ASC LIMIT 1);

    async obtenerMedicosHospital(CUIT){
        let medicos = await this._entityRepository.obtenerMedicosHospital(CUIT);
        return medicos;
    }

}

module.exports = MedicoService;
