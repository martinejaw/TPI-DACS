<template>
<div>
<hr class="my-2">
  <!--div class="jumbotron jumbotron-fluid"-->
  <div class="w3-container w3-teal">
    <h1 class="display-3">CONSULTA ID: {{ consultas.id}} </h1>
    <p ><strong>Estado: </strong>
      <span class="badge bg-warning">Sin contestar</span>
      <span class="badge bg-success">Contestado</span>
    </p>
    <p class="text-right">Fecha de creación: {{ consultas.fech}} </p>
    <hr class="my-4">
    <h3>Nombre y Apellido: ape,nom</h3>
    <h6>TipoDoc: {{ consulta.PacienteDni }} </h6>
    <h6>Fecha de Nacimiento:{{consulta.fechaDeNacimiento}}</h6>
    <h6>Sexo:{{consulta.sexo}}</h6>
    <h6>Domicilio:{{consulta.domicilio}}</h6>
    <hr class="my-2">
    <h3>Contactos</h3>
    <h6>Teléfono: {{consulta.telefono}} </h6>
    <h6>Correo Electrónico: {{consulta.correo}} </h6>
    <hr class="my-2">
    <h3>Sintomas y signos</h3>
    <ul><li>sintomaA</li>
      <li>sintomaB</li>
      <li>sintomaC</li>
    </ul>
    <hr class="my-2">
    <h3>Enfermedades previas</h3>
    <h6>Peso al nacer: peso}}g </h6>
    <h6>Semana de pematuridad: semana}} </h6>
    <ul>
      <li>enmerfedadA}}</li>
      <li>enfermedadB}}</li>
      <li>enfermedadC}}</li>
    </ul>
    <hr class="my-2">
    <h3>Antecedente epidemiologicos</h3>
    <h6>Tipo de ocupación: ni idea que es</h6>
    <h6>Vacuna Anti Gripal: Posee/NoPosee</h6>
    <ul>
      <li>Desde Fecini hasta fecven</li>
    </ul>
    <h6>Estuvo en Lugar de Contagio fuera del país: Si/No}} </h6>
    <ol>
      <li>Ciudad: Ciudad}} Pais:Pais}} Desde Fecini}} hasta fecven}}</li>
      <li>Ciudad: Ciudad}} Pais:Pais}} Desde Fecini}} hasta fecven}}</li>
    </ol>
    <h6>Estuvo en Centro con Caso COVID dentro del país: Si/No}} </h6>
    <ol>
      <li>Ciudad: Ciudad}} Centro:Nombrecentro}} Fecha de visita Fecha}}</li>
      <li>Ciudad: Ciudad}} Centro:Nombrecentro}} Fecha de visita Fecha}}</li>
    </ol>
    <h6>Residio dentro del país previo a Sintomas: Si/No}} </h6>
    <ol>
      <li>Domicilio: Desde {{Fecini}} hasta {{fecven}}</li>
      <li>Domicilio: {{Domicilio}} Desde {{Fecini}} hasta {{fecven}}</li>
    </ol>
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
  name: 'Consultas',
  props: ['consulta'],
  data: () => ({
    errorBool: false,
    error: '',
  }),
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
