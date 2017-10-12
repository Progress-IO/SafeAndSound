var map;
var bogota = {lat: 4.624335, lng: -74.063644};
var bogota2 = {lat: 4.625276063521595, lng: -74.07729107946778};

var m_start, m_finish;

function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
    var directionsService = new google.maps.DirectionsService;
    var geocoder = new google.maps.Geocoder();

      map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: bogota,
      title: "Calculate route"
  });

  directionsDisplay.setMap(map);


  $("#start_marker").one("click", function(){
      m_start = addMarker(bogota, img_marker_start, "<strong> Start of route </strong>");
  });

  $("#finish_marker").one("click", function(){
      m_finish = addMarker(bogota2, img_marker_finish, "<strong> End of route </strong>");
  });

  $("#calc_route_1").on("click", function(){
        var st, fn;
        var mode = $("#route_mode").val();
      if(typeof m_start != 'undefined' && typeof m_finish != 'undefined'){
          st = new google.maps.LatLng(m_start.getPosition().lat(), m_start.getPosition().lng());
          fn = new google.maps.LatLng(m_finish.getPosition().lat(), m_finish.getPosition().lng());

          $("#route_origin_latitude").val(m_start.getPosition().lat());
          $("#route_origin_longitude").val(m_start.getPosition().lng());

          $("#route_destination_latitude").val(m_finish.getPosition().lat());
          $("#route_destination_longitude").val(m_finish.getPosition().lng());
          calculateAndDisplayRoute(directionsService, directionsDisplay, st, fn, mode);
      }
  });

  $("#calc_route_2").on("click", function(){
      var st, fn;
      var mode = $("#route_mode").val();

      if($("#origin_address").val() == "" || $("#origin_address").val() == undefined){
          Materialize.toast("Origin address isn't set", 4000, 'orange rounded');
      }

      if($("#destination_address").val() == "" || $("#origin_address").val() == undefined){
          Materialize.toast("Destination address isn't set", 4000, 'orange rounded');
      }

      if($("#origin_address").val() != "" && $("#destination_address").val() != "" && $("#destination_address").val() != undefined && $("#origin_address").val() != undefined){
          //   Clear all markers

          geocodeAddress(geocoder, map, $("#origin_address").val(), true,function(mydata){
              st = getMarkerLocation(mydata);
              geocodeAddress(geocoder, map, $("#destination_address").val(), false,function(xdata){
                  fn = getMarkerLocation(xdata);
                  calculateAndDisplayRoute(directionsService, directionsDisplay, st, fn, mode);

                  $("#route_origin_latitude").val(mydata.getPosition().lat());
                  $("#route_origin_longitude").val(mydata.getPosition().lng());

                  $("#route_destination_latitude").val(xdata.getPosition().lat());
                  $("#route_destination_longitude").val(xdata.getPosition().lng());

              });
          });
      }


  });

}

function getMarkerLocation(marker){
    return new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng());
}

function addMarker(location, image, details) {
    var marker;
    marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image,
        draggable: true
    });

    infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(marker, 'click', function() {
       map.setCenter(marker.getPosition());
       infowindow.setContent(details);
       infowindow.open(map, marker);
    });

    return marker;
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, start, end, mode) {
 directionsService.route({
   origin: start,
   destination: end,
   travelMode: mode
 }, function(response, status) {
   if (status == 'OK') {
     directionsDisplay.setDirections(response);
   } else {
       var base = "<i class=\"material-icons tiny\">error</i><strong>  Error: </strong>   ";
       status += "  ";
       Materialize.toast(base + status, 4000, 'red rounded');
   }
 });
 }

function geocodeAddress(geocoder, resultsMap, address, first, callback) {
    var gmarker;
    geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      gmarker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
        icon: first ? img_marker_start : img_marker_finish
      });

      callback(gmarker);
    } else {
      Materialize.toast('Geocode was not successful for the following reason: ' + status, 4000, 'red rounded');
    }
  });

}

$("#calc_route").click(function() {
    $('html,body').animate({
        scrollTop: $("#map").offset().top},
        'slow');
});
