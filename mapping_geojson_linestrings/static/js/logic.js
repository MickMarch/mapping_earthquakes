// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v12',
    accessToken: API_KEY
});
// We create the tile layer that will be the background of our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v11',
    accessToken: API_KEY
});
// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v11',
    accessToken: API_KEY
});



// Create a base layer for the maps
let baseMaps = {
    "Street View": streets,
    "Dark View": dark,
    "Light View": light
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80],
    zoom: 2,
    layers: [light]
});

// Accessing linestring data through JSON URL
let torontoData = "https://raw.githubusercontent.com/MickMarch/mapping_earthquakes/main/torontoRoutes.json"

var lineStyle = {
    "color": "lightyellow",
    "weight": "2"
}

// Grabbing our GeoJSON data
d3.json(torontoData).then(function (data) {
    console.log(data);
    // Creating a GeoJSON Layer with the retrieved data
    L.geoJSON(data, {
        style: lineStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<h2>Airline: " + layer.feature.properties.airline + "</h2> <hr> <h2>Destination: " +
                layer.feature.properties.dst + "</h2>")
        }
    }).addTo(map)
});


L.control.layers(baseMaps).addTo(map);
