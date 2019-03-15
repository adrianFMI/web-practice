"use strict"
console.log("cheking");
$(document).ready(function () {
    var img1 = $("#image1");
    var lightbox = $("#lightbox");
    var close = $("#close");
    var imgs = ["thumbnail.jpg", "sea-thumbnail.jpg", "thumbnail.jpg"];
    img1.click(function () {
        lightbox.css("width", "100%");
        lightbox.css("height", "100%");
        lightbox.css("background-color", "rgba(0, 0 ,0 ,.75)");
        lightbox.css("display", "block");
    });
    close.click(function () {
        lightbox.css("display", "none");
    });

    for (let i = 0; i < imgs.length; i++) {
        $("body").append("<img id='image" + i + "' class='gallery' src='images/" + imgs[i] + "'>");
        $("#image" + i).click(function () {
            console.log("clicked " + i);
        });
    }
});
