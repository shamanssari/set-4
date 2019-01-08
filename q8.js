//Question(4.8)
//Write a program that asks user for their first name. When the "Log In" button is clicked, it should display an alert saying "Welcome, <user's first name>!".
//Use an input element with type="text" and a Log In button with the onclick attribute.
let loggedIn = true;
function logIn() {
	let firstName = document.querySelector("input").value;
	if (loggedIn === true) {
		alert("welcome " + firstName)
	}
}
//Answer(shama ka output welcome shama)