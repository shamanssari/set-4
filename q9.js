//Question(4.9)
//Create a calculator that asks user to enter 2 numbers and can calculate the sum, difference, multiplication, division and remainder. 
//Use two input elements withtype="number" and five buttonelements, each with an onclick attribute.
function addCalculate() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	alert("The sum is" + (numb1+numb2));
}
function diffCalculate() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	alert("The diff is" + (numb1-numb2));
}
function multCalculate() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	alert("The mult is" + (numb1*numb2));
}
function divCalculate() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	alert("The div is" + (numb1/numb2));
}
function remCalculate() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	alert("The rem is" + (numb1%numb2));
}
//Answer(2+2 ka output 4)
//Answer(2-2 ka output 0)
//Answer(2*2 ka output 4)
//Answer(2/2 ka output 1)
//Answer(2%2 ka output 0)