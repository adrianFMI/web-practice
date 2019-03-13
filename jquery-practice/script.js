$(document).ready(function () {

    console.log("This is working");

    /*$("#imgTest").css("width", "40%");
    $("#imgTest").css("border-radius", "10%");
    $("p").css("text-align", "center");
    $("#imgTest").css("border", "5px solid green");

    $("#imgTest").hover(function () {
        $("#imgTest").css("cursor", "pointer");
        $("#imgTest").css("width", "75%");
        $("#imgTest").css("border", "5px solid red");
    }, function () {
        $("#imgTest").css("width", "40%");
        $("#imgTest").css("border", "5px solid green");
    });*/

    var box = $("#box");
    var btn = $("#create");

    btn.click(function () {
        box.html('<p>I replace the old div</p>');
    });

    box.css("width", "200px");
    box.css("height", "200px");
    box.css("background-color", "blue");

    box.click(function () {
        alert("you click me");
    });


});
