<template>
  <botones>
    <div class="botones justify-content-md-center">
      <a class="verconsultas" href="#">Ver Consultas</a>
      <a class="vercasos" href="#">Ver Casos</a>
    </div>
  </botones>
</template>

<script>
export default {
  name: 'HomeMedico',
};
</script>

<style>
.sbody {
  background-image: url("image/fondo.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: auto;
}
.navbar {
  background-color: #efd199;
  font-weight: bold;
}

.cerrar-sesion {
  background-color: #cd8f5a;
}

.botones {
  max-width: 700px;
  max-height: 400px;
  text-decoration: black;
  display: block;
  font-size: 36px;
  font-weight: bold;
  padding-top: 150px;
  margin: auto;
}
.verconsultas {
  position: relative;
  background-image: url("image/consulta.jpg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-position: center;
  background-size: auto;

  border-radius: 4px;
  border: 6px solid #efd199;
  color: black;
  text-align: end;
  width: 300px;
  height: 400px;
  text-decoration: black;
  text-align: center;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.vercasos {
  position: relative;
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
  text-align: center;
  text-decoration: black;
  text-align: center;
  margin-left: 400px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.vercasos:after {
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
}
</style>
