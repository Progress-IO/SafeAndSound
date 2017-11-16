var map;
var route_markers = [];
var response_routes = [];
var response_transit = [];

var safest_of_all;

window.extractRoute;
var bogota = {
    lat: 4.624335,
    lng: -74.063644
};
var bogota2 = {
    lat: 4.625276063521595,
    lng: -74.07729107946778
};

var m_start, m_finish;

function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer({
        suppressMarkers: true
    });
    var directionsService = new google.maps.DirectionsService;
    var geocoder = new google.maps.Geocoder();

    map = new google.maps.Map(document.querySelector('.map_report#map'), {
        zoom: 14,
        center: bogota,
        title: "Calculate route"
    });

    directionsDisplay.setMap(map);

    $("#calc_route_1").click(function(){
        $(".main").animate({scrollTop: 0}, "slow");
    });

    $("#calc_route_2").click(function(){
        $(".main").animate({scrollTop: 0}, "slow");
    });


    $("#start_marker").one("click", function () {
        m_start = addMarker(bogota, img_marker_start, "<strong> Start of route </strong>");
    });

    $("#finish_marker").one("click", function () {
        m_finish = addMarker(bogota2, img_marker_finish, "<strong> End of route </strong>");
    });

    $("#calc_route_1").on("click", function () {
        var st, fn;
        var mode = $("#route_mode").val();
        if (typeof m_start != 'undefined' && typeof m_finish != 'undefined') {
            st = new google.maps.LatLng(m_start.getPosition().lat(), m_start.getPosition().lng());
            fn = new google.maps.LatLng(m_finish.getPosition().lat(), m_finish.getPosition().lng());

            $("#route_origin_latitude").val(m_start.getPosition().lat());
            $("#route_origin_longitude").val(m_start.getPosition().lng());

            $("#route_destination_latitude").val(m_finish.getPosition().lat());
            $("#route_destination_longitude").val(m_finish.getPosition().lng());
            calculateAndDisplayRoute(directionsService, directionsDisplay, st, fn, mode);



        }
    });

    $("#calc_route_2").on("click", function () {
        var st, fn;
        var mode = $("#route_mode").val();

        if ($("#origin_address").val() == "" || $("#origin_address").val() == undefined) {
            Materialize.toast("Origin address isn't set", 4000, 'orange rounded');
        }

        if ($("#destination_address").val() == "" || $("#origin_address").val() == undefined) {
            Materialize.toast("Destination address isn't set", 4000, 'orange rounded');
        }

        if ($("#origin_address").val() != "" && $("#destination_address").val() != "" && $("#destination_address").val() != undefined && $("#origin_address").val() != undefined) {
            //   Clear all markers

            geocodeAddress(geocoder, map, $("#origin_address").val(), true, function (mydata) {
                st = getMarkerLocation(mydata);
                geocodeAddress(geocoder, map, $("#destination_address").val(), false, function (xdata) {
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

function getMarkerLocation(marker) {
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

    google.maps.event.addListener(marker, 'click', function () {
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
        travelMode: mode,
        provideRouteAlternatives: true
    }, function (response, status) {
        if (status == 'OK') {


            if (mode == "TRANSIT") {
                //Se sacan los valores de las rutas que sugiere de la API de google maps
                var apiRoutes = {}; //Diccionario para almacenar los valores de las rutas
                var rutas = response.routes;
                //console.log(response);
                //Se miran todas las rutas sugeridas
                for (var k = 0; k < rutas.length; k++) {
                    var auxRoute = {}; //Diccionario auxiliar para almacenar los valores de cada ruta
                    var cont = 0;
                    //Se miran los steps de cada ruta
                    for (var i = 0; i < rutas[k].legs[0].steps.length; i++) {
                        var opcion = rutas[k].legs[0].steps[i];
                        //Si el step es de transporte que lo almacene en el diccionario auxiliar
                        if ("transit" in opcion) {
                            auxRoute[cont] = opcion.transit.line["short_name"];
                            //Se mete en un diccionario auxiliar por si la ruta sugiere transbordos
                            cont = cont + 1;
                        }
                    }

                    apiRoutes[k] = auxRoute;

                }



                var insecureRoutes = securityTransportRoutes(apiRoutes);

                // console.log("nost", insecureRoutes);
                // directionsDisplay.setDirections(response);


                if (response_transit.length != 0) {
                    for (var i = 0; i < response_transit.length; i++) {
                        response_transit[i].setMap(null);
                    }
                    response_transit = [];
                }

                if (response_routes.length != 0) {
                    for (var i = 0; i < response_routes.length; i++) {
                        response_routes[i].setMap(null);
                    }
                    response_routes = [];
                }

                if (route_markers.length != 0) {
                    for (let i = 0; i < route_markers.length; i++) {
                        route_markers[i].setMap(null);
                    }
                }

                for (var i = 0, len = response.routes.length; i < len; i++) {
                    response_transit.push(
                        new google.maps.DirectionsRenderer({
                            map: map,
                            directions: response,
                            routeIndex: i,
                            suppressMarkers: true,
                            polylineOptions: {
                                strokeColor: i == insecureRoutes[0][0] ? "green" : "red",
                                strokeOpacity: 0.7,
                                strokeWeight: 5
                            },
                        })

                    );
                }

                safest_of_all = response.routes[insecureRoutes[0][0]];

                console.log("+ segura" , safest_of_all);
                $("#only_safe").change(function(){
                    if($("#only_safe").is(":checked")){
                        for (var i = 0; i < response_transit.length; i++) {
                            if(response_transit[i].routeIndex != insecureRoutes[0][0]){
                                response_transit[i].setMap(null);
                            }
                        }
                    }else{
                        for (var i = 0; i < response_transit.length; i++) {
                            if(response_transit[i].routeIndex != insecureRoutes[0][0]){
                                response_transit[i].setMap(map);
                            }
                        }
                    }
                });

                var idx_s = insecureRoutes[0][0];
                var transport_order = [];

                // console.log("Safest: " + idx_s);
                for (var i = 0; i < response.routes[idx_s].legs.length; i++) {
                    for (var j = 0; j < response.routes[idx_s].legs[i].steps.length; j++) {
                        // console.log("Length routes steps " + response.routes[idx_s].legs[i].steps.length);
                        if(response.routes[idx_s].legs[i].steps[j].transit !== undefined){
                            // console.log("Ruta >>>: " + response.routes[idx_s].legs[i].steps[j].transit.line["short_name"]);
                            transport_order.push(response.routes[idx_s].legs[i].steps[j].transit.line["short_name"]);
                        }
                    }
                }

                // console.log(response.routes[idx_s]);

                $(".transport_order").empty();
                $(".transport_order").append("<label style='display:block; margin: 5px'> Order of safest lines </label>");
                for (var i = 0; i < transport_order.length; i++) {
                    // transport_order[i]
                    $(".transport_order").append("<div class='show_route'>"+"<strong>" + transport_order[i] + "</strong><br>"+"</div>");
                    if(transport_order.length > 1 && i >= 0 && i != transport_order.length - 1){
                        $(".transport_order").append("<div class='show_route_divisor'>" + ">" + "</div>");
                    }
                }

                // console.log(response);
                // response.routes.transit.line["short_name"]

            } else {
                generate_selectors(response.routes.length);
                var idx_safestRoute = safestRoute(response);
                // console.log("Calculated safest: " + (idx_safestRoute + 1));
                safest_of_all = response.routes[idx_safestRoute];
                console.log("+ segura" , safest_of_all);

                if (response_routes.length != 0) {
                    for (var i = 0; i < response_routes.length; i++) {
                        response_routes[i].setMap(null);
                    }
                    response_routes = [];
                }

                if (response_transit.length != 0) {
                    for (var i = 0; i < response_transit.length; i++) {
                        response_transit[i].setMap(null);
                    }
                    response_transit = [];
                }

                $(".transport_order").empty();
                for (var i = 0, len = response.routes.length; i < len; i++) {
                    response_routes.push(
                        new google.maps.DirectionsRenderer({
                            suppressMarkers: true,
                            polylineOptions: {
                                strokeColor: i == idx_safestRoute ? "green" : "red",
                                strokeOpacity: 0.7,
                                strokeWeight: 5
                            },
                            map: map,
                            directions: response,
                            routeIndex: i
                        })
                    )

                }


                $("#only_safe").change(function(){
                    if($("#only_safe").is(":checked")){
                        for (var i = 0; i < response_routes.length; i++) {
                            if(response_routes[i].routeIndex != idx_safestRoute){
                                response_routes[i].setMap(null);
                            }
                        }

                        if (route_markers.length != 0) {
                            for (let i = 0; i < route_markers.length; i++) {
                                if(route_markers[i].label != idx_safestRoute + 1){
                                    route_markers[i].setMap(null);
                                }
                            }
                        }
                    }else{
                        for (var i = 0; i < response_routes.length; i++) {
                            if(response_routes[i].routeIndex != idx_safestRoute){
                                response_routes[i].setMap(map);
                            }
                        }

                        if (route_markers.length != 0) {
                            for (let i = 0; i < route_markers.length; i++) {
                                if(route_markers[i].label != idx_safestRoute + 1){
                                    route_markers[i].setMap(map);
                                }
                            }
                        }

                    }
                });


                $("#response").val(JSON.stringify(response.routes[idx_safestRoute]));
                $("#route_index").val(idx_safestRoute);
            }
        } else {
            var base = "<i class=\"material-icons tiny\">error</i><strong>  Error: </strong>   ";
            status += "  ";
            Materialize.toast(base + status, 4000, 'red rounded');
        }
    });
}

function safestRoute(response) {
    var nroutes = response.routes.length;
    var best_route = 0;
    var total_route = 0;
    var max_value = Number.NEGATIVE_INFINITY;


    if (route_markers.length != 0) {
        for (let i = 0; i < route_markers.length; i++) {
            route_markers[i].setMap(null);
        }
    }


    for (var i = 0; i < nroutes; i++) {

        if (undefined !== response.routes[i].overview_path) {

            for (var j = 0; j < response.routes[i].overview_path.length; j++) {
                var lat = response.routes[i].overview_path[j].lat();
                var lng = response.routes[i].overview_path[j].lng();


                if ((j % Math.floor(response.routes[i].overview_path.length / 3)) == 0 && j != 0 && j != response.routes[i].overview_path.length - 1) {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(lat, lng),
                        label: i + 1 + "",
                        map: map
                    });

                    route_markers.push(marker);
                }

                for (var k = 0; k < report_positions.length; k++) {
                    total_route += Math.abs(report_positions[k]["lat"] - lat);
                    total_route += Math.abs(report_positions[k]["lng"] - lng);
                }
            }
        }


        if (total_route > max_value) {
            max_value = total_route;
            best_route = i;
        }
        total_route = 0;
    }

    return best_route;
}



function securityTransportRoutes(routeApi) {

    var ocurrences = {};
    var most_safety = [];
    for (var i = 0; i < Object.keys(routeApi).length; i++) {
        var auxRoute = routeApi[i];
        var count_total = 0;
        for (var k = 0; k < Object.keys(auxRoute).length; k++) {
            name_route = auxRoute[k];
            // console.log("Nombre ruta",name_route);
            if (ocurrences[name_route] == undefined) {
                var filtrar = transportRoutes.filter(function (x) {
                    return x.id_route == name_route
                });
                ocurrences[name_route] = filtrar.length;
            }
            count_total = count_total + ocurrences[name_route];
        }
        most_safety.push([i, count_total]);
    }
    most_safety.sort(function (a, b) {
        return a[1] - b[1];
    });

    return most_safety;
}

function geocodeAddress(geocoder, resultsMap, address, first, callback) {
    var gmarker;
    geocoder.geocode({
        'address': address
    }, function (results, status) {
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

function generate_selectors(n, best){

    var $selectDropdown =
    $("#mySelect")
    .empty()
    .html(' ');

    // add new value

    for(var i = 0; i < n; i++){
        $selectDropdown.append(
            $("<option></option>")
            .attr("value",(i))
            .text((i + 1))
        );    var $selectDropdown =
        $("#mySelect")
        .empty()
        .html(' ');

    }

    $('#mySelect option[value="' + best + '"]').prop('selected', true);

    // $selectDropdown.trigger('contentChanged');
    $('select').material_select();
    // console.log("After...");
}

$('select').on('contentChanged', function() {
    console.log("Another...");
    // re-initialize (update)
    $(this).material_select();
});

$("#calc_route").click(function() {
    $('html,body').animate({
        scrollTop: $("#map").offset().top},
        'slow');
    });

    // $(function(){
    //     $('select').materlize_select();
    // });

    $("#mySelect").on("change", function(){
        console.log("Cambio a: ", $("mySelect").value());
        $("#route_index").val($("mySelect").value());
    });

$("#pdf_btn").click(function(){



});
