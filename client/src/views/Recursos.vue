<template>
  <v-app>
    <div id="deep" class="w3-container w3-teal">
      <h2 class="display-3">Recursos del Hospital</h2>
      <h3> CUIT: {{$store.state.cuit}} </h3>
      <hr class="my-4" />
      <!-- Tabla con Recuros -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Recurso</th>
            <th scope="col">Cantidad</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(recurso, index) in recursos" v-bind:key="recurso">
            <th scope="row">{{ index+1 }}</th>
            <td>{{ recurso.nombre }}</td>
            <td>{{ recurso.cantidad }}</td>
            <td>
              <v-btn
                class="boton-modificar"
                @click="recursoEdit=recurso.nombre;edit=true;value=recurso.cantidad;
                recursoID=recurso.id"
              >Modificar Cantidad</v-btn>
            </td>
          </tr>
        </tbody>
      </table>
      <v-btn color="success" class="mr-4" v-on:click="pedidoBool = true">Realizar Pedido</v-btn>
      <!-- Fin Recursos -->
    </div>

    <v-dialog v-model="edit" persistent max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">Recurso: {{ recursoEdit }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-col cols="12" sm="12" class="text-left">
              <h5>Cantidad</h5>
              <input v-model="value" :min="0"
              class="form-control" type="number">
            </v-col>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="edit = false">Cerrar</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="edit = false;actualizarRecursos();"
          >Actualizar recursos</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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

    <!--Form pedido-->
    <v-dialog v-model="pedidoBool" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Pedido de Recursos</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-col cols="12">
              <div v-for="recurso in recursos" v-bind:key="recurso">
                <v-row justify="center">
                  <v-col cols="6">
                    <h5 class="text-right"> {{ recurso.nombre }} </h5>
                  </v-col>
                  <v-col cols="6">
                    <input v-model="recurso.c1"
                    :min="0" name ="recurso.nombre"
                    class="form-control" type="number"
                    placeholder="0">
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="pedidoBool = false">Cerrar</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="pedidoBool = false;realizarPedido();"
          >Enviar Pedido</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import axios from 'axios';
import cfg from '../config/cfg';

export default {
  name: 'Recursos',
  data: () => ({
    recursos: [],
    edit: false,
    recursoEdit: '',
    recursoID: 0,
    value: 0,
    errorBool: false,
    error: '',
    pedidoBool: false,
  }),
  mounted() {
    this.actualizar();
  },
  methods: {
    realizarPedido() {
      const pedido = {};
      pedido.idCentro = this.$store.state.cuit;
      this.recursos.forEach((recurso) => {
        console.log(typeof Number(recurso.c1));
        if (Number.isNaN(Number(recurso.c1))) {
          pedido[recurso.nombre] = 0;
        } else {
          pedido[recurso.nombre] = Number(recurso.c1);
        }
      });
      console.log(pedido);
      axios.post(cfg.Pedidos_URL, pedido)
        .then()
        .catch((error) => { this.error = error.message; this.errorBool = true; });
    },
    actualizarRecursos() {
      const url = `${cfg.Recursos_URL}/${this.$store.state.cuit}/${this.recursoID}`;
      axios.put(url, { cantidad: this.value })
        .then(() => { this.actualizar(); })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
    },
    actualizar() {
      const url = `${cfg.Recursos_URL}/${this.$store.state.cuit}`;
      axios.get(url)
        .then((result) => {
          this.recursos = result.data;
          this.recursos.sort((a, b) => a.id - b.id);
        })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
    },
  },
};
</script>

<style>
body {
  background-image: url("./image/fondo.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: auto;
}
.navbar {
  background-color: #efd199;
  font-weight: bold;
}

.display-4 {
  text-align: center;
}

#deep {
  background-color: #ffedce;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.w3-container {
  background-color: #ffedce;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.boton-modificar {
  background-color: whitesmoke;
  font-size: 14px;
  padding: 3px;
  border: 1px solid #888888;
  border-radius: 4px;
  size: inherit;
  text-decoration-color: black;
  color: black;
}

.boton-pedido {
  background-color: limegreen;
  margin: center;
  font-weight: bold;
  text-decoration-color: black;
  color: black;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 5px 5px #888888;
}
</style>
