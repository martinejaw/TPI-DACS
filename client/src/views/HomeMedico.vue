<template>
  <botones>
    <div class="botones justify-content-md-center">

      <router-link :to='{name: "Consultas"}'>
      <a class="verconsultas btn btn-info btn-lg text-dark font-weight-bold
      display-2">Ver Consultas</a>
      </router-link>

      <router-link :to='{name: "Casos"}'>
      <a class="vercasos btn btn-info btn-lg text-dark font-weight-bold
      display-2">Ver Casos</a>
      </router-link>

    </div>
  </botones>
</template>

<script>
export default {
  name: 'HomeMedico',
};
</script>

<style>
.botones {
  text-decoration: black;
  font-size: 36px;
  font-weight: bold;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
}

.verconsultas {
  background-image: url("image/consulta.jpg");
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

.vercasos {
  background-image: url("image/caso.jpg");
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
  margin-left: 300px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: whitesmoke;
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
