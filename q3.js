//Question(4.3)
//Write a program that prints the sum of two numbers input by the user.
//.Use twoinput elements with type="number" and a button with the onclick attribute.
function addCalculate() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	alert("The sum is" + (numb1+numb2));
}
//Answer(2+2 ka output 4)