$(document).ready(function(){

var item_s = $("select#selector option").filter(":selected").val();;
$("#button_t").click(function(){
    if (item_s == "Peaton" || item_s == "Carro" || item_s == "Bicicleta")
    {
        window.location.href="/reports/new";
    }
    else
    {
        window.location.href= "/transports/new";
    }

});



})