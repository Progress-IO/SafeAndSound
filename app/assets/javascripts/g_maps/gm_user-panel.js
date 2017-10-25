var map;
var heatmap;
var bogota = {lat: 4.624335, lng: -74.063644};
var infowindow;

function addMarker(location, image, details) {
    var crime_marker;
    crime_marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image,
    });

    infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(crime_marker, 'click', function() {
       map.setCenter(crime_marker.getPosition());

       var pdetails = "<strong> Details: </strong>" + details;

       if( details.length == 1 ){
           console.log("In!");
           pdetails = pdetails + "   <i> No info available </i>   ";
       }

       infowindow.setContent(pdetails);
       infowindow.open(map, crime_marker);
    });
}

function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: bogota,
      title: "crime"
  });

    showMarkers(data);
    showMarkers_susp(data_susp);
    showMarkers_transp(data_transp);

    heatmap = new google.maps.visualization.HeatmapLayer({
      data: getPoints(data),
      map: map,
      radius: 50
    });

}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') == 100 ? 50 : 100);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function showMarkers(data){
    for(var i = 0; i < data.length; i++){
        loc_crime = {lat: data[i][0], lng: data[i][1]};
        addMarker(loc_crime, img_marker_robbery, data[i][2]);
    }
}



function getPoints(data){
    var points = [];
    for(var i = 0; i < data.length; i++){
        points.push(new google.maps.LatLng(data[i][0], data[i][1]));
    }
    return points;
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function showMarkers_susp(data){
    for(var i = 0; i < data.length; i++){
        loc_crime = {lat: data[i][0], lng: data[i][1]};
        addMarker(loc_crime, img_marker_suspect, data[i][2]);
    }
}

function showMarkers_transp(data){
    for(var i = 0; i < data.length; i++){
        loc_crime = {lat: data[i][0], lng: data[i][1]};
        addMarker(loc_crime, img_marker_bus, data[i][2]);
    }
}

// $("#btnaddmarker").click(function(){
//     addMarker(bogota, img_marker_robbery);
//     $(this).fadeOut(500);
//
// });
