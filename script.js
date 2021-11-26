
// init vars
let attr = "background-color"
let tag = "body"
$("#2").addClass('active');

// buttons functions
function setText() {
    attr = "color"
    tag = 'textarea'
    $("#1").addClass('active');
    $("#2").removeClass('active');
}

function setBackground() {
    attr = "background-color"
    tag = 'body'
    $("#2").addClass('active');
    $("#1").removeClass('active');
}

// slider function
$(function () {
    function hexFromRGB(r, g, b) {
        var hex = [
            r.toString(16),
            g.toString(16),
            b.toString(16)
        ];
        $.each(hex, function (nr, val) {
            if (val.length === 1) {
                hex[nr] = "0" + val;
            }
        });
        return hex.join("").toUpperCase();
    }
    function refreshSwatch() {
        var red = $("#red").slider("value"),
            green = $("#green").slider("value"),
            blue = $("#blue").slider("value"),
            hex = hexFromRGB(red, green, blue);
        $(tag).css(attr, "#" + hex);
    }

    $("#red, #green, #blue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch
    });
    $("#red").slider("value", 255);
    $("#green").slider("value", 140);
    $("#blue").slider("value", 60);
});