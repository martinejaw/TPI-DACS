<template>
  <v-app>
    <div id="app">
      <template v-if="this.$store.state.isAdmin">
        <NavbarAdmin></NavbarAdmin>
      </template>
      <template v-else-if="this.$store.state.isMedico">
        <NavbarMedico></NavbarMedico>
      </template>
      <template v-else>
        <Navbar></Navbar>
      </template>
      <router-view />
    </div>
  </v-app>
</template>

<script src="https://unpkg.com/vue-recaptcha@latest/dist/vue-recaptcha.min.js"></script>
<script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script>
<script>
import Navbar from './components/Navbar.vue';
import NavbarAdmin from './components/NavbarAdmin.vue';
import NavbarMedico from './components/NavbarMedico.vue';

export default {
  components: {
    Navbar,
    NavbarAdmin,
    NavbarMedico,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("views/image/fondo.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import "~bootstrap/dist/css/bootstrap.css";
@import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900";
@import "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css";
</style>
