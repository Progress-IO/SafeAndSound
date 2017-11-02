function hslToRgb(h, s, l){
    h /= 360;
    s /= 100;
    l /= 100;

    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function gFillColors(n_data){
    var inner_colors = [];
    var border_colors = [];
    for(var i = 0; i < n_data; i++){
        var hue = gRandom(0, 360);
        var icolor = hslToRgb(((hue + (i + 1)*10) % 360), 85, 50);
        var bcolor = hslToRgb(((hue + (i + 1)*10) % 360), 85, 40);

        inner_colors.push("rgb(" + icolor[0] + ", " + icolor[1] + ", " + icolor[2] + ")");
        border_colors.push("rgb(" + bcolor[0] + ", " + bcolor[1] + ", " + bcolor[2] + ")");
    }

    return [inner_colors, border_colors];
}

function gRandom(min, max){
    return Math.floor((Math.random() * max) + min);
}

var ctx_report = $("#report_chart")[0].getContext("2d");
var ctx_transport = $("#transport_chart")[0].getContext("2d");
var ctx_suspectReport = $("#suspectReport_chart")[0].getContext("2d");


var report_values = [];
var report_c_values = []
var transport_values = [];
var suspect_c_values = [];

var reportVsSuspect_Keys = [];

for(key in reports){
    report_values.push(reports[key]);
}

for(key in report_c){
    report_c_values.push(report_c[key]);
    suspect_c_values.push(suspect_c[key]);
    reportVsSuspect_Keys.push(key.split(" ")[0]);
}

var arr_transport = [];
for(key in transport_c){
    transport_values.push(transport_c[key]);
    arr_transport.push([key, transport_c[key]]);
}

function Comparator(a, b) {
  if (a[1] > b[1]) return -1;
  if (a[1] < b[1]) return 1;
  return 0;
}

arr_transport = arr_transport.sort(Comparator);

var arr_t_keys = [];
var arr_t_values = [];
for(var i = 0; i < arr_transport.length; i++){
    arr_t_keys.push(arr_transport[i][0]);
    arr_t_values.push(arr_transport[i][1]);
}

var report_colors = gFillColors(report_values.length);

var transport_chart = new Chart(ctx_transport, {
    type: 'horizontalBar',
    data: {
        labels: arr_t_keys,
        datasets: [{
            label: "",
            data: arr_t_values,
            backgroundColor: "rgba(34, 81, 198, 0.75)",
            borderColor: "rgba(34, 81, 198, 1)",
            borderWidth : 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    min: 0
                }
            }]
        }
    }
});

var report_chart = new Chart(ctx_report,{
    type: 'bar',
    data: {
        labels: Object.keys(reports),
        datasets: [{
            label: "",
            data: report_values,
            backgroundColor: report_colors[0],
            borderColor: report_colors[1],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 0
                }
            }]
        }
    }
});


var suspectReport_chart = new Chart(ctx_suspectReport, {
    type: 'line',
    data: {
        labels: reportVsSuspect_Keys,
        datasets: [
            {
                label: "Report",
                data: report_c_values,
                backgroundColor: "rgba(32, 137, 209, 0.65)",
                borderColor: "#007bcf",
                borderWidth: 1,
                fillOpacity: .3
            },
            {
                label: "Suspect",
                data: suspect_c_values,
                backgroundColor: "rgba(195, 40, 40, 0.65)",
                borderColor: "#c30000",
                borderWidth: 1,
                fillOpacity: .3
            }
        ]
    },
    options:{
        backgroundColor: {
            fill: "transparent"
        }
    }
});

$("#filter_svsr").on("change", function(){
    var data = $("#filter_svsr").val();
    var report_c_values = []
    var suspect_c_values = []
    var reportVsSuspect_Keys = [];

    var i = 0;
    for(key in report_c){
        report_c_values.push(report_c[key]);
        suspect_c_values.push(suspect_c[key]);
        reportVsSuspect_Keys.push(key.split(" ")[0]);


        i++;
        if(i == data) break;
    }

    suspectReport_chart.data.labels = reportVsSuspect_Keys;
    suspectReport_chart.data.datasets[0].data = report_c_values;
    suspectReport_chart.data.datasets[1].data = suspect_c_values;

    suspectReport_chart.update();

});
