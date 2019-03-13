/*var response = prompt("Type anything.");
var myFirstVariable = 100000;

var mysecondVariable = 6789;

var result = myFirstVariable * mysecondVariable;

console.log(result);
console.log(response);*/
var firstPart = "Hello ";
var name = prompt("Type your name");
var secondPart = ", How are you today?";

var sentence = firstPart + name + secondPart;
console.log(sentence);
var isItRaining = prompt("Is it raining");
console.log(typeof isItRaining);
if (isItRaining == "Yes") {
    console.log("Carefull, its raining");
}else if(isItRaining=="yes"){
    console.log("learn english");
} else {
    console.log("Go outside, its not raining");
}