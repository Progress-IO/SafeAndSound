$(document).ready(function() {
var mymap = L.map('mapid').setView([4.7110, -74.0721], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic3BlbmFzIiwiYSI6ImNqYTE4MzdrNDkyZWMyeWxndG91anp4MWcifQ.F0fyB0gB2ivsaHcX-t-FbQ'
}).addTo(mymap);

var marker = L.marker([4.7110, -74.0721]).addTo(mymap);

// create a red polyline from an array of LatLng points
var latlngs = [
    [4.71, -74.07],
    [4.75, -74.12],
    [4.764, -74.223]
];
var polyline = L.polyline(latlngs, {
    color: 'red'
}).addTo(mymap);
// zoom the map to the polyline
mymap.fitBounds(polyline.getBounds());
})