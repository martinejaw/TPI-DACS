<template>
  <v-container>
<v-app>
  <v-form
    ref="form"
    v-model="valid"
    id="inner"
  >
    <h1 v-if="okey==null"></h1>
    <h1 v-else-if="okey==true"> Logueado Correctamente </h1>
    <h1 v-else> Las credenciales no coinciden </h1>

    <v-text-field
      v-model="usuario"
      :counter="20"
      :rules="nameRules"
      label="Usuario"
      required
    ></v-text-field>

    <v-text-field
      v-model="pass"
      :rules="passwordRules"
      label="Contraseña"
      :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="() => (value = !value)"
      :type="value ? 'password' : 'text'"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Debes estar de acuerdo!']"
      label="¿Estas de acuerdo?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mb-4"
      @click="validate"
    >
      Loguearse
    </v-btn>

<router-link to="/medico">
    </router-link>
  </v-form>
  </v-app>

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
  </v-container>

</template>

<script>
import axios from 'axios';
import cfg from '../config/cfg';

export default {
  name: 'Login',
  data: () => ({
    valid: true,
    usuario: '',
    nameRules: [
      (v) => !!v || 'Usuario es requerido',
      (v) => (v && v.length >= 3) || 'Usuario deben tener por lo menos 3 caracteres',
      (v) => (v && v.length <= 20) || 'Usuario deben tener como maximo 20 caracteres',
      (v) => (v.split(' ').length <= 1) || 'Espacios en blanco no permitidos',
    ],
    error: '',
    errorBool: false,
    message: '',
    pass: '',
    value: true,
    passwordRules: [
      (v) => !!v || 'La contraseña es requerida',
      (v) => (v.split(' ').length <= 1) || 'Espacios en blanco no permitidos',
    ],
  }),

  methods: {
    async validate() {
      await axios.post(cfg.VAL_URL, { usuario: this.usuario, password: this.pass })
        .then((result) => {
          localStorage.setItem('user-token', result.data.token); // store the stoken in localstorage
          this.$router.push({ name: 'Home' });
        })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
    },
  },
};
</script>

<style>
#inner {
  background-color: #efd199;
  padding: 50px;
  max-width: 400px;
  margin: 50px auto;
  border-radius: 5px;
  box-shadow: 0px 4px 15px #444444;
}
</style>
