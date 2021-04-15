/* globals Chart:false, feather:false 

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
*/
var count_click = 0;
function count_click_add(){
  count_click +=1;
  console.log(count_click)
  switch (count_click){
    case 1:
      document.getElementById("v-pills-tab").innerHTML = '<a class="nav-link active navUno" id="v-pills-home-tabDE" data-toggle="pill" href="#v-pills-homeDE" role="tab" aria-controls="v-pills-homeDE" aria-selected="true">Tienda1</a><a class="nav-link navUno" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Tienda2</a>'
      break;
    case 2:
        document.getElementById("v-pills-tab").innerHTML = '<a class="nav-link active navUno" id="v-pills-home-tabDE" data-toggle="pill" href="#v-pills-homeDE" role="tab" aria-controls="v-pills-homeDE" aria-selected="true">Tienda1</a><a class="nav-link navUno" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Tienda2</a><a class="nav-link navUno" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Tienda3</a>'
        break;
    case 3:
          document.getElementById("v-pills-tab").innerHTML = '<a class="nav-link active navUno" id="v-pills-home-tabDE" data-toggle="pill" href="#v-pills-homeDE" role="tab" aria-controls="v-pills-homeDE" aria-selected="true">Tienda1</a><a class="nav-link navUno" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Tienda2</a><a class="nav-link navUno" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Tienda3</a><a class="nav-link navUno" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Tienda4</a>'
          break;
    default:
        alert("¿demasiadas tiendas acaso eres oxxo?")
  }
}

function atab2(){
  document.getElementById("profile-tab").click();
}
function atab3(){
  document.getElementById("contact-tab").click();
}
function atab4(){
  document.getElementById("contact-tab2").click();
}
function rtab1(){
  document.getElementById("home-tab").click();
}
function rtab2(){
  document.getElementById("profile-tab").click();
}
function rtab3(){
  document.getElementById("contact-tab").click();
}
/*function Agregar(count_click){
  if(count_click=1){
      document.getElementById("v-pills-tab").innerHTML = '<a class="nav-link active navUno" id="v-pills-home-tabDE" data-toggle="pill" href="#v-pills-homeDE" role="tab" aria-controls="v-pills-homeDE" aria-selected="true">Tienda1</a><a class="nav-link navUno" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Tienda2</a>';
  }else if(count_click=2){
    document.getElementById("v-pills-tab").innerHTML = '<a class="nav-link active navUno" id="v-pills-home-tabDE" data-toggle="pill" href="#v-pills-homeDE" role="tab" aria-controls="v-pills-homeDE" aria-selected="true">Tienda1</a><a class="nav-link navUno" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Tienda2</a><a class="nav-link navUno" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Tienda3</a>';
  }else if(count_click=3){
    document.getElementById("v-pills-tab").innerHTML = '<a class="nav-link active navUno" id="v-pills-home-tabDE" data-toggle="pill" href="#v-pills-homeDE" role="tab" aria-controls="v-pills-homeDE" aria-selected="true">Tienda1</a><a class="nav-link navUno" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Tienda2</a><a class="nav-link navUno" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Tienda3</a><a class="nav-link navUno" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Tienda4</a>';
  }else if(count_click=4){
    document.getElementById("v-pills-tab").innerHTML = '<a class="nav-link active navUno" id="v-pills-home-tabDE" data-toggle="pill" href="#v-pills-homeDE" role="tab" aria-controls="v-pills-homeDE" aria-selected="true">Tienda1</a><a class="nav-link navUno" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Tienda2</a><a class="nav-link navUno" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Tienda3</a><a class="nav-link navUno" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Tienda4</a><a class="nav-link navUno" id="v-pills-settings2-tab" data-toggle="pill" href="#v-pills-settings2" role="tab" aria-controls="v-pills-settings2" aria-selected="false">Tienda5</a>'
  }
}*/

//AÑADE UN CLICK AL EJECUTAR LA FUNCIÓN


//MUESTRA CUANTOS CLICK LLEVAMOS



