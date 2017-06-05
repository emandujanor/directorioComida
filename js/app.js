/*inicia mapa*/
function initMap() {
var uluru = {lat: 19.4176848, lng: -99.16699};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 18,
  center: uluru
});
var marker = new google.maps.Marker({
  position: uluru,
  map: map
});
}

var lugares = [
	{
		"nombre": "La Tecla",
		"lat": "19.4176848",
		"log": "-99.16699",
    "direccion": " Durango 186, Cuauhtémoc, Roma Norte, Roma Nte., 06700 Ciudad de México, CDMX, México ",
	},
	{
    "nombre": "Barracuda Dinner",
    "lat": "19.4160459",
    "log": "-99.1701702",
    "direccion": " Av Nuevo León 4-A, Condesa, Hipódromo, 06140 Cuauhtémoc, CDMX, México ",
	},
  {
    "nombre": "El Manjar",
    "lat": "19.4173654",
    "log": "-99.1677495",
    "direccion": "Esq Valladolid, Tabasco 316, Cuauhtémoc, 06700 Ciudad de México, CDMX, México",
  },
  {
    "nombre": "Maque",
    "lat": "19.4111019",
    "log": "-99.171121",
    "direccion": "Av. Ozuluama No.4, Cuauhtemoc, Hipódromo Condessa, Hipódromo, 06100 Ciudad de México, CDMX, México",
  },
  {
    "nombre": "Be Boop Diner",
    "lat": "19.412652",
    "log": "-99.1644853",
    "direccion": "Eje 3 Poniente Medellín 188, Roma Norte, Roma Nte., 06700 Cuauthémoc, CDMX, México",
  }
];

var plantillaLugares =   '<div class="col s12 m7">' +
    '<h2 class="header">__nombre__</h2>' +
    '<div class="card horizontal">' +
      '<div class="card-image">' +
        '<img src="http://via.placeholder.com/120x120">' +
      '</div>' +
      '<div class="card-stacked">' +
        '<div class="card-content">' +
          '<p>__direccion__</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';

  var mostrarLugares = function (lugares) {
  	var plantillaFinal = "";
  	lugares.forEach(function (lugares) {
  		plantillaFinal += plantillaLugares.replace("__nombre__", lugares.nombre)
  			.replace("__direccion__", lugares.direccion);
  	});
  	$("#contenedorTarjetas").html(plantillaFinal);
  };


$(document).ready(function(){
  mostrarLugares(lugares);
});
