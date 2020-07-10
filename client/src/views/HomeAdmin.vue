<template>
  <botones>
    <div class="botones justify-content-md-center">
      <a class="vermedicos col-md-4 mb-6 btn btn-info btn-lg text-dark font-weight-bold
      display-2" @click="vermedicos">Ver Medicos</a>
      <a class="separador"></a>
      <a class="verrecursos col-md-4 mb-6 btn btn-info btn-lg text-dark font-weight-bold
      display-2" @click="verrecursos">Ver Recursos</a>
    </div>
  </botones>
</template>

<script>
export default {
  name: 'HomeMedico',
  methods: {
    vermedicos() {
      this.$router.push({ name: 'Medicos' });
    },
    verrecursos() {
      this.$router.push({ name: 'Recursos' });
    },
  },
};

</script>

<style>
.body {
  background-image: url("image/fondo.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: auto;
}

.botones {
  text-decoration: black;
  font-size: 36px;
  font-weight: bold;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
}

.vermedicos {
  background-image: url("image/medicos.jpg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-position: center;
  background-size: auto;
  border-radius: 4px;
  border: 6px solid #efd199;
  color: black;
  width: 300px;
  height: 400px;
  text-decoration: black;
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: whitesmoke;
}

.verrecursos {
  background-image: url("image/recursos.png");
  background-repeat: no-repeat;
  background-attachment: local;
  background-position: center;
  background-size: auto;

  border-radius: 4px;
  border: 6px solid #efd199;
  color: black;
  width: 300px;
  height: 400px;
  text-decoration: black;
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: whitesmoke;
}
.separador {
  margin-left: 175px;
  margin-right: 175px;
}

/*.vercasos:after {
  content: "";
  background: black;
  display: block;
  padding-top: 300%;
  padding-left: 30%;
  margin-left: -100px !important;
  margin-top: -200%;
  opacity: 0;
  transition: all 0.8s;
}

.vercasos:active:after {
  padding: 0;
  margin: 0;
  opacity: 0.8;
  transition: 0s;
}
.verconsultas:after {
  content: "";
  background: black;
  display: block;
  padding-top: 300%;
  padding-left: 30%;
  margin-left: -100px !important;
  margin-top: -200%;
  opacity: 0;
  transition: all 0.8s;
}

.verconsultas:active:after {
  padding: 0;
  margin: 0;
  opacity: 0.8;
  transition: 0s;
}*/
</style>
