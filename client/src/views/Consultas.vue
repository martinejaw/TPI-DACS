<template>
  <div>
    <Form></Form>
    <v-card class="w3-container w3-teal">
      <v-card-title>
        Consultas
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table class="tabla" :headers="headers"
      :items="consultas" :search="search"></v-data-table>
    </v-card>

    <hr class="my-2" />
    <!--div class="jumbotron jumbotron-fluid"-->
    <div class="w3-container w3-teal">
      <h1 class="display-4">CONSULTAS</h1>
      <p class="lead">Consultas realizadas por personas con posibles sintomas de covid-19</p>
      <hr class="my-4" />

      <div class="btn-group d-flex" role="group">
        <v-button class="btn btn-outline-secondary w-100"
        v-on:click="consultaSeleccionada=true"
        v-bind:class='{ "success": consultaSeleccionada}'>Sin Contestar</v-button>
        <v-button class="btn btn-outline-secondary w-100"
        v-on:click="consultaSeleccionada=false"
        v-bind:class='{ "success": !consultaSeleccionada}'>Contestadas</v-button>
      </div>

      <hr class="my-4" />
      <!-- inicio de la tabla de datos -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody v-if="consultaSeleccionada">
          <tr v-for="consulta in consultasSinResponder" v-bind:key="consulta">
            <th scope="row">{{ consulta.id }}</th>
            <td>{{ consulta.nombre }}</td>
            <td>{{ consulta.apellido }}</td>
            <td>{{ consulta.fecha }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr v-for="consulta in consultas" v-bind:key="consulta">
            <th scope="row">{{ consulta.id }}</th>
            <td>{{ consulta.nombre }}</td>
            <td>{{ consulta.apellido }}</td>
            <td>{{ consulta.fecha }}</td>
          </tr>
        </tbody>
      </table>
      <!-- Fin de la tabla de datos -->
    </div>
  </div>
  <!--/div-->
</template>

<script>
import axios from 'axios';
import cfg from '../config/cfg';
import Form from '../components/Form.vue';

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
    consultas: [
      { id: 12, nombre: 'Exequiel', apellido: 'Fraca' },
      {
        id: 1, dni: 2121, nombre: 'Exequiel', apellido: 'Abogado',
      }],
    search: '',
    consultaSeleccionada: true,
    consultasSinResponder: [],
  }),

  mounted() {
    this.consSinRespoder();
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
  },
  components: {
    Form,
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
