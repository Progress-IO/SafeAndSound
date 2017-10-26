$(document).ready(function(){

    // Agregar margen segun tamanio de header
    var margin_top_header = $(".header").height();
    var margin_left_side = $(".side_bar").width();

    var nav_width = 200;

    $(".main").css("margin-top", margin_top_header);
    $(".main").css("margin-left", margin_left_side);
    $(".link_menu").css("display", "none");

    $("#expand").click(function(){

        $(".side_bar").toggleClass("side_bar_toggle");

        if($(".side_bar").hasClass("side_bar_toggle")){
            console.log("going in");
            margin_left_side = nav_width;

            $("#expand_icon").text("navigate_before");
            $(".main").css("margin-left", margin_left_side);
            setTimeout(function() {
                $(".link_menu").css("display", "inline-block");
            }, 200);

        }else{
            console.log("going out");
            margin_left_side = 80;
            $("#expand_icon").text("navigate_next");

            $(".main").css("margin-left", margin_left_side);
            $(".link_menu").css("display", "none");
        }


    });

    $(function(){
        $(".activation").on("click", function(){
            $(this).toggleClass("ac_red");
        });
    });

    
});
