
$(document).ready(function(){

    var extract =  window.location.hash.substring(1);
    $("tipo_t").val(extract);
    console.log("es", extract)

});
