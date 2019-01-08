//Question(4.1)
//Write a program that prints the square of the number input by the user.
//.Use an input element with type="number" and a button with the onclick attribute.
function squareCalculate() {
	let userInput = document.querySelector("input").value;
	let square = userInput * userInput;
	alert(square);
}
//Answer(2 ka output 4)