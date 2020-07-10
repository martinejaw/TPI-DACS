<template>
<div>
<hr class="my-2">
  <!--div class="jumbotron jumbotron-fluid"-->
        <div class="w3-container w3-teal">
          <div class="row">
            <div class="col-md-6 mb-2">
              <h1 class="display-3">CASO ID: {{ caso.id }} </h1>
              <h6 class="lead">Detalle del caso</h6>
              <h6 class="lead"><strong>DNI: </strong> {{ caso.dni }} </h6>
              <h6 class="lead"><strong>Fecha inicio: </strong> {{ caso.fechaInicio }} </h6>
              <div>
                <h6>
                  <strong>Estado: </strong>
                  <span v-if="caso.estado === 'Sospechoso'"
                  class="badge bg-warning">{{caso.estado}}</span>
                  <span v-if="caso.estado === 'Positivo'"
                  class="badge bg-danger">{{caso.estado}}</span>
                  <span v-if="caso.estado === 'Negativo'"
                  class="badge bg-success">{{caso.estado}}</span>
                </h6>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card example-1 scrollbar-ripe-malinka">
                <div class="card-body">
                  <h4 id="section1"><strong>Enfermedades Previas</strong></h4>
                  <ul class="list-group">
                    <div v-for="(value,name) in enfermedadesPrevias" v-bind:key="name">
                      <li class="list-group-item"
                        v-if="value !== '' && name !== 'id' && value === true ">
                        {{name.replace(/([A-Z])/g, ' $1').replace(/^./, function(str)
                        { return str.toUpperCase(); })}}
                      </li>
                    </div>
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
                      <tr v-for="(parte,index) in partesMedicos" v-bind:key="parte">
                        <th scope="row">{{index+1}}</th>
                        <td> {{ parte.id }} </td>
                        <td> {{ parte.estadoVital }} </td>
                        <td> {{ parte.fecha }} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <hr class="my-2">
              <router-link :to='{name: "ParteMedico", params: { caso: this.caso } }'>
              <div class="text-right">
                  <v-btn class="btn btn-outline-primary"> Agregar Parte Médico
                  </v-btn>
              </div>
              </router-link>
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
                      <tr v-for="(prueba, index) of pruebas" v-bind:key="prueba">
                        <th scope="row">{{index+1}}</th>
                        <td> {{ prueba.id }} </td>
                        <td> {{ prueba.fecha }} </td>
                        <td v-if="prueba.fechaResultado != null"> {{ prueba.fechaResultado }} </td>
                        <td v-else> Sin resultado </td>
                        <td v-if="prueba.fechaResultado == null"> Sin resultado </td>
                        <td v-else-if="prueba.resultado"> Positivo </td>
                        <td v-else> Negativo </td>
                        <td v-if="index == pruebas.length - 1">
                          <v-icon
                                  small
                                  class="mr-2"
                                  @click.stop="edit = true; idPrueba = prueba.id"
                                >
                                  mdi-pencil
                                </v-icon>
                         </td>
                         <td v-else>
                         </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <hr class="my-2">
              <div class="text-right">
                <v-btn
                      class="btn btn-outline-primary"
                      @click.stop="dialog = true"
                      > Agregar Prueba</v-btn>
                      <!--Form Agregar prueba-->
                <v-dialog v-model="dialog" width="unset">
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
      <v-dialog v-model="errorBool" width="unset">
        <v-card>
          <v-card-title class="headline"> {{ error }} </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="errorBool = false">Enterado</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

<!--Form Editar Prueba-->
    <v-dialog v-model="edit" width="unset">
                          <v-card>
                            <v-card-title>
                              <span class="headline">Edicion de Prueba con id {{ idPrueba }}
                              </span>
                            </v-card-title>
<v-card-text>
            <v-container>

                <v-col cols="12" sm="6">
                  <v-select
                    v-model="resultadoPrueba"
                    :items="['Positivo', 'Negativo']"
                    label="Resultado*"
                    required
                  ></v-select>
                </v-col>

            </v-container>
            <small>*Campos Obligatorios</small>
          </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="blue darken-1" text @click="edit = false">Cerrar</v-btn>
                              <v-btn color="blue darken-1"
                              text @click="edit = false; updatePrueba()">Agregar</v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-dialog>

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
    edit: false,
    resultadoPrueba: '',
    idPrueba: 0,
    consultaCompleta: {
      fechaDeCreacion: '',
      paciente: '',
      antecedenteEpidemiologicos1: '',
      antecedenteEpidemiologicos2: '',
      enfermedadesPreviasComorbilidades: '',
      signosYSintomas: '',
    },
    enfermedadesPrevias: '',
  }),
  mounted() {
    this.obtenerPartes();
    this.obtenerPruebas();
    this.obtenerConsulta();
  },
  methods: {
    altaPrueba() {
      const url = `${cfg.Pruebas_URL}`;
      axios.post(url, { fecha: new Date(), CasoId: this.caso.id })
        .then((result) => {
          if (result.status === 200) {
            this.error = result.data.msg;
            this.errorBool = true;
          } else {
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
    updatePrueba() {
      if (this.resultadoPrueba === 'Positivo') {
        this.resultado = true;
      } else {
        this.resultado = false;
      }
      const currentDate = new Date();
      const url = `${cfg.Pruebas_URL}/${this.caso.id}/${this.idPrueba}`;
      axios.put(url, { resultado: this.resultado, fechaResultado: currentDate })
        .then(() => {
          this.obtenerPruebas();
        })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
      this.obtenerEstado();
    },
    obtenerEstado() {
      this.caso.estado = this.resultadoPrueba;
      const url = `${cfg.Casos_URL}/${this.caso.id}`;
      axios.put(url, { estado: this.caso.estado })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
    },
    obtenerConsulta() {
      const url = `${cfg.Consultas_URL}/obtenerConsultaDni/${this.caso.dni}`;
      axios.get(url)
        .then((result) => {
          this.consultaCompleta = result.data;
          this.enfermedadesPrevias = this.consultaCompleta.enfermedadesPreviasComorbilidades;
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
