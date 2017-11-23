var map;
var bogota = {lat: 4.624335, lng: -74.0637};
var marker;
var cityCircle;

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
];

function addMarker(xlat, xlng, idx) {

    var location = {lat: xlat, lng: xlng};
    location = new google.maps.LatLng(xlat, xlng);


    console.log(xlat, xlng);
    console.log("idx", idx);

    marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: "http://maps.google.com/mapfiles/ms/icons/" + url_palette[idx]
    });


    cityCircle = new google.maps.Circle({
        strokeColor: color_palette[idx],
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor:  color_palette[idx],
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


  $(document).ready(function(){
      var idx = 0;
      for(var i = 0; i < color_palette.length; i++){
          if(color_palette[i] == color_base){
              idx = i;
              break;
          }
      }

      addMarker(lat, lng, idx);
  })


}
;
