//Question(4.5)
//Write a program that asks user for their marks in HSC exam and tells them their percentage.
//Assume the maximum marks in HSC to be 1050.
function remCalculate() {
	let userInput = parseInt(document.querySelector("input").value);
	let Mark = 1050;
	let per = (userInput * 100)/1050;
	alert(per + "%");
}
//Answer(2 ka output 0.19047619047619047%)