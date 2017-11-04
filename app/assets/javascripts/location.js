$(function(){
        $("#suspects,#reports,#transports").on("click",".location", function(){
            
            var latitude = ($(this).children(".latitude").html());
            var longitude = ($(this ).children(".longitude").html());
            var myLatlng = new google.maps.LatLng(parseFloat(latitude),parseFloat(longitude));
            var latLng = myLatlng ;// returns LatLng object
            map.panTo(latLng); // setCenter takes a LatLng object
             
             console.log(latitude);
        });
    });