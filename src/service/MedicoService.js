const BaseService = require("./base.service");
const { Medico } = require("../domain/models");

class MedicoService extends BaseService {
    constructor({ UnitOfWork }) {
        super(UnitOfWork.MedicoRepository,Medico);
    }

    async getMedicoLibre() {
        const resultado = await this._entityRepository.getMedicoLibre();
        return resultado[0].dni;
    }

    async obtenerHospital(dni) {
        const resultado = await this._entityRepository.obtenerHospital(dni);
        return resultado;
    }

    async obtenerMedicosHospital(CUIT) {
        const medicos = await this._entityRepository.obtenerMedicosHospital(CUIT);
        return medicos;
    }

    async cantidadMedicos(CUIT) {
        const cantidadMedicos = [];

        const especialidades = ["medico-general","dentista","ginecologo","obstetrico","optometrista","cardiologo","psiquiatra","pediatra","fisioterapeuta","otorrinolaringologo","anestesiologo","radiologo","epidemiologo","dermatologo","ortopedista","psicologo","audiologo","toxicologo","patologo", "patologo-forense","cirujano-general","cirujano-plastico", "cirujano-cardiaco","cirujano-ortopedico","neurocirujano", "cirujano-pediatrico", "cirujano-trauma","cirujano-maxilofacial","electrocardiografo-tecnico","tecnico-laboratorio","tecnico-dental","tecnico-histologico","oftalmica-tecnico","tecnico-biomedico","tecnico-mri","tecnico-quirurgico","tecnico-radiologo","quiropractico","enfermero", "neonatologo", "endocrinologo", "genetista","oncologo", "kinesiologo"];
        for(const especialidad of especialidades){
            const medicosContados = await this._entityRepository.cantidadEspecialidad(CUIT, especialidad);
            const cantidad_especialidad = {especialidad: especialidad, cantidad: medicosContados};
            cantidadMedicos.push(cantidad_especialidad);
        }

        return cantidadMedicos;
    }
}

module.exports = MedicoService;
