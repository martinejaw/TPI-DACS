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
      :counter="10"
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
      :rules="[v => !!v || 'You must agree to continue!']"
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
    <v-btn
      color="error"
      class="mr-0"
      @click="reset"
    >
      Olvide mi contraseña
    </v-btn>
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
import jwt from 'jwt-simple';
import cfg from '../config/cfg';

export default {
  name: 'Login',
  data: () => ({
    valid: true,
    usuario: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length >= 0) || 'User must be more than 5 characters',
      (v) => (v && v.length <= 10) || 'User must be less than 10 characters',
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
      console.log('Admin ', this.$store.state.isAdmin);
      console.log('Medico ', this.$store.state.isMedico);
      await axios.post(cfg.VAL_URL, { usuario: this.usuario, password: this.pass })
        .then((result) => {
          localStorage.setItem('user-token', result.data.token); // store the token in localstorage
          console.log('Token ', result.data.token);
          console.log('DesToken ', jwt.decode(result.data.token, 'pass'));
        })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
      const tok = localStorage.getItem('user-token');
      console.log('TOk ', tok);
      console.log('DesToken ', jwt.decode(tok, 'pass'));
    },
  },
};
</script>

<style>
#inner {
  background-color: #efd199;
  padding: 50px;
  min-width: 400px;
  width: 25%;
  margin: 50px auto;
  border-radius: 5px;
  box-shadow: 0px 4px 15px #444444;
}
</style>
