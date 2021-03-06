var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log ("answer:", _.without(array, 3))

console.log(_);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomizeBackground");

console.log("yep");

function changeGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor(){
	return '#' + (Math.floor(Math.random()*0xFFFFFF<<0)).toString(16);
}

function randomizeGradient(){
	color1.value = randomColor();
	color2.value = randomColor();
	changeGradient();
	console.log(color1.value);
	console.log(color2.value);
}

changeGradient();

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
button.addEventListener("click", randomizeGradient);