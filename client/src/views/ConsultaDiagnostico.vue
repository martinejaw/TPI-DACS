<template>
<div>
<hr class="my-2">
  <!--div class="jumbotron jumbotron-fluid"-->
  <div class="w3-container w3-teal">
    <h1 class="display-3">CONSULTA ID: {{consulta.id}} </h1>
    <h4 v-if="resu === ''" style="color:#FF0000">
      <strong>Información de la consulta no recuperada</strong></h4>
    <p ><strong>Estado: </strong>
      <span v-if= "consulta.diagnostico === null" class="badge bg-warning">Sin contestar</span>
      <span v-if= "consulta.diagnostico !== null" class="badge bg-success">Contestado</span>
    </p>
    <p class="text-right">Fecha de creación: {{consultaCompleta.fechaDeCreacion}} </p>
    <hr class="my-4">
    <h3>Nombre y Apellido:
    {{consultaCompleta.paciente.apellido}}, {{consultaCompleta.paciente.nombre}}</h3>
    <h6>TipoDoc: {{consulta.dni}} </h6>
    <h6>Fecha de Nacimiento:
    {{consultaCompleta.paciente.fechaDeNacimiento}}</h6>
    <h6>Sexo:{{consultaCompleta.paciente.sexo}}</h6>
    <h6>Domicilio:{{consultaCompleta.paciente.domicilio}}</h6>
    <hr class="my-2">
    <h3>Contactos</h3>
    <h6>Teléfono: {{consultaCompleta.paciente.telefono}} </h6>
    <h6>Correo electrónico: {{consultaCompleta.paciente.correo}} </h6>
    <hr class="my-2">
    <h3>Sintomas y signos</h3>
    <ul>
    <tr v-for="(value,name) in consultaCompleta.signosYSintomas" :key="name">
      <li v-if="value !== '' && name !== 'id' && value === true ">{{name}}: Si</li>
    </tr>
    </ul>
    <hr class="my-2">
    <h3>Enfermedades previas</h3>
    <ul>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      presentaEnfermedadesComorbilidades === true">Enfermedades Comorbilidades: Si</li>
      <li v-else>Enfermedades Comorbilidades: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      inmunoSupresionCongenitaOAdquirida === true">
      Inmuno a supresiones congenita o adquirida: Si</li>
      <li v-else>Inmuno a supresiones congenita o adquirida: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      diabetes === true">Diabetes: Si</li>
      <li v-else>Diabetes: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      obesidad === true">Obesidad: Si</li>
      <li v-else>Obesidad: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      embarzo === true">Embarazo: Si</li>
      <li v-else>Embarazo: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      puerperio === true">Puerperio: Si</li>
      <li v-else>Puerperio: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      prematuridad === true">Semana de pematuridad:
      {{consultaCompleta.enfermedadesPreviasComorbilidades.semanasDePrematuridad}}
      semanas</li>
      <li v-else>Prematuridad: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      bajoPesoAlNacer === true">Bajo peso al nacer:
      {{consultaCompleta.enfermedadesPreviasComorbilidades.cantidadDePesoAlNacer}}</li>
      <li v-else>Bajo peso al nacer: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      enfermedadNeurologica === true">Enfermedades Neurologica: Si</li>
      <li v-else>Enfermedades Neurologica: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      enfermedadHepatica === true">Enfermedades Hepatica: Si</li>
      <li v-else>Enfermedades Hepatica: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      enfermedadRenalCronica === true">Enfermedades Renal cronica: Si</li>
      <li v-else>Enfermedades Renal cronica: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      hipertensionArterial === true">Hipertension arterial: Si</li>
      <li v-else>Hipertension arterial: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      enfermedadOncologica === true">Enfermedades Oncologica: Si</li>
      <li v-else>Enfermedades Oncologica: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      bronquitisPrevia === true">Bronquitis Previa: Si</li>
      <li v-else>Bronquitis Previa: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      naC_Previa === true">Nac Previa: Si</li>
      <li v-else>Nac Previa: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      epoc === true">Epoc: Si</li>
      <li v-else>Epoc: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      asma === true">Asma: Si</li>
      <li v-else>Asma: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      tubercolosis === true">Tubercolosis: Si</li>
      <li v-else>Tubercolosis: No</li>
      <li v-if="consultaCompleta.enfermedadesPreviasComorbilidades.
      fumador === true">Fumador: Si</li>
      <li v-else>Fumador: No</li>
    </ul>
    <hr class="my-2">
    <h3>Antecedente epidemiologicos</h3>
    <h6 v-if="consultaCompleta.antecedenteEpidemiologicos1.tieneVacunaAntiGripal
      === true">Vacuna Anti Gripal: Posee</h6>
    <h6 v-else>Vacuna Anti Gripal: No Posee</h6>
    <ul>
      <li>Desde: {{consultaCompleta.antecedenteEpidemiologicos1.fechaDeVacunacion}}</li>
      <li>Hasta: {{consultaCompleta.antecedenteEpidemiologicos1.fechaDeVencimientoDeLaVacuna}}</li>
    </ul>
    <h6 v-if="consultaCompleta.antecedenteEpidemiologicos1.
    estuvoEnUnLugarDeContagioFueraDelPaisPrevioASintomas === true">
    Estuvo en Lugar de Contagio fuera del país: Si
      <ul>
        <li>Ciudad: {{consultaCompleta.antecedenteEpidemiologicos1.ciudadDelPaisEnQueEstuvo}} </li>
        <li>Pais: {{consultaCompleta.antecedenteEpidemiologicos1.paisEnQueEstuvo}}</li>
        <li>Desde: {{consultaCompleta.antecedenteEpidemiologicos1.
        fechaDeLlegadaAlPaisEnQueEstuvo}}</li>
        <li>Hasta: {{consultaCompleta.antecedenteEpidemiologicos1.
        fechaDeSalidaDelPaisEnQueEstuvo}}</li>
      </ul>
    </h6>
    <h6 v-else>Estuvo en Lugar de Contagio fuera del país: No </h6>
    <h6 v-if="consultaCompleta.antecedenteEpidemiologicos2.
    visitoCentroConCasosPositivosPrevioASintomas === true">
    Estuvo en Centro con Caso COVID dentro del país: Si
      <ul>
        <li>Centro: {{consultaCompleta.antecedenteEpidemiologicos2.nombreDelCentroVisitado}} </li>
        <li>Ciudad: {{consultaCompleta.antecedenteEpidemiologicos2.ciudadDelCentroVisitado}}</li>
        <li>Fecha de visita: {{consultaCompleta.antecedenteEpidemiologicos2.
        fechaDeLaVisitaAlCentro}}</li>
      </ul>
    </h6>
    <h6 v-else>Estuvo en Centro con Caso COVID dentro del país: No</h6>
    <h6 v-if="consultaCompleta.antecedenteEpidemiologicos1.
    residioEnLugarAjenoASuDomicilioDentroDelPaisPrevioASintomas === true">
    Residio dentro del país previo a Sintomas: Si
      <ul>
        <li>Domicilio: {{consultaCompleta.antecedenteEpidemiologicos1.
        domicilioAlejoEnElQueResidio}} </li>
        <li>Desde: {{consultaCompleta.antecedenteEpidemiologicos1.
        fechaDeLlegadaADomicilioAjeno}}</li>
        <li>Hasta: {{consultaCompleta.antecedenteEpidemiologicos1.
        fechaDeSalidaDelDomicilioAjeno}}</li>
      </ul>
    </h6>
    <h6 v-else>Residio dentro del país previo a Sintomas: No</h6>
    <hr class="my-4">
    <h1>Diagnóstico</h1>
    <textarea v-model="diagnostico"
    class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    <hr class="my-1">
    <div class="text-right">
      <button class="btn btn-primary" @click="agregarDiagnostico()"> Confirmar diagnóstico</button>
    </div>
  </div>
  <!--Form error-->
    <v-row justify="center">
      <v-dialog v-model="errorBool" persistent max-width="500">
        <v-card>
          <v-card-title class="headline"> {{ error }} </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1"
            text @click="errorBool = false">Enterado</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</div>
</template>

<script>
import axios from 'axios';
import cfg from '../config/cfg';

export default {
  name: 'ConsultaDiagnostico',
  props: ['consulta'],
  data: () => ({
    errorBool: false,
    error: '',
    resu: '',
    consultaCompleta: {
      fechaDeCreacion: '',
      paciente: '',
      antecedenteEpidemiologicos1: '',
      antecedenteEpidemiologicos2: '',
      enfermedadesPreviasComorbilidades: '',
      signosYSintomas: '',
    },
  }),
  mounted() {
    this.obtenerConsulta();
  },
  methods: {
    agregarDiagnostico() {
      axios.put(cfg.Diagnostico_URL, { id: this.consulta.id, diagnostico: this.diagnostico })
        .then((result) => {
          this.consultasSinResponder = result.data;
          this.$router.push('consultas');
        })
        .catch((error) => {
          this.error = error.message;
          this.errorBool = true;
        });
    },
    obtenerConsulta() {
      const url = `${cfg.Consultas_URL}/obtenerConsulta/${this.consulta.id}`;
      axios.get(url)
        .then((result) => {
          this.consultaCompleta = result.data;
          this.resu = result.data;
        })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
    },
  },
};
</script>

<style>

body{
/*background-image: url('../centrohp.png');*/
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
background-size: contain;
}
.navbar{
background-color: #efd199;
}
.w3-container{
background-color:#ffedce;
max-width: 1200px;
margin: auto;
padding-left: 20px;
padding-right: 20px;
padding-top: 20px;
padding-bottom: 20px;
text-align: left;
}
</style>
