const BaseService = require("./base.service");
const { ParteMedico } = require("../domain/models");

class ParteMedicoService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.ParteMedicoRepository,ParteMedico);
    }

    async cantidadCurados(){
        const cantidadCurados = await this._entityRepository.cantidadCurados();
        return cantidadCurados;
    }

    async cantidadEnfermos(){
        const cantidadEnfermos = await this._entityRepository.cantidadEnfermos();
        return cantidadEnfermos;
    }

    async cantidadMuertos(){
        const cantidadMuertos = await this._entityRepository.cantidadMuertos();
        return cantidadMuertos;
    }

    async resumenCasos(){
        const cantidadCurados = await this.cantidadCurados();
        const cantidadEnfermos = await this.cantidadEnfermos();
        const cantidadMuertos = await this.cantidadMuertos();

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
