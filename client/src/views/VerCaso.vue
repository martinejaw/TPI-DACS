<template>
<div>
<hr class="my-2">
  <!--div class="jumbotron jumbotron-fluid"-->
        <div class="w3-container w3-teal">
          <div class="row">
            <div class="col-md-6 mb-2">
              <h1 class="display-3">CASO ID: tal</h1>
              <h6 class="lead">Detalle del caso</h6>
              <h6 class="lead"><strong>DNI: </strong> 37973754 </h6>
              <h6 class="lead"><strong>Fecha inicio: </strong>09/05/2020 </h6>
              <div>
                <h6>
                  <strong>Estado: </strong>
                  <span class="badge bg-primary"></span>
                  <span class="badge bg-info"></span>
                  <span class="badge bg-warning"></span>
                  <span class="badge bg-success">Estable</span>
                  <button class="btn btn-outline-primary btn-sm"
                   type="submit"> Modificar Estado</button>
                </h6>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card example-1 scrollbar-ripe-malinka">
                <div class="card-body">
                  <h4 id="section1"><strong>Enfermedades Previas</strong></h4>
                  <ul class="list-group">
                    <li class="list-group-item">Diabetes</li>
                    <li class="list-group-item">Enfermedad x</li>
                    <li class="list-group-item">Enfermedad y</li>
                    <li class="list-group-item">Enfermedad z</li>
                    <li class="list-group-item">Asma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- inicio de la tabla de datos -->
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="card example-1 scrollbar-ripe-malinka">
                <div class="card-body">
                  <h4 id="section1"><strong>Partes Médicos</strong></h4>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Estado vital</th>
                        <th scope="col">Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>0001</td>
                        <td>Vivo</td>
                        <td>12/06/2020</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>0002</td>
                        <td>Grave</td>
                        <td>13/06/2020</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>0003</td>
                        <td>Fallecido</td>
                        <td>14/06/2020</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <hr class="my-2">
              <div class="text-right">
                <button class="btn btn-outline-primary" type="submit"> Agregar Parte Médico</button>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card example-1 scrollbar-ripe-malinka">
                <div class="card-body">
                  <h4 id="section1"><strong>Pruebas</strong></h4>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Fecha Prueba</th>
                        <th scope="col">Fecha Resultado</th>
                        <th scope="col">Resultado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>0001</td>
                        <td>09/06/2020</td>
                        <td>10/06/2020</td>
                        <td>Negativo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>0002</td>
                        <td>10/06/2020</td>
                        <td>12/06/2020</td>
                        <td>Positivo</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>0003</td>
                        <td>12/06/2020</td>
                        <td>--</td>
                        <td>Sin Resultado</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <hr class="my-2">
              <div class="text-right">
                <button class="btn btn-outline-primary" type="submit"> Agregar Prueba</button>
              </div>
            </div>
          </div>
        </div>
</div>
</template>

<script>
export default {
  name: 'Caso',
};
</script>

<style>
.example-1 {
position: relative;
overflow-y: scroll;
height: 200px; }
</style>
