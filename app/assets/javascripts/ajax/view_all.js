// Crime Report variables
var data;
var address;
var sort_by;
var reverse;
var type;

// On change
$(document).ready(function(){
    $(".reverse").on("change", function(){
        get_values();
        ajax_call();
    });

    $(".search_keyword").bind("input", function(){
        get_values();
        ajax_call();
    });

    $("select.search_keyword").on("change", function(){
        get_values();
        ajax_call();
    });

    $(".address_keyword").bind("input", function(){
        get_values();
        ajax_call();
    });

    $(".sort_by").on("change", function(){
        get_values();
        ajax_call();
    });
});

// Get values of all the fields
function get_values(){
    data = $("li.active input#search_keyword").val();
    address = $("li.active input#address_keyword").val();
    sort_by = $("li.active select#sort_by").val();
    reverse =  $('li.active input#reverse').prop('checked') ? "true" : "false";
    type = $('li.active input:hidden').val();
    if(type == "routes"){
        data = $("li.active select#search_keyword").val();
    }

}

function ajax_call(){
    $.ajax({
        dataType: "json",
        url: "/users_panel/view_all",
        type: "GET",
        data: {data, sort_by, address, reverse, type},
        cache: false,

        success: function(response){
            display_filter(response);
        },

        error: function(xhr, status){
            console.log("Status " + status, "xhr: " + xhr);
            Materialize.toast(status, 3500, 'red rounded');
        }

    });
}

function display_filter(response){
    
        let info = "";
    
        if(type != "routes"){
            for(var i = 0; i < response.length; i++){
                info += "<tr>";
                info += "<td>" + response[i]["fecha"].split("T")[0] + "</td>";
                info += "<td>" + response[i]["address"] + "</td>";
                info += "<td class='xdetails_content'>" + response[i]["details"] + "</td>";
        
                if(response[i]["images"] !== undefined && response[i]["images"].length != 0){
                    let url = response[i]["images"][0].small["url"];
                    info += "<td> <img class='img_prev' src='" + url + "'></td>";
                }else{
                    info += "<td> </td>";
                }
                let url = "/" + type + "/" + response[i]["id"];
                info += "<td><a class='bontonnormal' href=" + url + ">Mostrar</a></td>";
                info += "</tr>";
            }
        }else{
            for(var i = 0; i < response.length; i++){
                info += "<tr>";
                info += "<td>" + response[i]["date"].split("T")[0] + "</td>";
                info += "<td>" + response[i]["route"] + "</td>";
                info += "<td>" + response[i]["mode"] + "</td>";
                let url = "/" + type + "/" + response[i]["id"];
                info += "<td><a class='bontonnormal' href=" + url + ">Mostrar</a></td>";
                info += "</tr>";
            }
        }
        $("li.active #status_body").hide().fadeIn(500).html(info);
        $(".xdetails_content").each(function(){
            $(this).text($(this).text().substring(0, 130) + "...");
        });
    }
    