// Import any dependencies
var cityData = cities


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});
// We create the tile layer that will be the background of our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v11',
    accessToken: API_KEY
});

// Create a base layer for the maps
let baseMaps = {
    "Street View": streets,
    "Dark View": dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});

// Accessing airport data through JSON URL
let airportData = "https://raw.githubusercontent.com/MickMarch/mapping_earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data
d3.json(airportData).then(function (data) {
    console.log(data);
    // Creating a GeoJSON Layer with the retrieved data
    L.geoJSON(data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<h2>Airport Code: " + layer.feature.properties.faa + "</h2> <hr> <h2>Airport Name: " +
                layer.feature.properties.name + "</h2>")
        }
    }).addTo(map)
});


L.control.layers(baseMaps).addTo(map);
