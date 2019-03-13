"use strict";
console.log("linked");
$(document).ready(function () {

    var submit = $("#submit");
    var input = $("input");
    var valid = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var rst = $("#results");

    submit.click(function () {

        var bday = input.val();

        if (bday.length == 10) {

            var currentchar = bday.charAt(0);
            var invalid;


            for (var cc = 0; cc < bday.length; cc++) {


                if (2 == cc || 5 == cc) {
                    if (bday.charAt(cc) == "/") {
                        invalid = false;
                    } else {
                        invalid = true;
                        break;
                    }
                } else {
                    //caracter checker
                    for (var i = 0; i < valid.length; i++) {
                        if (valid[i] == bday.charAt(cc)) {
                            invalid = false;
                            break;
                        } else {
                            invalid = true;
                        }
                    }
                }
            }


            if (invalid == false) {
                $("#results").html(currentchar + " is valid");
            } else {
                $("#results").html(currentchar + " is invalid");
            }

        } else {
            rst.html("This is no a valid date");
        }

    });

});
