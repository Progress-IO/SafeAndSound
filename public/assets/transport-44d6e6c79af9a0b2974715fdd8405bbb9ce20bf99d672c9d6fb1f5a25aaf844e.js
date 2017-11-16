$(document).ready(function(){

    

$("#button_t").click(function(){
     var item_s = $("select#selector option").filter(":selected").val();
   
    if (item_s == "peaton" || item_s == "carro" || item_s == "bicicleta")
    {
       
        window.location.href="/reports/new"+ "#" + item_s;
    }
    else
    {
      
        window.location.href= "/reports/new2"+ "#" + item_s;
    }

});





})
;
