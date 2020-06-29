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
      label="Do you agree?"
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
      (v) => !!v || 'Name is required',
      (v) => (v && v.length >= 0) || 'User must be more than 5 characters',
      (v) => (v && v.length <= 10) || 'User must be less than 10 characters',
      (v) => (v.split(' ').length <= 1) || 'Espacios en blanco no permitidos',
    ],
    error: '',
    message: '',
    pass: '',
    value: true,
    passwordRules: [
      (v) => !!v || 'La contraseña es requerida',
      (v) => (v.split(' ').length <= 1) || 'Espacios en blanco no permitidos',
    ],

    okey: null,
  }),

  mounted() {
    this.$store.commit('increment');
    this.$store.state.cuit = 2121;
  },
  methods: {
    async validate() {
      localStorage.setItem('user-token', true); // store the token in localstorage
      await axios.post(cfg.VAL_URL, { usuario: this.usuario, password: this.pass })
        .then((result) => {
          this.okey = result.data.msg;
        })
        .catch((error) => { this.error = error.message; localStorage.removeItem('user-token'); });
    },
  },
};
</script>

<style>
#inner {
  background-color: #efd199;
  padding: 50px;
  width: 25%;
  margin: 50px auto;
  border-radius: 5px;
  box-shadow: 0px 4px 15px #444444;
}
</style>
