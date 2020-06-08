const BaseService = require("./base.service");
const { ParteMedico } = require("../domain/models");

class ParteMedicoService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.ParteMedicoRepository,ParteMedico);
    }

    async cantidadCurados(CUIT){
        const cantidadCurados = await this._entityRepository.cantidadCurados(CUIT);
        return cantidadCurados;
    }

    async cantidadEnfermos(CUIT){
        const cantidadEnfermos = await this._entityRepository.cantidadEnfermos(CUIT);
        return cantidadEnfermos;
    }

    async cantidadMuertos(CUIT){
        const cantidadMuertos = await this._entityRepository.cantidadMuertos(CUIT);
        return cantidadMuertos;
    }

    async resumenCasos(CUIT){
        const cantidadCurados = await this.cantidadCurados(CUIT);
        const cantidadEnfermos = await this.cantidadEnfermos(CUIT);
        const cantidadMuertos = await this.cantidadMuertos(CUIT);

        const resumenCasos =
        {
            "cantidadMuertos": cantidadMuertos,
            "cantidadCurados": cantidadCurados,
            "cantidadEnfermos": cantidadEnfermos
        };

        return resumenCasos;

    }

}

module.exports = ParteMedicoService;
