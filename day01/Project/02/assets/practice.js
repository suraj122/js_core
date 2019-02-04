// Log message in console saying "I'm Learning Javascript"

console.log("I'm learning JavaScript");

// var name = "Mark";  "Mark" is a string.  What is name?

// name is a variable that store a string value i.e. "Mark"

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin;
let name;
name = "John";
admin = name;

alert(admin)
;
// Use alert function to to show a message saying “Hello World”  https://javascript.info/alert-prompt-confirm

alert("Hello World");

// Write a function which uses prompt to take the name of person and greets them. i.e "Welcome Arun"

function yourName() {
	let name = prompt("Enter your name.", "");
	alert("Welcome " + name);
}

yourName();


// Modify the previous program such that only the users Alice and Bob are greeted with their names.
function user() {
	let name = prompt("Enter your name", "");
	if (name == "Bob" || name == "Alice") {
		alert("Welcome " + name);
	} else {
		alert("Welcome");
	}
}

user();

// Find the error if any (var product cost = 3.45;)

// Write a function that takes 'user' as an argument and log a message in console saying "Hello Sam, How are you doing?" if name of the user passed is "Sam"

function hello(user) {
	if (user == "Sam") {
		console.log("Hello Sam, How are you doing?");
	} else {
		console.log("hello " + user);
	}
}

hello("Sam");

// Right or Wrong
//   "Hello World" right
//   'Hello World" wrong
//   "Hello World' wrong
//   'Hello World' right

// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.

let inputLength = prompt("Enter something", "");
alert(inputLength.length);

// Age of the owner
var age = 26;

// Calculate the age of the dog if owner's age is 7 times of dog
let dogAge = age / 7;

// Use console.log() function to log the age of the dog
console.log(dogAge);

// Marks and max marks of the student
var studentScore = 41;
var maxScore = 120;
// Calculate the percentage of marks the student got
let percentage = (studentScore * maxScore) / 100;

// log the percentage in console using console.log()
console.log(percentage);

var city = "Dharamshala";
var country = "India";
// Make a function which can alert the message "Dharamshala, India"

function showMessage() {
	alert(city + ", " + country);
}
showMessage();
