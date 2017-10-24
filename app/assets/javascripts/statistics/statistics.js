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
var ctx_suspectReport = $("#suspectReport_chart")[0].getContext("2d");

var report_values = [];
for(key in reports){
    report_values.push(reports[key]);
}

var report_colors = gFillColors(report_values.length);
console.log("Colors", report_colors);

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

// var suspectReport_chart = new Chart(ctx_suspectReport, {
//     type: 'line',
//     data: {
//         labels:
//     }
//
