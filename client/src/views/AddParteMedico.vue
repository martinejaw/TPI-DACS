<template>
<div>
<hr class="my-2">
      <!--div class="jumbotron jumbotron-fluid"-->
        <div class="w3-container w3-teal">
          <div class="row">
            <div class="col-md-6 mb-4">
              <h1 class="display-3">Agregar Parte Medico Caso {{ caso.id }} </h1>
              <hr class="my-4">
                <h3 class>Estado</h3>
                <select v-model="estado" class="form-control">
                  <option>Estable</option>
                  <option>Critico</option>
                  <option>Grave</option>
                  <option>Fallecido</option>
                </select>
            </div>
            <div class="col-md-6 mb-4">
              <hr class="my-4">
              <div class="card example-1 scrollbar-ripe-malinka">
                <h4 class="text-center" id="section1"><strong>Síntomas</strong></h4>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check1">
                        <label class="custom-control-label"
                        for="check1">Fiebre (Mayor a 38°C)</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check2">
                        <label class="custom-control-label" for="check2">Taquipnea</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check3">
                        <label class="custom-control-label" for="check3">Diarrea</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check4">
                        <label class="custom-control-label" for="check4">Artralgias</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check5">
                        <label class="custom-control-label" for="check5">Malestar</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check6">
                        <label class="custom-control-label" for="check6">Tos</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check7">
                        <label class="custom-control-label" for="check7">Vomitos</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check8">
                        <label class="custom-control-label" for="check8">Dolor de garganta</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check9">
                        <label class="custom-control-label"
                        for="check9">Insuficiencia respiratoria</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check10">
                        <label class="custom-control-label" for="check10">Dolor abdominal</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check11">
                        <label class="custom-control-label" for="check11">Dolor Toracico</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check12">
                        <label class="custom-control-label"
                        for="check12">Rechazo al alimento</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check13">
                        <label class="custom-control-label" for="check13">Irritabilidad</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <!-- Default checked -->
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check14">
                        <label class="custom-control-label" for="check14">Convulsiones</label>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mb-4">
              <div class="form-group"> <!-- Date input -->
                  <h3 class>Fecha de creación</h3>
                    <v-dialog
                      ref="dialog"
                      v-model="modal"
                      :return-value.sync="date"
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="fecha"
                          label="Ingrese la fecha"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="fecha" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                </div>
              <h2>Tratamiento</h2>
              <textarea class="form-control" id="exampleFormControlTextarea1"
              v-model="tratamiento" rows="5"></textarea>
              <hr class="my-1">
              <h2>Comentario</h2>
              <textarea class="form-control" id="exampleFormControlTextarea1"
              v-model="comentario" rows="5"></textarea>
              <hr class="my-2">

              <div class="text-right">
                <button class="btn btn-primary" @click="altaParte()"> Agregar Parte Médico</button>
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
  name: 'ParteMedico',
  props: ['caso'],
  data: () => ({
    modal: false,
    tratamiento: '',
    comentario: '',
    fecha: '',
    estado: '',
    errorBool: false,
  }),
  methods: {
    altaParte() {
      const url = `${cfg.PartesMedicos_URL}`;
      axios.post(url, {
        CasoId: this.caso.id,
        estadoVital: this.estado,
        PacienteDni: this.dni,
        fecha: this.fecha,
        tratamientos: this.tratamiento,
        comentario: this.comentario,
      })
        .then((result) => {
          if (result.status === 200) {
            this.error = result.data.msg;
            this.errorBool = true;
          } else {
            this.$router.push({ name: 'Caso', params: { caso: this.caso } });
          }
        })
        .catch((error) => {
          this.error = error;
          this.errorBool = true;
        });
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
