
$(document).ready(function(){
    
    // Agregar margen segun tamanio de header
    var margin_top_header = $(".header").height();
    var margin_left_side = $(".side_bar").width();
    
    var nav_width = 200;
    var activity_width = $(".side-nav-report").width();
    $(".main").css("margin-top", margin_top_header);
    $(".main").css("margin-left", margin_left_side);
    
    if($(".side-nav-report").length > 0){$(".main").css("margin-right", activity_width)};
    
    
    $(".link_menu").css("display", "none");

    $("#expand").click(function(){

        $(".side_bar").toggleClass("side_bar_toggle");

        if ($(".side_bar").hasClass("side_bar_toggle")){
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
    
    ///////////////////////////////////////////////

     $("#expand_icon2").click(function(){

        $(".side-nav-report").toggleClass(".side-nav-report-toggle");

        if(!$(".side-nav-report").hasClass(".side-nav-report-toggle")){
            console.log("going in");
            margin_left_side = nav_width;
            
            
            setTimeout(function() {
                $("#closeicon").text("close");
            $(".side-nav-report").css("width", activity_width);
                $("#listapanel,.side-nav-report .row ").css("opacity","");
                 $(".main").css("margin-right", activity_width);
                
            }, 300);
             
             setTimeout(function() {google.maps.event.trigger(map, "resize");
               
             },305);
           

        }else{
            console.log("going out");
            margin_left_side = 30;
            $("#closeicon").text("navigate_before");

            $(".side-nav-report").css("width", margin_left_side);
            $("#listapanel,.side-nav-report .row ").css("opacity",0);
           
            $(".main").css("margin-right", margin_left_side);
             
             setTimeout(function() {google.maps.event.trigger(map, "resize");
                                   
             },305);
              
        }


    }); 
    
     
});


 