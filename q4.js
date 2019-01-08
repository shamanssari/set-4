//Question(4.4)
//Create a fruit-cost calculator. It should ask the user for the number of Apples, Bananas and Mangoes and prints the total cost of buying these. The cost per fruit is given in the table below:
//Fruit            Cost per item
//Apple              Rs. 10
//Banana             Rs. 15
//Mango              Rs. 8
//Use three input elements withtype="number" and a buttonwith onclick attribute.
let apple=10;
let banana=15;
let mango=8;
let noOfApple;
let noOfBanana;
let noOfMango;
function costCalculate() {
	  noOfApple= parseInt(document.querySelector("#apple").value);
	  noOfBanana= parseInt(document.querySelector("#banana").value);
      noOfMango= parseInt(document.querySelector("#mango").value);
      let totalCost = noOfApple * apple + noOfBanana * banana + noOfMango * mango;
      alert(totalCost);
	
}
//Answer(1+1+1 ka output 33)
