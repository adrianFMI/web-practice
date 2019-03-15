"use strict"
console.log("cheking");
$(document).ready(function () {
    var close = $("#close");
    var imgs = ["thumbnail.jpg", "sea-thumbnail.jpg", "thumbnail.jpg"];
    var bigImg = ["wall-animal-dog-pet.jpg","sea.jpeg","wall-animal-dog-pet.jpg"];
    close.click(function () {
        lightbox.css("display", "none");
    });

    for (let i = 0; i < imgs.length; i++) {
        var imgId = "image" + i;
        //$("body").append("<img id='" + imgId + "' class='gallery' src='images/" + imgs[i] + "'>");
        $("body").append(`<img id='${imgId}' class='gallery' src='images/${imgs[i]}' alt='images'>`);
        $("#" + imgId).click(function () {
            $("body").append("<div id='lightbox'></div>");
            var lightbox = $("#lightbox");
            lightbox.css("width", "100%");
            lightbox.css("height", "100%");
            lightbox.css("background-color", "rgba(0, 0 ,0 ,.75)");
            lightbox.css("display", "block");
            
            lightbox.append(`<img src='images/${bigImg[i]}' alt='images'>`);

            lightbox.click(function () {
                lightbox.remove();
            });
        });
    }

});
