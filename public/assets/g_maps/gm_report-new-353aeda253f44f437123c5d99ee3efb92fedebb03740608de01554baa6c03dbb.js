var map;
var bogota = {
    lat: 4.624335,
    lng: -74.063644
};
var crime_marker;

var styles = [{
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [{
        "color": "#f7f1df"
    }]
}, {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [{
        "color": "#d0e3b4"
    }]
}, {
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi.business",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi.medical",
    "elementType": "geometry",
    "stylers": [{
        "color": "#fbd3da"
    }]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
        "color": "#bde6ab"
    }]
}, {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#ffe15f"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#efd151"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#ffffff"
    }]
}, {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "black"
    }]
}, {
    "featureType": "transit.station.airport",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#cfb2db"
    }]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#a2daf2"
    }]
}];
var styles2 = [{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#004358"
    }]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
        "color": "#1f8a70"
    }]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
        "color": "#1f8a70"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
        "color": "#fd7400"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#1f8a70"
    }, {
        "lightness": -20
    }]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#1f8a70"
    }, {
        "lightness": -17
    }]
}, {
    "elementType": "labels.text.stroke",
    "stylers": [{
        "color": "#ffffff"
    }, {
        "visibility": "on"
    }, {
        "weight": 0.9
    }]
}, {
    "elementType": "labels.text.fill",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#ffffff"
    }]
}, {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{
        "visibility": "simplified"
    }]
}, {
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
        "color": "#1f8a70"
    }, {
        "lightness": -10
    }]
}, {}, {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [{
        "color": "#1f8a70"
    }, {
        "weight": 0.7
    }]
}];

function addMarker(location, image) {

    crime_marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image,
        draggable: true
    });

}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: bogota,
        title: "crime",
        styles: styles
    });

    $("#btnaddmarker").click(function () {
        var modo = window.location.href.split("#")[1];
        var image_report
        if (modo == "carro") {
            image_report = img_marker_car;
        } else if (modo == "peaton") {
            image_report = img_marker_peaton;
        } else if (modo == "sitp" || modo == "transmilenio") {
            image_report = img_marker_bus;
        } else if (modo == "taxi") {
            image_report = img_marker_taxi;
        } else if (modo == "bicicleta") {
            image_report = img_marker_bici;
        }
        addMarker(bogota, image_report);
        $(this).fadeOut(500);
    });

    $("#btn-location").click(function () {
        var crime_lng, crime_lat;
        crime_lng = crime_marker.getPosition().lng();
        crime_lat = crime_marker.getPosition().lat();

        $("#report_latitude").val(crime_lat);
        $("#report_longitude").val(crime_lng);

    });

}
;
