<template>
  <div>
    <hr class="my-2" />
    <!--div class="jumbotron jumbotron-fluid"-->
    <div class="w3-container w3-teal">
      <h1 class="display-4">CONSULTAS</h1>
      <p class="lead">Consultas realizadas por personas con posibles sintomas de covid-19</p>
      <hr class="my-4" />

      <div class="btn-group d-flex" role="group">
        <a class="btn btn-outline-secondary w-100">Sin Contestar</a>
        <a class="btn btn-outline-secondary w-100">Contestadas</a>
      </div>

      <hr class="my-4" />
      <!-- inicio de la tabla de datos -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="consulta in consultas" v-bind:key="consulta">
            <th scope="row">{{ consulta.id }}</th>
            <td>{{ consulta.nombre }}</td>
            <td>{{ consulta.apellido }}</td>
            <td>{{ consulta.fecha }}</td>
          </tr>
        </tbody>
      </table>
      <!-- Fin de la tabla de datos -->
    </div>
  </div>
  <!--/div-->
</template>

<script>
export default {
  name: 'Consultas',
  data: () => ({
    consultas: [{ id: 12, nombre: 'Exequiel', apellido: 'Fraca' }, { id: 12, dni: 2121 }],
  }),
};
</script>


<style>
body {
  background-image: url("./image/centrohp.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: contain;
}
.navbar {
  background-color: #efd199;
}
.w3-container {
  background-color: #ffedce;
  max-width: 1200px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
