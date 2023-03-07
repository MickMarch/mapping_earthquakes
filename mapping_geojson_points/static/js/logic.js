// Import any dependencies
var cityData = cities

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([38.5460, -94.7313], 5);

// Coordinates for each point to be used in the line.
let line = [
    [37.6152, -122.3899],
    [30.1974292, -97.6663058],
    [43.6777176, -79.6248196],
    [45.3236351, -75.6637567],
    [40.641766, -73.780968],
    [28.428611, -81.308611]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: "8"

}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // Alternate Styling vvvv
    // id: 'mapbox/streets-v11',
    // id: 'mapbox/dark-v11',
    // id: 'mapbox/satellite-streets-v11',
    id: 'mapbox/light-v11',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



