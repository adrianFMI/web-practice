/*var food1 = "sesame chicken";
var food2 = "ramen";
var food3 = "pizza";
var you = prompt("Which is your favorite food").toLowerCase();
if (you === food1) {
    console.log("I like " + food1 + " too");
} else if (you === food2) {
    console.log("I like " + food2 + " too");
} else if (you === food3) {
    console.log("I like " + food3 + " too");
} else {
    console.log("I prefer something like " + food1 + ", " + food2 + " or " + food3 + ". But " + you + " is good too.");
}*/
//& % ~ ||-or &&-and symbols for conditions
/*var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dat1 = months[5];
var dat2 = months[6];
months[6] = dat1;
months[5] = dat2;

console.log(months);*/
/*
-----------------------------------------------------------------------------------
var show = "";
var show2 = [];
var min = 0;
for (var i = 0; i <= 18; i++) {
    if (i <= 9) {
        show = show + "*";
        show2[i] = show;
        console.log(show2[i]);
    } else {
        min = min + 2;
        console.log(show2[i - min]);
    }
}
 
function myFuntion() {

}
---------------------------------------------------------------------------------
*/
var option = prompt("Question 1? (yes/no)").toLowerCase();

if (option === "yes") { //--------------------------------------firtsYES----------------------------------------------------------------------
    option = prompt("Question 2y? (yes/no)").toLowerCase();
    if (option === "yes") { //---------------------------------------------------2doYES--------------------------------------------------------
        option = prompt("Question 3y? (yes/no)").toLowerCase();
        if (option === "yes") {
            option = prompt("Question 4y? (yes/no)").toLowerCase();
        } else if (option === "no") {
            option = prompt("Question 4n? (yes/no)").toLowerCase();
        } else {//-----------------------------------------------------------------invalid 3---------------------------------------------------
            alert("No valid answer you died");
        }
    } else if (option === "no") { //---------------------------------------------2doNO---------------------------------------------------------
        option = prompt("Question 3n? (yes/no)").toLowerCase();
        if (option === "yes") {
            option = prompt("Question 4y? (yes/no)").toLowerCase();
        } else if (option === "no") {
            option = prompt("Question 4n? (yes/no)").toLowerCase();
        } else { //-------------------------------------------------------------Invalid 3-------------------------------------------------------
            alert("No valid answer you died");
        }
    } else { //-----------------------------------------------------------------Invalid 2-------------------------------------------------------
        alert("No valid answer you died");
    } //------------------------------------------------------------FirstNO--------------------------------------------------------------------
} else if (option === "no") {
    option = prompt("Question 2n? (yes/no)").toLowerCase();
    if (option === "yes") { //--------------------------------------------------------2doYes---------------------------------------------------
        option = prompt("Question 3y? (yes/no)").toLowerCase();

    } else if (option === "no") { //--------------------------------------------------2doNo----------------------------------------------------
        option = prompt("Question 3n? (yes/no)").toLowerCase();

    } else { //-----------------------------------------------------------------------Invalid 2------------------------------------------------
        alert("No valid answer you died");
    }
} else { //------------------------------------------------------------invalid 1--------------------------------------------------------------
    alert("No valid answer you died");
}
