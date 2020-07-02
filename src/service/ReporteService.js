class ReporteService{
    constructor({RecursoService, PruebaService, ParteMedicoService, HospitalService}){
        this._recursoService = RecursoService;
        this._pruebaService = PruebaService;
        this._parteMedicoService = ParteMedicoService;
        this._hospitalService = HospitalService;

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

    async reporteTotal(){
        const todosCUITs = await this._hospitalService.getAll();

        let reporteTotal = [];

        for (const modelo of todosCUITs){
            const reporteIndividual = await this.reporteDiario(modelo.CUIT);
            reporteTotal.push(reporteIndividual);
        };

        return reporteTotal;
    }

}

module.exports = ReporteService;