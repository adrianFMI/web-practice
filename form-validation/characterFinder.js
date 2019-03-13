"use strict"
console.log("linked");
$(document).ready(function () {
    console.log("ready");
    var sentense = $("#sentence");
    var caracter = $("#caracter");
    var submit = $("#submit");
    var results = $("#results");
    //var validation;
    sentense.focusin(function () {
        sentense.val("");
    });
    caracter.focusin(function () {
        caracter.val("");
    });
    submit.click(function () {
        var inWord = sentense.val();
        var inChar = caracter.val();
        if (inChar.length == 1) {
            var found = "";
            var Numchar = 0;
            for (var charac = 0; charac < inWord.length; charac++) {
                if (inWord.charAt(charac) == inChar) {
                    Numchar = Numchar + 1;
                    found = found + charac + " ";
                } else {
                    results.html("Caracter no found in sentense");
                }
            }
            if (Numchar > 0) {
                results.html("Character found: " + Numchar + " times<br> In the positions: " + found);
            }
        } else {
            results.html("Invalid number of caracters");
        }
    });
});