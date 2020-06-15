<template>
<div>
<hr class="my-2">
      <!--div class="jumbotron jumbotron-fluid"-->
        <div class="w3-container w3-teal">
          <div class="row">
            <div class="col-md-6 mb-4">
              <h1 class="display-3">Agregar Parte Medico</h1>
              <h3><strong>Estado: </strong>
                <span class="badge bg-warning">Sin contestar</span>
                <span class="badge bg-success">Contestado</span>
              </h3>
              <hr class="my-4">
                <h3 class>Estado</h3>
                <select class="form-control">
                  <option>Default select</option>
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
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Ingrese la fecha"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                </div>
              <h2>Tratamiento</h2>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              <hr class="my-1">
              <h2>Comentario</h2>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              <hr class="my-2">

              <div class="text-right">
                <button class="btn btn-primary" type="submit"> Agregar Parte Médico</button>
              </div>
            </div>
          </div>
        </div>
</div>
</template>

<script>
export default {
  name: 'ParteMedico',
  data: () => ({
    modal: false,
  }),
};
</script>

<style>
.example-1 {
position: relative;
overflow-y: scroll;
height: 200px; }
</style>
