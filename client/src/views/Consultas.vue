<template>
  <div>
    <hr class="my-2" />
    <!--div class="jumbotron jumbotron-fluid"-->
    <div class="w3-container w3-teal">
      <h1 class="display-4">CONSULTAS</h1>
      <p class="lead">Consultas realizadas por personas con posibles sintomas de covid-19</p>
      <hr class="my-4" />

      <div class="btn-group d-flex" role="group">
        <v-button
          class="btn btn-outline-secondary w-100"
          v-on:click="consultaSeleccionada=true"
          v-bind:class='{ "success": consultaSeleccionada}'
        >Sin Contestar</v-button>
        <v-button
          class="btn btn-outline-secondary w-100"
          v-on:click="consultaSeleccionada=false"
          v-bind:class='{ "success": !consultaSeleccionada}'
        >Contestadas</v-button>
      </div>

      <hr class="my-4" />
      <!-- inicio de la tabla de datos -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID Consulta</th>
            <th scope="col">DNI Paciente</th>
            <th scope="col">Fecha</th>
            <th scope="col">Diagnostico</th>
          </tr>
        </thead>
        <tbody v-if="consultaSeleccionada">
          <tr v-for="consulta in consultasSinResponder" v-bind:key="consulta">
            <th scope="row">{{ consulta.id }}</th>
            <td>{{ consulta.PacienteDni }}</td>
            <td>{{ consulta.MedicoDni }}</td>
            <router-link :to='{name: "ConsultaDiagnostico", params: { consulta } }'>
              <v-btn
                class="btn btn-outline-success my-2 my-sm-0 col-md-8"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >Diagnosticar</v-btn>
            </router-link>
          </tr>
        </tbody>
        <tbody v-else>
          <tr v-for="consulta in consultasRespondidas" v-bind:key="consulta">
            <th scope="row">{{ consulta.id }}</th>
            <td>{{ consulta.PacienteDni }}</td>
            <td>{{ consulta.fecha }}</td>
            <v-btn
              class="btn btn-outline-success my-2 my-sm-0 col-md-8"
              color="primary"
              dark
              v-bind="attrs"
              @click="mostrarDiag = true; verC = consulta.diagnostico"
              v-on="on"
            >Mostrar</v-btn>
          </tr>
        </tbody>
      </table>
      <!-- Fin de la tabla de datos -->
    </div>
    <!--Form Mostrar diagnostico-->
    <v-row justify="center">
      <v-dialog v-model="mostrarDiag" persistent max-width="500">
        <v-card>
          <v-card-title class="headline">{{ verC }}</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="mostrarDiag = false">Enterado</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
  <!--/div-->
</template>

<script>
import axios from 'axios';
import cfg from '../config/cfg';

export default {
  name: 'Consultas',
  data: () => ({
    headers: [{
      text: 'ID',
      align: 'start',
      value: 'id',
    },
    { text: 'Nombre', value: 'nombre' },
    { text: 'Apellido', value: 'apellido' }],
    consultasRespondidas: [],
    id: 0,
    PacienteDni: 0,
    MedicoDni: 0,
    search: '',
    consultaSeleccionada: true,
    consultasSinResponder: [],
    mostrarDiag: false,
    verC: '',
  }),

  mounted() {
    this.consSinRespoder();
    this.consRespodidas();
  },

  methods: {
    consSinRespoder() {
      const url = `${cfg.ConsultasSinResponder_URL}/${this.$store.state.dni}`;
      axios.get(url)
        .then((result) => {
          this.consultasSinResponder = result.data;
        })
        .catch((error) => { this.error = error.message; });
    },
    consRespodidas() {
      const url = `${cfg.ConsultasRespondidas_URL}/${this.$store.state.dni}`;
      axios.get(url)
        .then((result) => {
          this.consultasRespondidas = result.data;
        })
        .catch((error) => { this.error = error.message; });
    },
  },
};
</script>

<style>
body {
  background-image: url("./image/centrohp.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: contain;
}
.navbar {
  background-color: #efd199;
}
.w3-container {
  background-color: #ffedce;
  max-width: 1200px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
