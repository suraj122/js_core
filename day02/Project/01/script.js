// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”

// let password = prompt("Enter your password", "");
// let confirmPassword = prompt("Confirm your password", "");

// if(password === confirmPassword) {
// 	alert("Password validated");
// } else {
// 	alert("Password do not match");
// }

// Find the output of the following
// Logical AND operation
// true  && true;    true
// true  && false;   false
// false && true;    false
// false && false;   false

// Logical OR operation
// true  || true;    true
// true  || false;   true
// false || true;    true
// false || false;   false

// "foo" && "bar";   "bar"
// "bar" && "foo";   "foo"
// "foo" && "";      ""
// ""    && "foo";   ""

// "foo" || "bar";  "foo"
// "bar" || "foo";  "bar"
// "foo" || "";     "foo"
// ""    || "foo";  "foo"

// let isGuestOneVeg = false;
// let isGuestTwoVeg = false;
// isGuestOneVeg = confirm("Anyone is vegan?");
// isGuestTwoVeg = confirm("both of you are vegan?");

// If both are veg "Only offer up vegan dishes."
// At least one veg  "Make sure to offer up some vegan options."
// Else, "Offer up anything on the menu"

// if(isGuestTwoVeg) {
// 	alert("Only vegan dishes");
// } else if(isGuestOneVeg) {
// 	alert("Some vegan options")
// } else {
// 	alert("anything in the menu");
// }

// let temp = +prompt("Enter the temperature", "");

// 1. If temperature is less then 32 alert "It is freezing outside"
// 2. If the temperature is greater then 110 alert "It is hot outside"
// 3. else 'Go for it. It is pretty nice out'
// if(temp < 32) {
// 	alert("it is freezing outside");
// } else if (temp > 110) {
// 	alert("it is hot outside");
// } else {
// 	alert("Go for it. It is pretty nice out");
// }

// Output of this alert( alert(1) || 2 || alert(3) );

// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.

// function calc(a, b) {
// 	console.log(a + b);
// 	console.log(a - b);
// 	console.log(a * b);
// 	console.log(a / b);
// }
// calc(8, 2);

// Function to display a number if user enters negative number
// function negative() {
// 	let num = +prompt("Enter a negative number");
// 	if (num < 0) {
// 		alert(num);
// 	}
// }

// negative();

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
// let sum = 0;
// for(i = 0; i < 1000; i++) {
// 	if(i % 3 === 0 || i % 5 === 0) {
// 		sum = sum + i;
// 	}
// }
// console.log(sum);

// If user enters positive number, that number won't be displayed
// function positive() {
// 	let num = +prompt("Enter a positive number");
// 	if (num < 0) {
// 		alert(num);
// 	}
// }
// positive();

// Funnction to check whether an integer entered by the user is odd or even
// function checkEvenOdd() {
// 	let num = +prompt("Enter a number", 0);
// 	if(num % 2 === 0) {
// 		alert("Even Number");
// 	} else {
// 		alert("Odd Number");
// 	}
// }
// checkEvenOdd();

// Funnction to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12
// function checkEquality(a, b) {
// 	if(a < b) {
// 		alert(`${a} < ${b}`);
// 	} else if(a > b) {
// 		alert(`${a} > ${b}`)
// 	} else {
// 		alert(`${a} = ${b}`);
// 	}
// }
// checkEquality(60, 60);

// Funnction to Check Whether a Character is Vowel or Consonant
// let char = prompt("Enter an alphabet");
// switch(char) {
// 	case "a":
// 	case "A":
// 	case "e":
// 	case "E":
// 	case "i":
// 	case "I":
// 	case "o":
// 	case "O":
// 	case "u":
// 	case "U":
// 		alert("Vowel");
// 		break;

// 	default:
// 		alert("Consonant");
// }

// Funnction to Find the Largest Number Among Three Numbers
// function greaterNumber(x, y, z) {

// 	if(x > y && x > z) {
// 		alert(`${x} is greater`);
// 	} else if(y > x && y > z) {
// 		alert(`${y} is greater`);
// 	} else if(z > x && z > y){
// 		alert(`${z} is greater`);
// 	}

// }

// greaterNumber(80, 10, 60);

//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to 1.
// - TWO, if num is equal to 2.
// - THREE, if num is equal to 3.
// - FOUR, if num is equal to 4.
// - FIVE, if num is equal to 5.
// - SIX, if num is equal to 6.
// - SEVEN, if num is equal to 7.
// - EIGHT, if num is equal to 8.
// - NINE, if num is equal to 9.
// - PLEASE TRY AGAIN, if  is none of the above.

// let num = +(prompt("Enter a number"));
// switch(num) {
// 	case 1:
// 		alert("ONE");
// 		break;
// 	case 2:
// 		alert("TWO")
// 		break;
// 	case 3:
// 		alert("THREE");
// 		break;
// 	case 4:
// 		alert("FOUR");
// 		break;
// 	case 5:
// 		alert("FIVE")
// 		break;
// 	case 6:
// 		alert("SIX")
// 		break;
// 	case 7:
// 		alert("SEVEN");
// 		break;
// 	case 8:
// 		alert("EIGHT");
// 		break;
// 	case 9:
// 		alert("NINE");
// 		break;

// 	default:
// 		alert("PLEASE TRY AGAIN");
// }

// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30

// let tagMarks = document.querySelector(".marks");
// tagMarks.onclick = function handleClick() {

// 	let marks = prompt("Enter your marks");

// 	if(marks > 90) {
// 		alert("AA");
// 	} else if(marks > 80 && marks <= 90) {
// 		alert("AB");
// 	} else if(marks > 70 && marks <= 80) {
// 		alert("BB");
// 	} else if(marks > 60 && marks <= 70) {
// 		alert("BC");
// 	} else if(marks > 50 && marks <= 60) {
// 		alert("CC");
// 	} else if(marks > 40 && marks <= 50) {
// 		alert("CD");
// 	} else if(marks > 30 && marks <= 40) {
// 		alert("DD");
// 	} else if(marks <= 30) {
// 		alert("FF");
// 	} 
// }

// Function to generate Multiplication Table of a given number (use alert for number input)
// let generateTable = document.querySelector(".table");

// generateTable.onclick = function askNumber() {
// 	let num = +prompt("Enter any number");
// 	let result = 0;
// 	for(let i = 0; i < 10; i++) {
// 		result += num;
// 		alert(result);
// 	}
// }


// Function to calculate the Factorial of a Number
// let factNum = prompt("Enter a number");
// let factorial = 1;

// for(let i = 1; i <= factNum; i++ ) {
// 	factorial = factorial * i;
// }
// console.log(factorial);

// Output: var x = 10 + "1"; console.log(x); typeof x;
// var x = 10 + "1";
// console.log(x);
// alert(typeof x) // string

//  Solve: 225 % 6 = ? 3

// Take two numbers and what to do with that number from user.
// Define an object with these function (add, sub, multiply, divide). Perform the operation

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
let result = 0;
for(let i = 1; i <= 10; i++) {
	result = result + i;
	console.log(result);
}


// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// if else

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
// function greaterNum(a, b) {
// 	if(a > b) {
// 		alert(`The greater number of ${a} and ${b} is ${a}.`);
// 	} else if(a < b) {
// 		alert(`The greater number of ${a} and ${b} is ${b}.`)
// 	} else {
// 		alert(`Both ${a} and ${b} are equal`);
// 	}
// }
// greaterNum(50, 70);
// greaterNum(80, 70);



//Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
// function helloWorld(lang) {
// 	switch(lang) {
// 		case "es":
// 			console.log("Hola, Mundo");
// 			break;

// 		case "de":
// 			console.log("Hallo, Welt")
// 			break;

// 		case "en":
// 			console.log("Hello, World");
// 			break;

// 		default: 
// 			console.log("Hello, World");
// 	}
// }

// helloWorld("es");
// helloWorld("de");
// helloWorld("en");
// helloWorld("ge");

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// function assignGrade(marks) {
// 	let grade = (marks >= 90) ? alert("A") :
// 		(marks >= 70 && marks < 90) ? alert("B") :
// 		(marks >= 50 && marks < 70) ? alert("C") :
// 		(marks >= 30 && marks < 50) ? alert("D") :
// 		alert("F");
// }
// assignGrade(30);
// Loops
// For loop
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

// for(let i = 0; i <= 20;  i++) {
// 	if(i % 2 === 0) {
// 		alert(`${i} i even`);
// 	}
// }

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// for(let i = 0; i <= 10;  i++) {
// 	let result = 0;
// 	result = i * 9;
// 	console.log(`${i} * 9 = ${result}`);
// }

// Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
// for(let i = 1; i <= 10; i++) {
// 	for(let j = 1; j <= 10; j++) {
// 		let result;
// 		result = i * j;
// 		console.log(result);
// 	}
// }