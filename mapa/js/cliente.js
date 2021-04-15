class Localizacion {

    constructor(callback) {
        if (navigator.geolocation) {
            //obtener localizacion
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                //console.log(this.latitude);
                //console.log(this.longitude);
                callback();
            })
        } else {
            alert("Tu navegador no soporta geolocaliazcion :c")
        }
    }
}

google.maps.event.addDomListener(window, "load", function() {
    const ubicacion = new Localizacion(() => {

        const myLatLng = { lat: ubicacion.latitude, lng: ubicacion.longitude, }
        var texto =
            '<h3>Nombre de la tienda</h3>' +
            '<p>Pequeña descripcion de la tienda o su lema</p>' +
            `<div class="d-flex justify-content-center mb-3"><img src="/mapa/Views/img/agua.png" alt="" class="imgRedonda">
        <img src="/mapa/Views/img/refrescos.png" alt="" class="imgRedonda">
        <img src="/mapa/Views/img/cerveza.png" alt="" class="imgRedonda"></div>` +
            `<a href="#" class="btn btn-outline-warning d-flex justify-content-center negrita"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
        </svg></a>`;
        //imprime en consola mi latitud y mi longitud
        console.log(ubicacion.latitude);
        console.log(ubicacion.longitude);
        const opciones = {
            center: myLatLng,
            zoom: 15,
        }
        var map = document.getElementById('map');

        const mapa = new google.maps.Map(map, opciones);
        //crea marcador
        const marcador = new google.maps.Marker({
            position: myLatLng,
            map: mapa,
            title: "Mi ubicacion",
            //draggable:true,
        });

        var info = new google.maps.InfoWindow({
            content: texto
        });
        //despliega info al dar click
        marcador.addListener('click', function() {
            info.open(mapa, marcador)
        });
        //latitud y longitud al arrastrar marcador
        /*google.maps.event.addListener(marcador,'drag',function(event){
            console.log(event.myLatLng.latitude());
            console.log(event.myLatLng.longitude());
        });*/
        var autocomp = document.getElementById('autocomp');
        const search = new google.maps.places.Autocomplete(autocomp);
        search.bindTo("bounds", mapa);
    });

});