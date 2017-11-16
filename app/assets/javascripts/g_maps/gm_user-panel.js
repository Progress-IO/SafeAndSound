var map;
var heatmap;
var bogota = {lat: 4.624335, lng: -74.063644};
var infowindow;


function addMarker(location, image, details,report_url) {
    var crime_marker;
    crime_marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image,
    });
    
      
    infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(crime_marker, 'click', function() {
       map.setCenter(crime_marker.getPosition());

       var pdetails = "<strong> Detalles: </strong>" + details;
       var purl = "<br><a href=" + report_url+"><strong> Ver Reporte </strong></a>";
       var windowcontent = pdetails + purl;
       if( details.length == 1 ){
           console.log("In!");
           pdetails = pdetails + "   <i> No info available </i>   ";
       }

       infowindow.setContent(windowcontent);
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
    showMarkers_security(data_security);

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
        var modo = data[i][4];
        var details = data[i][2];
        console.log(modo);
        var image_report
        if (modo == "carro") {
            image_report = img_marker_car;
        } else if (modo == "peaton") {
            image_report = img_marker_peaton;
        } else if (modo == "sitp" || modo == "transmilenio") {
            console.log("hoi" + data[i][5]);
            details = "Numero de ruta: " + data[i][5] + " " +  data[i][2];
            image_report = img_marker_bus;
        } else if (modo == "taxi") {
            image_report = img_marker_taxi;
        } else if (modo == "bicicleta") {
            image_report = img_marker_bici;
        }
        loc_crime = {lat: data[i][0], lng: data[i][1]};
        addMarker(loc_crime, image_report, details , data[i][3]);
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
        addMarker(loc_crime, img_marker_suspect, data[i][2], data[i][3]);
    }
}

function showMarkers_transp(data){
    for(var i = 0; i < data.length; i++){
        var num_route = data[i][5];
        var details = "Numero de ruta = " + num_route + " " + data[i][2];
        loc_crime = {lat: data[i][0], lng: data[i][1]};
        addMarker(loc_crime, img_marker_bus, details , data[i][3]);
    }
}

function showMarkers_security(data){
    for(var i = 0; i < data.length; i++){
        loc_crime = {lat: data[i][0], lng: data[i][1]};
        addMarker(loc_crime, img_marker_shield, data[i][2], data[i][3]);
    }
}
