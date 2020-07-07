const dateFormat = require("dateformat");

class ReporteService{
    constructor({RecursoService, PruebaService, ParteMedicoService, HospitalService, MedicoService, CiudadService}){
        this._recursoService = RecursoService;
        this._pruebaService = PruebaService;
        this._parteMedicoService = ParteMedicoService;
        this._hospitalService = HospitalService;
        this._medicoService = MedicoService;
        this._ciudadService = CiudadService;
    }

    async reporteDiario(CUIT){
        const totalPruebas = await this._pruebaService.totalPruebas(CUIT);
        const totalRecursos = await this._recursoService.obtenerTodosRecursosHospital(CUIT);
        const resumenCasos = await this._parteMedicoService.resumenCasos(CUIT);
        const medicos = await this._medicoService.cantidadMedicos(CUIT);

        const hospital = await this._hospitalService.getHospitalCiudad(CUIT); // Probar esto, no voy a cargar yo

        let nombreHospital;
        let idCiudad;
        let nombreCiudad;

        try{
            nombreHospital = hospital.nombre;
        } catch(e) {
            nombreHospital = "";
        }

        try{
            idCiudad = hospital.Direccione.Calle.Ciudade.id;
        } catch(e) {
            idCiudad = 0;
        }

        try{
            nombreCiudad = hospital.Direccione.Calle.Ciudade.nombre;
        } catch(e) {
            nombreCiudad = "";
        }

        const recursosLindificados = {};
        for(let recurso of totalRecursos){
            recursosLindificados[recurso.nombre]= recurso.cantidad;
        }
        recursosLindificados['medicos'] = medicos;

        const reporte = 
        {
            "ReporteHospitalario": {
                "cuitHospital": CUIT,
                "createdAt": dateFormat(new Date(), "yyyy-mm-dd H:MM:ss"),
                "nombreHospital": nombreHospital,
                "idCiudad": idCiudad,
                "nombreCiudad": nombreCiudad,
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