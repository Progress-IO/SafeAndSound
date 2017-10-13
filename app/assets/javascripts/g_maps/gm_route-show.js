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
        title: "Show route"
    });

    directionsDisplay.setMap(map);
    var start = new google.maps.LatLng(og_lat, og_lng);
    var end   = new google.maps.LatLng(fn_lat, fn_lng);

    addMarker(start, img_marker_start, "<strong> Start of route </strong>");
    addMarker(end, img_marker_finish, "<strong> End of route </strong>");

    calculateAndDisplayRoute(directionsService, directionsDisplay, start, end, mode);
}

function getMarkerLocation(marker){
    return new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng());
}

function addMarker(location, image, details) {
    var marker;
    marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image
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
