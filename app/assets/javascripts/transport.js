$(document).ready(function(){

    

$("#button_t").click(function(){
     var item_s = $("select#selector option").filter(":selected").val();
   
    if (item_s == "carro" || item_s == "peaton" || item_s == "bicicleta" || item_s == "sitp" || item_s == "transmilenio" || item_s == "taxi" && item_s != "seleccione")
    {
       
        window.location.href="/reports/new"+ "#" + item_s;
    }
    else
    {
        window.location.href = "/users_panel/report/select_report"
    }
   

});





})