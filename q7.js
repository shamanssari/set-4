//Question(4.7)
//The speed limit of Shahrah-e-Faisal is 60 km/hr. Write a program that asks the user for their car's speed and tells whether it is Overspeeding or not.
let maxSpeed = 60;
let mySpeed = 40;
function carSpeed(){
	let firstName = document.querySelector("input").value;
	if (mySpeed > maxSpeed) {
		alert("OVERSPEEDING");
    } else {
	    alert("NOT");
    }
}
//Answer(15 ka output NOT)