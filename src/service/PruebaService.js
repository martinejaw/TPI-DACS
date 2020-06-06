const BaseService = require("./base.service");
const { Prueba } = require("../domain/models");

class PruebaService extends BaseService {
    constructor({ UnitOfWork }){
        super(UnitOfWork.PruebaRepository,Prueba);
    }
    async updatePrueba(idPrueba,idCaso, entity) {
        const updatedEntity = await this._entityRepository.updatePrueba(idPrueba,idCaso, entity);
        return updatedEntity;
    }
    
    async contarPruebasRealizadas(){
        const cantidadPruebasRealizadas = await this._entityRepository.contarPruebasRealizadas();
        return cantidadPruebasRealizadas;
    }
    
    async contarPruebasRealizadasSinResultados(){
        const cantidadSinResultado = await this._entityRepository.contarPruebasRealizadasSinResultados();
        return cantidadSinResultado;
    }
    
    async contarPruebasPositivas(){
        const cantidadPruebasPositivas = await this._entityRepository.contarPruebasPositivas();
        return cantidadPruebasPositivas;
    }

    async contarPruebasNegativas(){
        const cantidadPruebasNegativas = await this._entityRepository.contarPruebasNegativas();
        return cantidadPruebasNegativas;
    }

    async totalPruebas(){
        const cantidadPruebasRealizadas = await this.contarPruebasRealizadas();
        const cantidadSinResultado = await this.contarPruebasRealizadasSinResultados();
        const cantidadPruebasPositivas = await this.contarPruebasPositivas();
        const cantidadPruebasNegativas = await this.contarPruebasNegativas();
        const totalPruebas = 
        {
            "realizadas": cantidadPruebasRealizadas,
            "sinResultado": cantidadSinResultado,
            "positivas": cantidadPruebasPositivas,
            "negativas": cantidadPruebasNegativas
        };
        return totalPruebas;
    }


}

module.exports = PruebaService;