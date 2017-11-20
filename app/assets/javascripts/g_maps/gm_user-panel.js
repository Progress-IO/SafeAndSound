var map;
var heatmap;
var bogota = {lat: 4.624335, lng: -74.063644};
var infowindow;
var reportes = []

function addMarker(location, image, details,report_url,report_type,transport_type) {
    var crime_marker;
    crime_marker = new google.maps.Marker({
        position: location,
        map: map,
        category: report_type,
        transp: transport_type,
        icon: image,
    });
    
    reportes.push(crime_marker);  
    infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(crime_marker, 'click', function() {
       map.panTo(crime_marker.getPosition());

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

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(data),
        map: map,
        radius: 50
    });
    $('.filtros input').click(function () {
    boxclick(this, this.value);
  }); 
  
  
  
  
  /*****************/
    
  /**************/

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
        addMarker(loc_crime, img_marker_robbery, data[i][2] , data[i][3],data[i][4],data[i][5]);
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
        addMarker(loc_crime, img_marker_suspect, data[i][2], data[i][3],data[i][4],data[i][5]);
    }
}

function showMarkers_transp(data){
    for(var i = 0; i < data.length; i++){
        loc_crime = {lat: data[i][0], lng: data[i][1]};
        addMarker(loc_crime, img_marker_bus, data[i][2], data[i][3],data[i][4],data[i][5]);
    }
}
/**
 * Function to filter markers by category


filterMarkers = function (category) {
    for (i = 0; i < data.length+ data_susp.length; i++) {
        marker = reportes[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0 ) {
            marker.setVisible(true);
        }
        // Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
}
 */
    function show(category) {
      for (var i=0; i<reportes.length; i++) {
        if (reportes[i].category == category || reportes[i].transp == category) {
          reportes[i].setVisible(true);
        }
      }
      document.getElementById(category+"box").checked = true;
    }

    function hide(category) {
      for (var i=0; i<reportes.length; i++) {
        if (reportes[i].category == category|| reportes[i].transp == category) {
          reportes[i].setVisible(false);
        }
      }
      document.getElementById(category+"box").checked = false;
      infowindow.close();
    }

    function boxclick(box,category) {
      if (box.checked) {
        show(category);
      } else {
        hide(category);
      }
    }


