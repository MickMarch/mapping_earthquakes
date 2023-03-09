// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v12',
    accessToken: API_KEY
});
// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    accessToken: API_KEY
});

// Create a base layer for the maps
let baseMaps = {
    "Street View": streets,
    "Satellite Streets View": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

// Accessing airport data through JSON URL
let torontoHoods = "https://raw.githubusercontent.com/MickMarch/mapping_earthquakes/main/torontoNeighborhoods.json";

var myStyle = {
    color: "blue",
    weight: 1,
    fillColor: "yellow"
}

// Grabbing our GeoJSON data
d3.json(torontoHoods).then(function (data) {
    console.log(data);
    // Creating a GeoJSON Layer with the retrieved data
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<h2>Neighborhood: " + layer.feature.properties.AREA_NAME + "</h2>")
        }
    }).addTo(map)
});


L.control.layers(baseMaps).addTo(map);
