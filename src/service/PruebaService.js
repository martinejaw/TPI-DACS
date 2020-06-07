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
    
    async contarPruebasRealizadas(CUIT){
        const cantidadPruebasRealizadas = await this._entityRepository.contarPruebasRealizadas(CUIT);
        return cantidadPruebasRealizadas[0].cont;
    }
    
    async contarPruebasRealizadasSinResultados(CUIT){
        const cantidadSinResultado = await this._entityRepository.contarPruebasRealizadasSinResultados(CUIT);
        return cantidadSinResultado[0].cont;
    }
    
    async contarPruebasPositivas(CUIT){
        const cantidadPruebasPositivas = await this._entityRepository.contarPruebasPositivas(CUIT);
        return cantidadPruebasPositivas[0].cont;
    }

    async contarPruebasNegativas(CUIT){
        const cantidadPruebasNegativas = await this._entityRepository.contarPruebasNegativas(CUIT);
        return cantidadPruebasNegativas[0].cont;
    }

    async totalPruebas(CUIT){
        const cantidadPruebasRealizadas = await this.contarPruebasRealizadas(CUIT);
        const cantidadSinResultado = await this.contarPruebasRealizadasSinResultados(CUIT);
        const cantidadPruebasPositivas = await this.contarPruebasPositivas(CUIT);
        const cantidadPruebasNegativas = await this.contarPruebasNegativas(CUIT);
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