<template>
  <v-app>
    <div id="deep" class="w3-container w3-teal">
      <h2 class="display-4">Recursos del Hospital</h2>

      <hr class="my-4" />
      <!-- Tabla con Recuros -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Recurso</th>
            <th scope="col">Cantidad</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="recurso in recursos" v-bind:key="recurso">
            <th scope="row"> {{ recurso.id }} </th>
            <td> {{ recurso.nombre }} </td>
            <td> {{ recurso.cantidad }} </td>
            <td>
              <a class="boton-modificar" href="#">Modificar Cantidad</a>
            </td>
          </tr>
        </tbody>
      </table>
      <v-btn color="success" class="mr-4">Realizar Pedido</v-btn>
      <!-- Fin Recursos -->
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Recursos',
  data: () => ({
    recursos: [{ id: 12, nombre: 'Exequiel', apellido: 'Fraca' }, { id: 12, dni: 2121 }],
  }),
};
</script>

<style>
body {
  background-image: url("./image/fondo.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: auto;
}
.navbar {
  background-color: #efd199;
  font-weight: bold;
}

.display-4 {
  text-align: center;
}

#deep {
  background-color: #ffedce;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
    padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.w3-container {
  background-color: #ffedce;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.boton-modificar {
  background-color: whitesmoke;
  font-size: 14px;
  padding: 3px;
  border: 1px solid #888888;
  border-radius: 4px;
  size: inherit;
  text-decoration-color: black;
  color: black;
}

.boton-pedido {
  background-color: limegreen;
  margin: center;
  font-weight: bold;
  text-decoration-color: black;
  color: black;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 5px 5px #888888;
}
</style>
