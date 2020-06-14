<template>
  <div>
    <hr class="my-2" />
    <!--div class="jumbotron jumbotron-fluid"-->
    <div class="w3-container w3-teal">
      <h1 class="display-4">Medicos</h1>
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
        type="submit">Agregar Medico</button>
      </form>
      <hr class="my-1" />
      <div class="btn-group d-flex" role="group">
        <a class="btn btn-outline-secondary w-100">Matricula</a>
        <a class="btn btn-outline-secondary w-100">DNI</a>
        <a class="btn btn-outline-secondary w-100">Nombre</a>
        <a class="btn btn-outline-secondary w-100">Especialidad</a>
      </div>

      <hr class="my-2" />
      <!-- inicio de la tabla de datos -->
      <table class="table table-striped">
        <tbody>
          <tr>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="card card" style="background-color: beige; border-color: #333;">
                    <div class="card-block">
                      <div class="row">
                        <div class="cuerpoDatos col-sm-8">
                          <h2 class="card-title">Nombre: Jauroski, Martin</h2>
                          <p class="card-text">
                            <strong>DNI:</strong> 37973754
                          </p>
                          <p class="card-text">
                            <strong>Matricula:</strong> Pediatra
                          </p>
                          <p class="card-text">
                            <strong>Fecha de Nacimiento:</strong> 12/05/1993
                          </p>
                          <p class="card-text">
                            <strong>Direccion:</strong> Coati 123, Ituzaingo, Misiones
                          </p>
                        </div>
                        <div class="imagen col-sm-4 text-center">
                          <img
                            class="image"
                            src="./image/medico.png"
                            alt
                            style="border-radius:50%;"
                          />
                        </div>
                      </div>
                      <div class="botoneditar">
                        <button type="button" class="edit btn-secondary">Editar Datos</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tr>
          <br />
          <tr>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="card card" style="background-color: beige; border-color: #333;">
                    <div class="card-block">
                      <div class="row">
                        <div class="cuerpoDatos col-sm-8">
                          <h2 class="card-title">Nombre: Bravin, Juan Ignacio</h2>
                          <p class="card-text">
                            <strong>DNI:</strong> 41223456
                          </p>
                          <p class="card-text">
                            <strong>Matricula:</strong> Urologo
                          </p>
                          <p class="card-text">
                            <strong>Fecha de Nacimiento:</strong> 31/12/1999
                          </p>
                          <p class="card-text">
                            <strong>Direccion:</strong> Ruta 11 km.1234, Resistencia, Chaco
                          </p>
                        </div>
                        <div class="imagen col-sm-4 text-center">
                          <img
                            class="image"
                            src="./image/medico.png"
                            alt
                            style="border-radius:50%;"
                          />
                        </div>
                      </div>
                      <div class="botoneditar">
                        <button type="button" class="edit btn-secondary">Editar Datos</button>
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
  </div>
</template>

<script>
export default {
  name: 'Medicos',
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
  margin-top: 20px;
  width: 140px;
  height: 140px;
}
.imagen img {
  width: auto;
  height: 100%;
}

.btn-group {
  background-color: #c0c0c0;
}

.card-block {
  background-color: #f2f2f2;
}

.botoneditar {
  border-width: 2px;
  padding: 10px;
  border-radius: 3px;
}

.card-text {
  margin-left: 5%;
}

.card-title {
  padding: 10px;
}

.cuerpoDatos {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
