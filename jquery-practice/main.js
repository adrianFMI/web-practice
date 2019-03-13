/*
jquery selector
.css()
margin-left +=100
*/

console.log("test");

var mLeft = $("#left");
var mRight = $("#right");
var mUp = $("#up");
var mDown = $("#down");
var ball = $("#ball");

$("#ball").css("background-color", "blue");
$("#ball").css("height", "200px");
$("#ball").css("width", "200px");
$("#ball").css("color", "yellow");
$("#ball").css("text-align", "center");
$("#ball").css("font-size", "24px");
$("#ball").css("line-height", "200px");

$("#ball").css({
    "font-family": "Arial",
    "border-radius": "50%",
    "text-decoration": "line-through"
});

$("#ball").click(function () {
    console.log("Bang");
});


$("#ball").hover(function () {
    $("#ball").css("cursor", "pointer");
    $("#ball").css("background-color", "blue");
}, function () {
    $("#ball").css("background-color", "darkgrey");
});

mLeft.click(function () {
    ball.css("margin-left", "-=50px");
});

mRight.click(function () {
    ball.css("margin-left", "+=50px");
});

mDown.click(function () {
    ball.css("margin-top", "+=50px");
});

mUp.click(function () {
    ball.css("margin-top", "-=50px");
});




$(document).keydown(function (eventData) {
    if ( eventData.keyCode == 37) {
        ball.css("margin-left", "-=50px");
    }else if(eventData.keyCode == 38){
        ball.css("margin-top", "-=50px");
    }else if(eventData.keyCode == 39){
        ball.css("margin-left", "+=50px");
    }else if(eventData.keyCode == 40){
        ball.css("margin-top", "+=50px");
    }
});
