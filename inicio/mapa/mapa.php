<!DOCTYPE html>
<html>
  <head>
    <script src="micro/static/js/jquery/jquery-3.5.1.js"></script>
    <script src="micro/static/js/bootstrap/bootstrap.js"></script>
    <link href="micro/static/css/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <title>Simple Map</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link href="views/css/iniAlgoMas.css"  rel="stylesheet" type="text/css" />
    <script src="js/iniAlgoMas.js"></script>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg colorPrimario">
      <a class="navbar-brand" href="#">
        <img src="img/logo.JPG" style="width: 46px" />
      </a>
    </nav>

    <div id="map"></div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              TUS PEDIDOS A LA PUERTA DE TU CASA
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="formCpMapa">
              <div class="form-row">
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control mb-2 form-control-lg shadow-sm p-3 bg-white rounded text-black-50"
                    id="cpPrin"
                    name="cpPrin"
                    placeholder="Ingresa  tu codigo postal"
                  />
                </div>
                <div class="col-auto" style="left: -14px">
                  <button type="button" onclick="fn_cp()"
                    class="btn mb-2 btn-lg shadow-sm colorPrimario text-white">
                    Buscar
                  </button>
                </div>
              </div>
              <img src="img/gps.png" style="width: 18px" />
              <a href="#">
                <label class="text-danger" onclick="findMe()" id="ubicacion">
                    Utilizar mi ubicacion
                </label>
              </a>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>

    <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAB8dpPl21YyPualbIfLl84IEBW6kiWd_w&callback=initMap&libraries=&v=weekly"
      async
    ></script>

    <script>
      $(document).ready(function () {
        $("#exampleModal").modal("toggle");
      });
    </script>
  </body>
</html>
