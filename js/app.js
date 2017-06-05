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


$(document).ready(initMap);
