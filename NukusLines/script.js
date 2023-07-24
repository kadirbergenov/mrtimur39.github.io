// Create a map instance
var map = L.map('map').setView([51.505, -0.09], 13);

// Create a tile layer to display the map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

//var routeCoordinates = [
 // [42.4618479,59.6165722],
  //[42.471069, 59.595527]
//];

//var route = L.polyline(routeCoordinates, { color: 'red' }).addTo(map);

//map.fitBounds(route.getBounds());

var searchInput = document.getElementById('search-input');
var searchButton = document.getElementById('search-button');



window.addEventListener('resize', function () {
  map.invalidateSize();
});