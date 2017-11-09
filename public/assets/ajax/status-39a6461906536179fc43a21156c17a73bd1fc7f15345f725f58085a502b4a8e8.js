var data;
var address;
var sort_by;
var reverse;

$(document).ready(function(){
    $("#reverse").on("change", function(){
        get_values();
        ajax_call();
    });

    $("#search_keyword").bind("input", function(){
        get_values();
        ajax_call();
    });

    $("#address_keyword").bind("input", function(){
        get_values();
        ajax_call();
    });

    $("#sort_by").on("change", function(){
        get_values();
        ajax_call();
    });

});

function get_values(){
    data = $("#search_keyword").val();
    address = $("#address_keyword").val();
    sort_by = $("#sort_by").val();
    reverse =  $('#reverse').prop('checked') ? "true" : "false";
}

function ajax_call(){
    $.ajax({
        dataType: "json",
        url: "/users_panel/status",
        type: "GET",
        data: {data, sort_by, address, reverse},

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

        if("tipo" in response[i]){
            info += "<td>" + "<a href='../reports/" + response[i]["id"] + "'><h6 class='status_type_report'>" + "Crime" + "</h6> </td>";
        }else{
            info += "<td>" + "<a href='../suspects/" + response[i]["id"] + "'><h6 class='status_type_suspect'>" + "Suspect" + "</h6> </td>";
        }

        info += "</tr>";
    }

    $("#status_body").html(info);
    $(".xdetails_content").each(function(){
        $(this).text($(this).text().substring(0, 130) + "...");
    });
}
;
