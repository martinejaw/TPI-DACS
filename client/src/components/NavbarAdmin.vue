<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #efd199;">
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <button class="btn-inicio btn text-dark btn-outline-dark bg-light" @click="home">
    Home
    </button>
    <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
      <ul class="text font-weight-light">Administrador: {{ this.$store.state.nombre }}</ul>
      <ul class="text font-weight-light">Hospital: {{ this.$store.state.hospital }}</ul>
    </div>
    <button class="btn-cerrarsesion btn text-dark btn-outline-dark bg-light"
     @click="cerrarsesion">
     Cerrar Sesion
    </button>
  </nav>
</template>

<script>
export default {
  name: 'navbarcuentas',
  data() {
    return {};
  },
  methods: {
    cerrarsesion() {
      localStorage.removeItem('user-token');
      localStorage.removeItem('rol');
      localStorage.removeItem('dni');
      localStorage.removeItem('cuit');
      localStorage.removeItem('nombre');
      localStorage.removeItem('hospital');
      this.$store.state.isAdmin = false;
      this.$store.state.isMedico = false;
      this.$router.push({ name: 'Login' });
    },
    home() {
      this.$router.push({ name: 'Administrador' });
    },
  },
};
</script>

<style>
.btn-inicio {
  margin-left: 10%;
  margin-top: 5px;
  margin-bottom: 5px;
}
.btn-cerrarsesion {
  margin-right: 10%;
  margin-top: 5px;
  margin-bottom: 5px;
}
.text {
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
