$(document).ready(function(){

 

$("#button_t").click(function(){
    var item_s = $("select#selector option").filter(":selected").val();
   
    if (item_s == "Peaton" || item_s == "Carro" || item_s == "Bicicleta")
    {
        
        window.location.href="/reports/new"+ "#" + item_s;
    }
    else
    {
       
        window.location.href= "/transports/new" + "#" + item_s;
    }

});





})
;
