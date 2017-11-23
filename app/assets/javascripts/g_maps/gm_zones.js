var map;
var bogota = {lat: 4.624335, lng: -74.0637};
var marker;
var cityCircle;

function addMarker(location) {

    marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: true,
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    });

    cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: marker.position,
        radius: 600
    });

    cityCircle.bindTo('center', marker, 'position');

}

function initMap() {
      map = new google.maps.Map(document.querySelector('#map'), {
      zoom: 14,
      center: bogota,
      title: "My zones"
  });

  $("#btnaddmarker").click(function(){
      addMarker(bogota, img_marker_suspect);
      $(this).fadeOut(500);
  });

  $("#btn-location").click(function(){
      var crime_lng, crime_lat;
      crime_lng = crime_marker.getPosition().lng();
      crime_lat = crime_marker.getPosition().lat();

      $("#suspect_latitude").val(crime_lat);
      $("#suspect_longitude").val(crime_lng);

  });

}

var color_palette = [
    "#23B216",
    "#004BEB",
    "#6C3BC4",
    "#FFCA2B",
    "#F80831",
];

var url_palette = [
    "green-dot.png",
    "blue-dot.png",
    "purple-dot.png",
    "yellow-dot.png",
    "red-dot.png"
]

$(function(){
    // Inicializacion de campo radio
    $("#my_zone_radius").val(600);
    // Inicializacion de campo color
    $("#my_zone_color").val("#F80831");

    for(var i = 0; i < color_palette.length; i++){
        var class_name = "c_elem";
        var elem = "<div class='" + class_name + "'></div>";

        $("#color_palette").append(elem);
        $(".c_elem:nth-of-type(" + (i + 1) + ")").css("background-color", color_palette[i]);
    }

    $("#insert_marker").click(function(){
        $(this).animate({
            height: "0px",
            opacity: 0.3
        }, 500);

        addMarker(bogota);

    });

    $(".c_elem").click(function(){

        var idx = $(this).index();

        marker.setIcon("http://maps.google.com/mapfiles/ms/icons/" + url_palette[idx]);
        cityCircle.setOptions({
            fillColor: color_palette[idx],
            strokeColor: color_palette[idx]
        });

        $("#my_zone_color").val(color_palette[idx]);
    });

    $("#radius").change(function(){


        if(marker == undefined){

            Materialize.toast("Agrega un marcador primero", 3500, 'red rounded');

        }else{
            var val = $("#radius").text().trim();

            cityCircle.setOptions({
                radius: val * 100
            });

            $("#my_zone_radius").val(val * 100);
        }
    });


    $("#fix_marker").click(function(){
        $("#my_zone_longitude").val(marker.position.lng());
        $("#my_zone_latitude").val(marker.position.lat());
    });

});
