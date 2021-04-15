let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.469921198890507, lng: -99.1221121217982},
    zoom: 16,
  });
   // Create the search box and link it to the UI element.
   const input = document.getElementById("pac-input");
   const searchBox = new google.maps.places.SearchBox(input);
   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

function findMe(){
  //Obtenemos latitud y longitud
  function localizacion(posicion){

    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;
    console.log(latitude,longitude);
  }

  function error(){
    output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";

  }

  navigator.geolocation.getCurrentPosition(localizacion,error);
}


function fn_cp(){
  let cp=$("#cpPrin").val();
  //console.log($('#formCpMapa').serialize());
  if(cp!='' && cp.length==5){
    $.ajax({
      //data:{'cp':cp},
      type : 'POST',
      url:"http://localhost:9300/arbCp",
      data: $('#formCpMapa').serialize(),
      processData: false,
      //contentType: "application/json",
      beforeSend:function(){},
      success:function(res){
        console.log(JSON.parse(res));
      },   
      error: function (request, status, error) {
        console.log(request.responseText);
      },
    })
  }else{
    alert("No a colocado un Codigo Postal valido");
  }
}



