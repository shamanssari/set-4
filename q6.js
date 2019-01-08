//Question(4.6)
//Write a program that asks user for their marks in Math, English and Computer Skills, and tells them whether they have Passed the TechKaro admission Test or not.
//To pass the TechKaro admission test, you need:
//.more than 20 marks in Math.
//.more than 10 marks in English.
//.more than 50 marks in Computer Skills.
let mathMark = 20;
let engMark = 10;
let compMark = 50;
function maxMarks() {
	let numb1=parseInt(document.querySelector("#numb1").value);
	let numb2=parseInt(document.querySelector("#numb2").value);
	let numb3=parseInt(document.querySelector("#numb3").value);
	if (numb1 >= mathMark && numb2 >= engMark && numb3 >= compMark) { 
		alert("pass");
	}else{
		alert("fail");
	}
}
//Answer(5,6,7 ka output fail)