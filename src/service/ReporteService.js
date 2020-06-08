class ReporteService{
    constructor({RecursoService, PruebaService, ParteMedicoService}){
        this._recursoService = RecursoService;
        this._pruebaService = PruebaService;
        this._parteMedicoService = ParteMedicoService;

    }

    async reporteDiario(CUIT){
        const totalPruebas = await this._pruebaService.totalPruebas(CUIT);
        const totalRecursos = await this._recursoService.obtenerTodosRecursosHospital(CUIT);
        const resumenCasos = await this._parteMedicoService.resumenCasos(CUIT);

        const recursosLindificados = {};
        for(let recurso of totalRecursos){
            recursosLindificados[recurso.nombre]= recurso.cantidad;
        }


        const reporte = 
        {
            "ReporteHospitalario": {
                "cuitHospital": CUIT,
                "resumenCasos": resumenCasos ,
                "pruebasRealizadas": totalPruebas,
                "Recursos": recursosLindificados
            }
        }

        return reporte;
    }

}

module.exports = ReporteService;