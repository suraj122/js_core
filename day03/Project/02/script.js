// Practice different way of writing function
//  i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
// function convertToString(n) {
//   return String(n);
// }

// function // Optional
// functionName // Optional
// (arguments) // Optional
// return // Optional

// Function Expression
// let convertToString1 = function(n) {
//   return String(n);
// };

// Arrow Function
// let convertToString = n => String(n);
// let convertToString = n => {
//   return String(n);
// };

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */


// function add1(n) {       // Function Declaration
// 	return n + 1;
// }

// let add1 = function(n) {    //function Expression
// 	return n + 1;
// }

// let add1 = n => n + 1;        //Arrow Function without curly braces


// let add1 = n => {              //Arrow Function with curly braces
// 	return n + 1;
// }

// alert(add1(33));


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

// function subtract1(n) {       // Function Declaration
// 	return n - 1;
// }

// let subtract1 = function(n) {    //function Expression
// 	return n - 1;
// }

// let subtract1 = n => n - 1;       //Arrow Function without curly braces


// let subtract1 = n => {     // Arrow function with curly braces
// 	return n - 1;
// }

// alert(subtract1(130));





/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 // function addTwoNum(a, b) {  //function Declarartion
 // 	return a + b;
 // }

// let addTwoNum = function(a, b) {  // function Expression
// 	return a + b;
// }


 // let addTwoNum = (a, b) => a + b;  // Arrow Function without curly braces

 // let addTwoNum = (a, b) => {     // Arrow Function with curly braces
 // 	return a + b;
 // }

 // alert(addTwoNum(32, 5));

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 // function subtractTwoNum(a, b) {    //function Declaration
 // 	return a - b;
 // }

 // let subtractTwoNum = function(a, b) {   // function Expression
 // 	return a - b;
 // }

 // let subtractTwoNum = (a, b) => a - b;   // Arrow function without curly braces

 // let subtractTwoNum = (a, b) => {   // Arrow function wit curly braces
 // 	return a - b;
 // }

 // alert(subtractTwoNum(88,5));

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 // function multiplyTwoNum(a, b) {   // Function Declaration
 // 	return a * b;
 // }

 // let multiplyTwoNum = function(a, b) {  //Function Expression
 // 	return a * b;
 // }

 // let multiplyTwoNum = (a, b) => a * b;  // Arrow function without curly braces

 // let multiplyTwoNum = (a, b) => {  // Arrow function with curly braces
 // 	return a * b;
 // }

 // alert(multiplyTwoNum(10, 10));

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 // function division(a, b) {  // Function Declaration
 // 	return a / b;
 // }

 // let division = function(a, b) {  // Function Expression
 // 	return a / b;
 // }

 // let division = (a, b) => a / b;  // Arrow function without curly braces

 // let division = (a, b) => {  // Arrow function with curly braces
 // 	return a / b;
 // }

 // alert(division(100, 20));

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 // function selfMultiply(a) {  // Function Declaration
 // 	return a * a;
 // }

 // let selfMultiply = function(a) {  // Function Expression
 // 	return a * a;
 // }

// let selfMultiply = a => a * a;  // Arrow Function Without Curly braces

// let selfMultiply = a => {  // Arrow Function with curly braces
// 	return a * a;
// }

//  alert(selfMultiply(99));

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 // function greaterThan(a, b) {  // Function Declaration
 // 	if( a > b) {
 // 		return true;
 // 	} else {
 // 		return false;
 // 	}
 // }

 // let greaterThan = function(a, b) {  // Function Expression
 // 	if(a > b) {
 // 		return true;
 // 	} else {
 // 		return false;
 // 	}
 // }

 // let greaterThan = (a, b) => (a > b) ? true : false;  // Arrow function without curly braces

 // let greaterThan = (a, b) => {  // Arrow Function with curly braces
 // 	if( a > b) {
 // 		return true;
 // 	} else {
 // 		return false;
 // 	}
 // }

 // alert(greaterThan(100, 90));

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
// function lessThan(a, b) {  //Function Declaration
// 	if(a < b) {
// 		return true;
// 	} else{
// 		return false;
// 	}
// }

// let lessThan = function(a, b) {  //Function Expression
// 	if(a < b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// let lessThan = (a, b) => (a < b) ? true : false; // Arrow function without curly braces

// let lessThan = (a, b) => {  // Arrow Function with curly braces
// 	if(a < b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// alert(lessThan(78, 5));

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

 // function checkEqualNum(a, b) {  // Function Declaration
 // 	if( a === b) {
 // 		return true;
 // 	} else {
 // 		return false;
 // 	}
 // }

// let checkEqualNum = function(a, b) { // function Expression
// 	if( a === b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// let checkEqualNum = (a, b) => (a === b) ? true : false; // Arrow function without curly braces

// let checkEqualNum = (a, b) => {  // Arrow function with curly braces
// 	if(a === b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

//  alert(checkEqualNum(8, 8));

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

 // function smallestNum(a, b) { // Function declaration
 // 	if(a < b) {
 // 		return a;
 // 	} else if (a === b) {
 // 		return "both are equal";
 // 	} else {
 // 		return b;
 // 	}
 // }

 // let smallestNum = function(a, b) {  // Function Expression
 // 	if(a < b) {
 // 		return a;
 // 	} else if(a === b) {
 // 		return "both are equal";
 // 	} else {
 // 		return b;
 // 	}
 // }

 // let smallestNum = (a, b) => (a < b) ? a :  //Arrow function wihout curly braces
 // 	(a === b) ? "both are equal" : b;

 // let smallestNum = (a, b) => {  // Arrow Function with curly braces
 // 	if(a < b) {
 // 		return a;
 // 	} else if(a === b) {
 // 		return "both are equal";
 // 	} else {
 // 		return b;
 // 	}
 // }

 // alert(smallestNum(200, 200));


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 // function largestNum(a, b) { // Function declaration
 // 	if(a > b) {
 // 		return a;
 // 	} else if (a === b) {
 // 		return "both are equal";
 // 	} else {
 // 		return b;
 // 	}
 // }


 // let largestNum = function(a, b) {  // Function Expression
 // 	if(a > b) {
 // 		return a;
 // 	} else if(a === b) {
 // 		return "both are equal";
 // 	} else {
 // 		return b;
 // 	}
 // }


 // let largestNum = (a, b) => (a > b) ? a :  //Arrow function wihout curly braces
 // 	(a === b) ? "both are equal" : b;


 // let largestNum = (a, b) => {  // Arrow Function with curly braces
 // 	if(a > b) {
 // 		return a;
 // 	} else if(a === b) {
 // 		return "both are equal";
 // 	} else {
 // 		return b;
 // 	}
 // }

 // alert(largestNum(40, 60));

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 // function checkEven(a) {  // Function Declaration
 // 	if(a % 2 === 0) {
 // 		return true;
 // 	} else {
 // 		return false;
 // 	}
 // }

 // let checkEven = function (a) {  // Function Expression
 // 	if(a % 2 === 0) {
 // 		return true;
 // 	} else {
 // 		return false;
 // 	}
 // }

 // let checkEven = a => (a % 2 === 0) ? true : false;  // Arrow function wihout curly braces

// let checkEven = a => {
//  	if(a % 2 === 0) {
//  		return true;
//  	} else {
//  		return false;
//  	}
// }

//  alert(checkEven(10));

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

// function checkOdd(a) {  // Function Declaration
//  	if(a % 2 !== 0) {
//  		return true;
//  	} else {
//  		return false;
//  	}
// }

// let checkOdd = function (a) {  // Function Expression
// 	if(a % 2 !== 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// let checkOdd = a => (a % 2 !== 0) ? true : false;  // Arrow function wihout curly braces

// let checkOdd = a => {
//  	if(a % 2 !== 0) {
//  		return true;
//  	} else {
//  		return false;
//  	}
// }

// alert(checkOdd(6));

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

// function checkGrade(percent) {  // Function Declaration
// 	if(percent >= 90) {
// 		return "A";
// 	} else if(percent >= 80 && percent < 90) {
// 		return "B";
// 	} else if(percent >= 70 && percent < 80) {
// 		return "C";
// 	} else if(percent >= 60 && percent < 70) {
// 		return "D";
// 	} else {
// 		return "F";
// 	}
// }

// let checkGrade = function(percent) {  // Function Expression
// 	if(percent >= 90) {
// 		return "A";
// 	} else if(percent >= 80 && percent < 90) {
// 		return "B";
// 	} else if(percent >= 70 && percent < 80) {
// 		return "C";
// 	} else if(percent >= 60 && percent < 70) {
// 		return "D";
// 	} else {
// 		return "F";
// 	}
// }

// let checkGrade = (percent) => (percent >= 90) ? "A" :   // Arrow function wihout curly braces
// 	(percent >= 80 && percent < 90) ? "B" :
// 	(percent >= 70 && percent < 80) ? "C" :
// 	(percent >= 60 && percent < 70) ? "D" :
// 	"F";


// let checkGrade = (percent) => {  // Arrow function wih curly braces
// 	if(percent >= 90) {
// 		return "A";
// 	} else if(percent >= 80 && percent < 90) {
// 		return "B";
// 	} else if(percent >= 70 && percent < 80) {
// 		return "C";
// 	} else if(percent >= 60 && percent < 70) {
// 		return "D";
// 	} else {
// 		return "F";
// 	}
// }

// alert(checkGrade(100));



/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

// function joinStr(str1, str2) {  // Function Declaration
// 	return str1 + " " + str2;
// }

// let joinStr = function(str1, str2) {  //Function Expression
// 	return str1 + " " + str2;
// }

// let joinStr = (str1, str2) => str1 + " " + str2; // Arrow function without curly braces

// let joinStr = (str1, str2) => { // Arrow function with curly braces
// 	return str1 + " " + str2;
// }

// alert(joinStr("ram", "rohan"));

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

