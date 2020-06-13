<template>
  <!--div class="jumbotron jumbotron-fluid"-->
  <div class="w3-container w3-teal">
    <hr class="my-2" />
    <h1 class="display-4">CASOS</h1>
    <p class="lead">Casos de covid-19</p>
    <hr class="my-4" />
    <form class="form-inline">
      <i class="fas fa-search" aria-hidden="true"></i>
      <input
        class="form-control form-control-sm col-md-4"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div class="col-md-6"></div>
      <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="btn btn-outline-success my-2 my-sm-0 col-md-2" color="primary"
        dark v-bind="attrs" v-on="on">Agregar Caso</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal middle name"
                hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*"
                required></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey',
                  'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Agregar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </form>
    <hr class="my-1" />
    <div class="btn-group d-flex" role="group">
      <a class="btn btn-outline-secondary w-100">ID caso</a>
      <a class="btn btn-outline-secondary w-100">Estado</a>
      <a class="btn btn-outline-secondary w-100">Fecha</a>
    </div>

    <hr class="my-2" />
    <!-- inicio de la tabla de datos -->
    <table class="table table-striped">
      <tbody>
        <tr v-for="caso in casos" v-bind:key="caso">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card card" style="background-color: beige; border-color: #333;">
                  <div class="card-block">
                    <div class="row">
                      <div class="cuerpoDatos col-sm-8">
                        <h2 class="card-title">ID caso: {{ caso.id }}</h2>
                        <p class="card-text">
                          <strong>DNI Paciente:</strong> {{ caso.PacienteDni }}
                        </p>
                        <p class="card-text">
                          <strong>Fecha:</strong> {{ caso.fechaInicio }}
                        </p>
                        <p>
                          <strong>Estado:</strong>
                          <span class="badge bg-primary"></span>
                          <span class="badge bg-info"></span>
                          <span class="badge bg-warning"></span>
                          <span v-if="caso.estado == `Estable`" class="badge bg-success">
                          {{ caso.estado }} </span>
                          <span class="badge bg-success">
                          {{ caso.estado }} </span>
                        </p>
                      </div>
                      <div class="imagen col-sm-4 text-center">
                        <img
                          class="image"
                          src="./image/Umbrella.png"
                          alt
                          style="border-radius:50%;"
                        />
                      </div>
                    </div>
                    <div>
                      <button type="button" class="abrir btn-lg btn-block">Abrir</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </tr>
      </tbody>
    </table>
    <!-- Fin de la tabla de datos -->
  </div>
</template>

<script>
import axios from 'axios';
import cfg from '../config/cfg';

export default {
  name: 'Casos',
  data: () => ({
    casos: [],
    dialog: false,
  }),
  mounted() {
    const url = `${cfg.Casos_URL}`;
    axios.get(url)
      .then((result) => {
        this.casos = result.data;
      })
      .catch((error) => { this.error = error.message; });
  },
};
</script>

<style>
body {
  /*background-image: url("../centrohp.png");*/
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
.imagen {
  width: 150px;
  height: 150px;
}
.imagen img {
  width: auto;
  height: 100%;
}

.abrir {
  background-color: #507dbc;
}

.cuerpoDatos {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
