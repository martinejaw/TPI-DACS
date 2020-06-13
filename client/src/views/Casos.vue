<template>
  <!--div class="jumbotron jumbotron-fluid"-->
  <div class="w3-container w3-teal">
    <hr class="my-2" />
    <h1 class="display-4">CASOS</h1>
    <p class="lead">Casos de covid-19</p>
    <hr class="my-4" />
    <form class="form-inline">
      <i class="fas fa-search" aria-hidden="true"></i>
      <input
        class="form-control form-control-sm col-md-4"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div class="col-md-6"></div>
      <button class="btn btn-outline-success my-2 my-sm-0 col-md-2"
      type="submit">Agregar caso</button>
    </form>
    <hr class="my-1" />
    <div class="btn-group d-flex" role="group">
      <a class="btn btn-outline-secondary w-100">ID caso</a>
      <a class="btn btn-outline-secondary w-100">Estado</a>
      <a class="btn btn-outline-secondary w-100">Fecha</a>
    </div>

    <hr class="my-2" />
    <!-- inicio de la tabla de datos -->
    <table class="table table-striped">
      <tbody>
        <tr v-for="caso in casos" v-bind:key="caso">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card card" style="background-color: beige; border-color: #333;">
                  <div class="card-block">
                    <div class="row">
                      <div class="cuerpoDatos col-sm-8">
                        <h2 class="card-title">ID caso: {{ caso.id }}</h2>
                        <p class="card-text">
                          <strong>DNI:</strong> {{ caso.dni }}
                        </p>
                        <p class="card-text">
                          <strong>Fecha:</strong> {{ caso.fecha }}
                        </p>
                        <p>
                          <strong>Estado:</strong>
                          <span class="badge bg-primary"></span>
                          <span class="badge bg-info"></span>
                          <span class="badge bg-warning"></span>
                          <span v-if="caso.estado == `Estable`" class="badge bg-success">
                          {{ caso.estado }} </span>
                        </p>
                      </div>
                      <div class="imagen col-sm-4 text-center">
                        <img
                          class="image"
                          src="./image/Umbrella.png"
                          alt
                          style="border-radius:50%;"
                        />
                      </div>
                    </div>
                    <div>
                      <button type="button" class="abrir btn-lg btn-block">Abrir</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </tr>
      </tbody>
    </table>
    <!-- Fin de la tabla de datos -->
  </div>
</template>

<script>
export default {
  name: 'Casos',
  data: () => ({
    casos: [{ id: 12, dni: 2121 }, { id: 12, dni: 2121 }],
  }),
};
</script>

<style>
body {
  /*background-image: url("../centrohp.png");*/
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
.imagen {
  width: 150px;
  height: 150px;
}
.imagen img {
  width: auto;
  height: 100%;
}

.abrir {
  background-color: #507dbc;
}

.cuerpoDatos {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
