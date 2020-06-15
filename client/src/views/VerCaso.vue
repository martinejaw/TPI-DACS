<template>
<div>
<hr class="my-2">
  <!--div class="jumbotron jumbotron-fluid"-->
        <div class="w3-container w3-teal">
          <div class="row">
            <div class="col-md-6 mb-2">
              <h1 class="display-3">CASO ID: {{ caso.id }} </h1>
              <h6 class="lead">Detalle del caso</h6>
              <h6 class="lead"><strong>DNI: </strong> 37973754 </h6>
              <h6 class="lead"><strong>Fecha inicio: </strong>09/05/2020 </h6>
              <div>
                <h6>
                  <strong>Estado: </strong>
                  <span class="badge bg-primary"></span>
                  <span class="badge bg-info"></span>
                  <span class="badge bg-warning"></span>
                  <span class="badge bg-success"> {{ caso.estado }} </span>
                  <button class="btn btn-outline-primary btn-sm"
                   type="submit"> Modificar Estado</button>
                </h6>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card example-1 scrollbar-ripe-malinka">
                <div class="card-body">
                  <h4 id="section1"><strong>Enfermedades Previas</strong></h4>
                  <ul class="list-group">
                    <li class="list-group-item">Diabetes</li>
                    <li class="list-group-item">Enfermedad x</li>
                    <li class="list-group-item">Enfermedad y</li>
                    <li class="list-group-item">Enfermedad z</li>
                    <li class="list-group-item">Asma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- inicio de la tabla de datos -->
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="card example-1 scrollbar-ripe-malinka">
                <div class="card-body">
                  <h4 id="section1"><strong>Partes Médicos</strong></h4>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Estado vital</th>
                        <th scope="col">Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="parte in partesMedicos" v-bind:key="parte">
                        <th scope="row">1</th>
                        <td> {{ parte.id }} </td>
                        <td> {{ parte.estadoVital }} </td>
                        <td> {{ parte.fecha }} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <hr class="my-2">
              <div class="text-right">
                <button class="btn btn-outline-primary" type="submit"> Agregar Parte Médico</button>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card example-1 scrollbar-ripe-malinka">
                <div class="card-body">
                  <h4 id="section1"><strong>Pruebas</strong></h4>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Fecha Prueba</th>
                        <th scope="col">Fecha Resultado</th>
                        <th scope="col">Resultado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="prueba in pruebas" v-bind:key="prueba">
                        <th scope="row">1</th>
                        <td> {{ prueba.id }} </td>
                        <td> {{ prueba.fecha }} </td>
                        <td v-if="prueba.fechaResultado != null"> {{ prueba.fechaResultado }} </td>
                        <td v-else> Sin resultado </td>
                        <td v-if="prueba.fechaResultado == null"> Sin resultado </td>
                        <td v-else-if="prueba.resultado"> Positivo </td>
                        <td v-else> Negativo </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <hr class="my-2">
              <div class="text-right">
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="btn btn-outline-primary"
                      v-bind="attrs"
                      v-on="on"
                      > Agregar Prueba</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">¿Desea agregar una Nueva Prueba?</span>
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
                      <v-btn color="blue darken-1" text @click="dialog = false;
                      altaPrueba()">Agregar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </div>
          </div>
        </div>
        <!--Form error-->
    <v-row justify="center">
      <v-dialog v-model="errorBool" persistent max-width="500">
        <v-card>
          <v-card-title class="headline"> {{ error }} </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="errorBool = false">Enterado</v-btn>
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
  name: 'Caso',
  props: ['caso'],
  data: () => ({
    partesMedicos: [],
    pruebas: [],
    dialog: false,
    estado: '',
    errorBool: false,
  }),
  mounted() {
    this.obtenerPartes();
    this.obtenerPruebas();
  },
  methods: {
    altaParte() {
      const url = `${cfg.PartesMedicos_URL}`;
      axios.post(url, { estado: this.estado, PacienteDni: this.dni, MedicoDni: 4100325 })
        .then((result) => {
          if (result.status === 200) {
            console.log('Error en el alta');
            this.error = result.data.msg;
            this.errorBool = true;
          } else {
            console.log('Caso cargado correctamente');
            this.actualizarCasos();
          }
        })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
    },
    altaPrueba() {
      const url = `${cfg.Pruebas_URL}`;
      axios.post(url, { fecha: new Date(), CasoId: this.caso.id })
        .then((result) => {
          if (result.status === 200) {
            console.log('Error en el alta');
            this.error = result.data.msg;
            this.errorBool = true;
          } else {
            console.log('Caso cargado correctamente');
            this.obtenerPruebas();
          }
        })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
    },
    obtenerPartes() {
      const url = `${cfg.PartesMedicos_URL}/${this.caso.id}`;
      axios.get(url)
        .then((result) => {
          this.partesMedicos = result.data;
        })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
    },
    obtenerPruebas() {
      const url = `${cfg.Pruebas_URL}/${this.caso.id}`;
      axios.get(url)
        .then((result) => {
          this.pruebas = result.data;
        })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
    },
  },
};
</script>

<style>
.example-1 {
position: relative;
overflow-y: scroll;
height: 200px; }
</style>
