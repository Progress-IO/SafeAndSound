var map;
var bogota = {lat: 4.624335, lng: -74.063644};
var infowindow;

function addMarker(location, image) {
    var crime_marker;
    crime_marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image,
    });

    infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(crime_marker, 'click', function() {
       map.setCenter(crime_marker.getPosition());
       infowindow.setContent("Probando...");
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

}

function showMarkers(data){
    for(var i = 0; i < data.length; i++){
        loc_crime = {lat: data[i][0], lng: data[i][1]};
        addMarker(loc_crime, img_marker_robbery);
    }
}

// $("#btnaddmarker").click(function(){
//     addMarker(bogota, img_marker_robbery);
//     $(this).fadeOut(500);
//
// });
