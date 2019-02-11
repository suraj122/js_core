// Write a JavaScript function to check whether an `input` is a *string or not*.

// function checkString (str) {
// 	if(typeof(str) === 'string') {
// 		console.log("A string");
// 	} else {
// 		console.log("Not a string");
// 	}
// }

// checkString("apple");

// Write a JavaScript function to check whether a string *is blank or not*.

// function checkBlankStr (str) {
// 	if(Boolean(str) === false) {
// 		console.log("An empty string");
// 	} else {
// 		console.log("Not an empty string");
// 	}
// }
// checkBlankStr("ala");

// Write a JavaScript *function to split a string and convert it into an array* of words.

// function splitString(str) {
// 	console.log(str.split(' '));
// }
// splitString("ramesh is good boy");


// Write a JavaScript function to remove specified number of characters from a string.

// function truncateString(str) {
// 	console.log(str.slice(2));
// }
// truncateString("ramesh");


// Write a JavaScript function *to convert* a string in *abbreviated form*.
// function abbrevName(str) {
// 	var splittedStr = str.split(' ');
// 	var slicedStr = splittedStr[1].slice(0, 1);
// 	console.log(splittedStr[0] + " " + slicedStr);
// }

// abbrevName("Sasikant kumar");

// Write a JavaScript function to hide email addresses to protect from unauthorized user.

// function protectEmail(email) {
// 	var slicedEmail = email.slice(0, 4);
// 	var slicedEmail1 = email.slice(email.indexOf("@"));
// 	var paddedEmail = slicedEmail.padEnd(slicedEmail.length + 3, ".")
// 	console.log(paddedEmail + slicedEmail1);
// }

// protectEmail("sasikant_kvsn@gmail.com");

// Write a JavaScript function to *parameterize a string*.

// function stringParametrize(str) {
// 	console.log(str.replace(/ /g, "-"));
// }

// stringParametrize("ramesh is good boy");

// Write a JavaScript function to *capitalize the first letter of a string*.

function capitalize(str) {
	var splitStr = str.split(" ");
	for(let i = 0; i < splitStr.length - 1; i++) {
		console.log(splitStr[i]);
	}
	// console.log(splitStr);
}

capitalize("ramesh is good boy");







