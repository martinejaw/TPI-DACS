const request = require('request-promise')

class ConsultaController {
    constructor({ConsultaService, AsignacionService, DiagnosticoService}){
        this._consultaService = ConsultaService;
        this._asignacionService = AsignacionService;
        this._diagnosticoService = DiagnosticoService;
    }

    async getConsultas(req,res){
        await this._consultaService.getAll()
            .then(consultas => res.status(200).json(consultas))
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });
    }

    async getConsultaSinResponder(req,res){
        const { medicodni } = req.params;
        await this._consultaService.getSinResponder(medicodni)
            .then(consultas => res.status(200).json(consultas))
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });
    }

    async getConsultaRespondidas(req,res) {
    const { medicodni } = req.params;
        await this._consultaService.getRespondidas(medicodni)
            .then(consultas => res.status(200).json(consultas))
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });
    }

    async createConsulta(req, res) {
        await this._consultaService.create(req.body)
            .then(consultaCreated => res.status(201).json(consultaCreated))
            .catch(error => {
                res.status(400).json({msg: error.message});  
        });
    }

    async recibirConsultaId(req, res) {
        let consultasNuevas = req.body;
        for (const consulta of consultasNuevas){
            console.log("que paso aca",consulta);
            await this._asignacionService.asignarConsulta(consulta)
            .then(consultaAsignada => 
                {this._consultaService.create(consultaAsignada);})
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });  
        }
        res.sendStatus(200);
    }

    async recibirConsultaCompleta(req, res) {
        let consultasNuevas = req.body;
        /*for (const consulta of consultasNuevas){
            console.log("que paso aca",consulta);
            /*await this._asignacionService.asignarConsulta(consulta)
            .then(consultaAsignada => 
                {this._consultaService.create(consultaAsignada);})
            .catch(error => {
                res.status(400).json({msg: error.message});  
            }); 
        }*/ 
        res.status(200).json(consultasNuevas);
    }

    async diagnosticar(req, res) {
        //await this._diagnosticoService.diagnosticar(req.body, res);
        let consultaDiagnosticada = req.body;

        if(consultaDiagnosticada.diagnostico == null){
            res.status(400).json({msg: "Diagnostico nulo no permitido"});
        } else {
            // Guardo la consulta diagnosticada en mi API
            this._consultaService.update(consultaDiagnosticada.id, consultaDiagnosticada)
            .then(consultaDiagnosticada => res.status(201).json({msg: "Diagnosticacion Correcta"}))
            .catch(error => {  
                res.status(400).json({msg: error.message});  
            });
        }  
    }

    async obtenerConsulta(req, res){
        //AQUI SE HACE UN GET AL GRUPO DE PACIENTES
        const { id } = req.params;
        let consultasNuevas = [
  {
    "id": 123,
    "estadoDelFormulario": 1,
    "fechaDeCreacion": "2020-02-08T00:00:00",
    "paciente": {
      "apiUserId": null,
      "id": 5,
      "nombre": "Martin",
      "apellido": "Perez",
      "tipoDeDocumento": 0,
      "nroDeDocumento": "123123123",
      "fechaDeNacimiento": "2000-06-03T00:00:00",
      "domicilio": null,
      "telefono": "3624713319",
      "sexo": "Masculino",
      "correo": "martinp10@gmail.com"
    },
    "pacienteId": 1,
    "antecedenteEpidemiologicos1": {
      "id": 1,
      "tipoDeOcupacionDelPaciente": 3,
      "otroTipoDeOcupacion": "",
      "tieneVacunaAntiGripal": true,
      "fechaDeVacunacion": "2019-06-05T00:00:00",
      "fechaDeVencimientoDeLaVacuna": "2029-04-08T00:00:00",
      "estuvoEnUnLugarDeContagioFueraDelPaisPrevioASintomas": true,
      "paisEnQueEstuvo": "Peru",
      "ciudadDelPaisEnQueEstuvo": "Lima",
      "fechaDeLlegadaAlPaisEnQueEstuvo": "2020-01-01T00:00:00",
      "fechaDeSalidaDelPaisEnQueEstuvo": "0001-01-01T00:00:00",
      "tipoDeTransporteUtilizado": 1,
      "fechaDeIngresoAlPais": "2020-02-01T00:00:00",
      "compañiaDeTransporte": "Latam",
      "residioEnLugarAjenoASuDomicilioDentroDelPaisPrevioASintomas": true,
      "domicilioAlejoEnElQueResidio": null,
      "fechaDeLlegadaADomicilioAjeno": "2020-08-01T00:00:00",
      "fechaDeSalidaDelDomicilioAjeno": "2020-04-01T00:00:00"
    },
    "antecedenteEpidemiologicos1Id": 1,
    "antecedenteEpidemiologicos2": {
      "id": 1,
      "visitoCentroConCasosPositivosPrevioASintomas": false,
      "nombreDelCentroVisitado": "12 de octubre",
      "ciudadDelCentroVisitado": "Puerto Madryn",
      "fechaDeLaVisitaAlCentro": "2020-05-28T19:58:33.5045385",
      "contactoConAnimalesPrevioASintomas": true,
      "tipoDeAnimalesConContacto": 3,
      "otroTipoDeContactoConAnimales": "",
      "contactoConPersonasConIRPrevioASintomas": false,
      "tipoDeEntornoDeContacto": 1,
      "otroTipoDeEntornoDeContacto": "",
      "contactoConCasosProbablesOConfirmadosPrevioASintomas": false,
      "apellidoDelCaso": "Jhonson",
      "nombreDelCaso": "Maria",
      "dniDelCaso": "29132632",
      "paisDelCaso": "Argentina",
      "areaDelCaso": "Sur"
    },
    "antecedenteEpidemiologicos2Id": 1,
    "enfermedadesPreviasComorbilidades": {
      "id": 1,
      "presentaEnfermedadesComorbilidades": true,
      "inmunoSupresionCongenitaOAdquirida": false,
      "diabetes": false,
      "obesidad": false,
      "embarzo": false,
      "puerperio": false,
      "prematuridad": false,
      "semanasDePrematuridad": "0",
      "bajoPesoAlNacer": false,
      "cantidadDePesoAlNacer": "521g",
      "enfermedadNeurologica": false,
      "enfermedadHepatica": false,
      "enfermedadRenalCronica": true,
      "hipertensionArterial": false,
      "enfermedadOncologica": true,
      "bronquitisPrevia": false,
      "naC_Previa": false,
      "epoc": true,
      "asma": false,
      "tubercolosis": false,
      "fumador": false,
      "ningunaDelasAnteriores": false,
      "otras": false,
      "otrasDetalle": ""
    },
    "enfermedadesPreviasComorbilidadesId": 1,
    "signosYSintomas": {
      "id": 1,
      "fiebreMayorA38": false,
      "taquipnea_Disnea": false,
      "diarrea": false,
      "artralgias": false,
      "malestarEnGenerl": true,
      "tos": false,
      "vomitos": false,
      "dolorDeGarganta": false,
      "insuficienciaRespiratoria": false,
      "dolorAbdominal": false,
      "dolorToracico": true,
      "rechazoAlAlimento": true,
      "irritabilidadConfusion": false,
      "convulsiones": true,
      "otros": false,
      "otrosDetalle": ""
    },
    "signosYSintomasId": 1,
    "respuestaMedica": null
  },
  {
    "id": 2,
    "estadoDelFormulario": 1,
    "fechaDeCreacion": "2020-02-02T00:00:00",
    "paciente": {
      "apiUserId": null,
      "id": 2,
      "nombre": "Micaela",
      "apellido": "Urribarri",
      "tipoDeDocumento": 0,
      "nroDeDocumento": "76255",
      "fechaDeNacimiento": "1989-10-02T00:00:00",
      "domicilio": null,
      "telefono": "3624325188",
      "sexo": "Femenino",
      "correo": "micau@gmail.com"
    },
    "pacienteId": 2,
    "antecedenteEpidemiologicos1": {
      "id": 2,
      "tipoDeOcupacionDelPaciente": 2,
      "otroTipoDeOcupacion": "",
      "tieneVacunaAntiGripal": true,
      "fechaDeVacunacion": "2018-03-08T00:00:00",
      "fechaDeVencimientoDeLaVacuna": "2019-03-08T00:00:00",
      "estuvoEnUnLugarDeContagioFueraDelPaisPrevioASintomas": true,
      "paisEnQueEstuvo": "EEUU",
      "ciudadDelPaisEnQueEstuvo": "Miami",
      "fechaDeLlegadaAlPaisEnQueEstuvo": "2019-01-12T00:00:00",
      "fechaDeSalidaDelPaisEnQueEstuvo": "0001-01-01T00:00:00",
      "tipoDeTransporteUtilizado": 1,
      "fechaDeIngresoAlPais": "2019-02-12T00:00:00",
      "compañiaDeTransporte": "American Yanke EEUU",
      "residioEnLugarAjenoASuDomicilioDentroDelPaisPrevioASintomas": true,
      "domicilioAlejoEnElQueResidio": null,
      "fechaDeLlegadaADomicilioAjeno": "2019-08-12T00:00:00",
      "fechaDeSalidaDelDomicilioAjeno": "2019-08-12T00:00:00"
    },
    "antecedenteEpidemiologicos1Id": 2,
    "antecedenteEpidemiologicos2": {
      "id": 2,
      "visitoCentroConCasosPositivosPrevioASintomas": false,
      "nombreDelCentroVisitado": "Dr Richiardi",
      "ciudadDelCentroVisitado": "La Plata",
      "fechaDeLaVisitaAlCentro": "2020-05-28T19:58:34.6919747",
      "contactoConAnimalesPrevioASintomas": true,
      "tipoDeAnimalesConContacto": 2,
      "otroTipoDeContactoConAnimales": "",
      "contactoConPersonasConIRPrevioASintomas": true,
      "tipoDeEntornoDeContacto": 2,
      "otroTipoDeEntornoDeContacto": "",
      "contactoConCasosProbablesOConfirmadosPrevioASintomas": true,
      "apellidoDelCaso": "Bueno",
      "nombreDelCaso": "Carlos",
      "dniDelCaso": "33124311",
      "paisDelCaso": "Argentina",
      "areaDelCaso": "Centro"
    },
    "antecedenteEpidemiologicos2Id": 2,
    "enfermedadesPreviasComorbilidades": {
      "id": 2,
      "presentaEnfermedadesComorbilidades": true,
      "inmunoSupresionCongenitaOAdquirida": false,
      "diabetes": true,
      "obesidad": false,
      "embarzo": true,
      "puerperio": false,
      "prematuridad": false,
      "semanasDePrematuridad": "400g",
      "bajoPesoAlNacer": false,
      "cantidadDePesoAlNacer": "650g",
      "enfermedadNeurologica": false,
      "enfermedadHepatica": false,
      "enfermedadRenalCronica": false,
      "hipertensionArterial": false,
      "enfermedadOncologica": false,
      "bronquitisPrevia": false,
      "naC_Previa": false,
      "epoc": false,
      "asma": false,
      "tubercolosis": false,
      "fumador": false,
      "ningunaDelasAnteriores": false,
      "otras": false,
      "otrasDetalle": ""
    },
    "enfermedadesPreviasComorbilidadesId": 2,
    "signosYSintomas": {
      "id": 2,
      "fiebreMayorA38": true,
      "taquipnea_Disnea": false,
      "diarrea": false,
      "artralgias": true,
      "malestarEnGenerl": false,
      "tos": true,
      "vomitos": true,
      "dolorDeGarganta": false,
      "insuficienciaRespiratoria": false,
      "dolorAbdominal": true,
      "dolorToracico": false,
      "rechazoAlAlimento": false,
      "irritabilidadConfusion": false,
      "convulsiones": false,
      "otros": false,
      "otrosDetalle": ""
    },
    "signosYSintomasId": 2,
    "respuestaMedica": null
  }
];
        //Aca debo llamar a recibirConsultaCompleta que es la ruta del paciente que me tira las consultas completas.
        for (const consulta of consultasNuevas){
            if (consulta.id === Number(id)) {
                const consultaSolicitada = consulta;
                console.log("esto es lo que quiero",consultaSolicitada);
                res.status(200).json(consultaSolicitada);
            }
            //console.log("que paso aca",consulta);
            /*await this._asignacionService.asignarConsulta(consulta)
            .then(consultaAsignada => 
                {this._consultaService.create(consultaAsignada);})
            .catch(error => {
                res.status(400).json({msg: error.message});  
            });*/  
        }
        //res.status(200).json(consultaSolicitada);
    }
    async obtenerConsultaDni(req, res){
      //AQUI SE HACE UN GET AL GRUPO DE PACIENTES
      const { dni } = req.params;
      console.log("asdasdasdasdasdasdasdasdasdasdasdasdasd",dni);
      let consultasNuevas = [
{
  "id": 123,
  "estadoDelFormulario": 1,
  "fechaDeCreacion": "2020-02-08T00:00:00",
  "paciente": {
    "apiUserId": null,
    "id": 5,
    "nombre": "Martin",
    "apellido": "Perez",
    "tipoDeDocumento": 0,
    "nroDeDocumento": "28478409",
    "fechaDeNacimiento": "2000-06-03T00:00:00",
    "domicilio": null,
    "telefono": "3624713319",
    "sexo": "Masculino",
    "correo": "martinp10@gmail.com"
  },
  "pacienteId": 1,
  "antecedenteEpidemiologicos1": {
    "id": 1,
    "tipoDeOcupacionDelPaciente": 3,
    "otroTipoDeOcupacion": "",
    "tieneVacunaAntiGripal": true,
    "fechaDeVacunacion": "2019-06-05T00:00:00",
    "fechaDeVencimientoDeLaVacuna": "2029-04-08T00:00:00",
    "estuvoEnUnLugarDeContagioFueraDelPaisPrevioASintomas": true,
    "paisEnQueEstuvo": "Peru",
    "ciudadDelPaisEnQueEstuvo": "Lima",
    "fechaDeLlegadaAlPaisEnQueEstuvo": "2020-01-01T00:00:00",
    "fechaDeSalidaDelPaisEnQueEstuvo": "0001-01-01T00:00:00",
    "tipoDeTransporteUtilizado": 1,
    "fechaDeIngresoAlPais": "2020-02-01T00:00:00",
    "compañiaDeTransporte": "Latam",
    "residioEnLugarAjenoASuDomicilioDentroDelPaisPrevioASintomas": true,
    "domicilioAlejoEnElQueResidio": null,
    "fechaDeLlegadaADomicilioAjeno": "2020-08-01T00:00:00",
    "fechaDeSalidaDelDomicilioAjeno": "2020-04-01T00:00:00"
  },
  "antecedenteEpidemiologicos1Id": 1,
  "antecedenteEpidemiologicos2": {
    "id": 1,
    "visitoCentroConCasosPositivosPrevioASintomas": false,
    "nombreDelCentroVisitado": "12 de octubre",
    "ciudadDelCentroVisitado": "Puerto Madryn",
    "fechaDeLaVisitaAlCentro": "2020-05-28T19:58:33.5045385",
    "contactoConAnimalesPrevioASintomas": true,
    "tipoDeAnimalesConContacto": 3,
    "otroTipoDeContactoConAnimales": "",
    "contactoConPersonasConIRPrevioASintomas": false,
    "tipoDeEntornoDeContacto": 1,
    "otroTipoDeEntornoDeContacto": "",
    "contactoConCasosProbablesOConfirmadosPrevioASintomas": false,
    "apellidoDelCaso": "Jhonson",
    "nombreDelCaso": "Maria",
    "dniDelCaso": "29132632",
    "paisDelCaso": "Argentina",
    "areaDelCaso": "Sur"
  },
  "antecedenteEpidemiologicos2Id": 1,
  "enfermedadesPreviasComorbilidades": {
    "id": 1,
    "presentaEnfermedadesComorbilidades": true,
    "inmunoSupresionCongenitaOAdquirida": false,
    "diabetes": false,
    "obesidad": false,
    "embarzo": false,
    "puerperio": false,
    "prematuridad": false,
    "semanasDePrematuridad": "0",
    "bajoPesoAlNacer": false,
    "cantidadDePesoAlNacer": "521g",
    "enfermedadNeurologica": false,
    "enfermedadHepatica": false,
    "enfermedadRenalCronica": true,
    "hipertensionArterial": false,
    "enfermedadOncologica": true,
    "bronquitisPrevia": false,
    "naC_Previa": false,
    "epoc": true,
    "asma": false,
    "tubercolosis": false,
    "fumador": false,
    "ningunaDelasAnteriores": false,
    "otras": false,
    "otrasDetalle": ""
  },
  "enfermedadesPreviasComorbilidadesId": 1,
  "signosYSintomas": {
    "id": 1,
    "fiebreMayorA38": false,
    "taquipnea_Disnea": false,
    "diarrea": false,
    "artralgias": false,
    "malestarEnGenerl": true,
    "tos": false,
    "vomitos": false,
    "dolorDeGarganta": false,
    "insuficienciaRespiratoria": false,
    "dolorAbdominal": false,
    "dolorToracico": true,
    "rechazoAlAlimento": true,
    "irritabilidadConfusion": false,
    "convulsiones": true,
    "otros": false,
    "otrosDetalle": ""
  },
  "signosYSintomasId": 1,
  "respuestaMedica": null
},
{
  "id": 2,
  "estadoDelFormulario": 1,
  "fechaDeCreacion": "2020-02-02T00:00:00",
  "paciente": {
    "apiUserId": null,
    "id": 2,
    "nombre": "Micaela",
    "apellido": "Urribarri",
    "tipoDeDocumento": 0,
    "nroDeDocumento": "76255",
    "fechaDeNacimiento": "1989-10-02T00:00:00",
    "domicilio": null,
    "telefono": "3624325188",
    "sexo": "Femenino",
    "correo": "micau@gmail.com"
  },
  "pacienteId": 2,
  "antecedenteEpidemiologicos1": {
    "id": 2,
    "tipoDeOcupacionDelPaciente": 2,
    "otroTipoDeOcupacion": "",
    "tieneVacunaAntiGripal": true,
    "fechaDeVacunacion": "2018-03-08T00:00:00",
    "fechaDeVencimientoDeLaVacuna": "2019-03-08T00:00:00",
    "estuvoEnUnLugarDeContagioFueraDelPaisPrevioASintomas": true,
    "paisEnQueEstuvo": "EEUU",
    "ciudadDelPaisEnQueEstuvo": "Miami",
    "fechaDeLlegadaAlPaisEnQueEstuvo": "2019-01-12T00:00:00",
    "fechaDeSalidaDelPaisEnQueEstuvo": "0001-01-01T00:00:00",
    "tipoDeTransporteUtilizado": 1,
    "fechaDeIngresoAlPais": "2019-02-12T00:00:00",
    "compañiaDeTransporte": "American Yanke EEUU",
    "residioEnLugarAjenoASuDomicilioDentroDelPaisPrevioASintomas": true,
    "domicilioAlejoEnElQueResidio": null,
    "fechaDeLlegadaADomicilioAjeno": "2019-08-12T00:00:00",
    "fechaDeSalidaDelDomicilioAjeno": "2019-08-12T00:00:00"
  },
  "antecedenteEpidemiologicos1Id": 2,
  "antecedenteEpidemiologicos2": {
    "id": 2,
    "visitoCentroConCasosPositivosPrevioASintomas": false,
    "nombreDelCentroVisitado": "Dr Richiardi",
    "ciudadDelCentroVisitado": "La Plata",
    "fechaDeLaVisitaAlCentro": "2020-05-28T19:58:34.6919747",
    "contactoConAnimalesPrevioASintomas": true,
    "tipoDeAnimalesConContacto": 2,
    "otroTipoDeContactoConAnimales": "",
    "contactoConPersonasConIRPrevioASintomas": true,
    "tipoDeEntornoDeContacto": 2,
    "otroTipoDeEntornoDeContacto": "",
    "contactoConCasosProbablesOConfirmadosPrevioASintomas": true,
    "apellidoDelCaso": "Bueno",
    "nombreDelCaso": "Carlos",
    "dniDelCaso": "33124311",
    "paisDelCaso": "Argentina",
    "areaDelCaso": "Centro"
  },
  "antecedenteEpidemiologicos2Id": 2,
  "enfermedadesPreviasComorbilidades": {
    "id": 2,
    "presentaEnfermedadesComorbilidades": true,
    "inmunoSupresionCongenitaOAdquirida": false,
    "diabetes": true,
    "obesidad": false,
    "embarzo": true,
    "puerperio": false,
    "prematuridad": false,
    "semanasDePrematuridad": "400g",
    "bajoPesoAlNacer": false,
    "cantidadDePesoAlNacer": "650g",
    "enfermedadNeurologica": false,
    "enfermedadHepatica": false,
    "enfermedadRenalCronica": false,
    "hipertensionArterial": false,
    "enfermedadOncologica": false,
    "bronquitisPrevia": false,
    "naC_Previa": false,
    "epoc": false,
    "asma": false,
    "tubercolosis": false,
    "fumador": false,
    "ningunaDelasAnteriores": false,
    "otras": false,
    "otrasDetalle": ""
  },
  "enfermedadesPreviasComorbilidadesId": 2,
  "signosYSintomas": {
    "id": 2,
    "fiebreMayorA38": true,
    "taquipnea_Disnea": false,
    "diarrea": false,
    "artralgias": true,
    "malestarEnGenerl": false,
    "tos": true,
    "vomitos": true,
    "dolorDeGarganta": false,
    "insuficienciaRespiratoria": false,
    "dolorAbdominal": true,
    "dolorToracico": false,
    "rechazoAlAlimento": false,
    "irritabilidadConfusion": false,
    "convulsiones": false,
    "otros": false,
    "otrosDetalle": ""
  },
  "signosYSintomasId": 2,
  "respuestaMedica": null
}
];
      //Aca debo llamar a recibirConsultaCompleta que es la ruta del paciente que me tira las consultas completas.
      for (const consulta of consultasNuevas){
        console.log("pqqpqpqppqppqpqppppqppqpqppqp",consulta.paciente.nroDeDocumento);
          if (Number(consulta.paciente.nroDeDocumento) === Number(dni)) {
              const consultaSolicitada = consulta;
              console.log("esto es lo que quiero",consultaSolicitada);
              res.status(200).json(consultaSolicitada);
          }
          //console.log("que paso aca",consulta);
          /*await this._asignacionService.asignarConsulta(consulta)
          .then(consultaAsignada => 
              {this._consultaService.create(consultaAsignada);})
          .catch(error => {
              res.status(400).json({msg: error.message});  
          });*/  
      }
      //res.status(200).json(consultaSolicitada);
  }


}

module.exports = ConsultaController;
