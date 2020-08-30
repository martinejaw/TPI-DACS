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

    <vue-recaptcha
      v-model="recaptcha"
      required
      sitekey="6LeE7bAZAAAAAJ-Hmb8FSXIGluea63AI3WxS0_A2" :loadRecaptchaScript="true"
      @verify="mxVerify"
      @expired= "expired">
    </vue-recaptcha>
      <!--site 6LeE7bAZAAAAAJ-Hmb8FSXIGluea63AI3WxS0_A2-->
      <!--secret 6LeE7bAZAAAAADxYppwdBzvh_QHSwD6AF_1hVgNm -->
    <v-btn
      :disabled="!valid || !recaptcha"
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
import VueRecaptcha from 'vue-recaptcha';
import cfg from '../config/cfg';

export default {
  name: 'Login',
  data: () => ({
    valid: true,
    widgetId: 0,
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
    recaptcha: false,
  }),
  methods: {
    expired() {
      this.recaptcha = false;
    },
    mxVerify() {
      this.recaptcha = true;
    },
    async validate() {
      await axios.post(cfg.VAL_URL, { usuario: this.usuario, password: this.pass })
        .then((result) => {
          localStorage.setItem('user-token', result.data.token); // store the stoken in localstorage
          localStorage.setItem('rol', result.data.info.rol);
          localStorage.setItem('dni', result.data.info.dni);
          localStorage.setItem('cuit', result.data.info.cuit);
          localStorage.setItem('hospital', result.data.info.hospital);
          localStorage.setItem('nombre', result.data.info.nombre);
          this.$router.push({ name: 'Home' });
          console.log(localStorage);
        })
        .catch((error) => { this.error = error.message; this.errorBool = true; });
    },
  },
  components: {
    VueRecaptcha,
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
