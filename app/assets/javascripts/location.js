$(function(){
      $("#suspects,#reports").on("click",".location", function(){
            
            var latitude = ($(this).children(".latitude").html());
            var longitude = ($(this ).children(".longitude").html());
            var myLatlng = new google.maps.LatLng(parseFloat(latitude),parseFloat(longitude));
            var latLng = myLatlng ;// returns LatLng object
           
             for (var i=0; i<reportes.length; i++) {
        if (myLatlng.equals(reportes[i].getPosition())) {
            
          reportes[i].setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function(){ reportes[i].setAnimation(null); }, 750);
            map.panTo(latLng); // setCenter takes a LatLng object
            break;
        }
         
       // else {console.log( "no funciona"+ reportes[i].position+ "no es igual a" + myLatlng)}
      }
            
            
           
             
            
        });
    });