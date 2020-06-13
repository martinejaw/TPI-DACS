<template>
<v-app>
  <v-form
    ref="form"
    v-model="valid"
    id="inner"
  >
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

      hint="Your password passed! Password rules are not meant to be broken!"
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
      class="mr-4"
      @click="registrar"
    >
      Registrarse
    </v-btn>
  </v-form>
  </v-app>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import cfg from '../config/cfg';

export default {
  name: 'home',
  data: () => ({
    valid: true,
    usuario: '',
    nameRules: [
      (v) => !!v || 'User is required',
      (v) => (v && v.length >= 5) || 'User must be more than 5 characters',
      (v) => (v && v.length <= 10) || 'User must be less than 10 characters',
      (v) => (v.split(' ').length <= 1) || 'Espacios en blanco no permitidos',
    ],
    error: '',
    messages: '',
    pass: '',
    value: true,
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => (v && v.length >= 8) || 'User must be at least 8 characters long',
      (v) => (v.split(' ').length <= 1) || 'Espacios en blanco no permitidos',
    ],
  }),

  mounted() {
    axios.get(cfg.API_URL)
      .then((result) => { this.messages = result.data; })
      .catch((error) => { this.error = error.message; });
  },
  methods: {
    async registrar() {
      await axios.post(cfg.API_URL, { user: this.usuario, password: this.pass })
        .then((result) => { this.messages = result.data; })
        .catch((error) => { this.error = error.message; });
    },
  },
};
</script>

<style>
img {
  max-width: 300px;
  height: auto;
}
</style>
