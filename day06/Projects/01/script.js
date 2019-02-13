// Arrays to work on
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];


// Use the above two arrays and practice array methods


// Find largest number in numbers
// function largestNumber(num) {
// 	let largest = num.sort((a, b) => b-a);
// 	console.log(largest[0]);
// }

// largestNumber(numbers)


// Find longest string in strings
// function longestStr(str) {
// 	let longest = '';
// 	str.forEach(item => (item.length > longest.length) ? longest = item : longest);
// 	console.log(longest);
// }

// longestStr(strings);


// Find all the even numbers

// function evenNum(num) {
// 	console.log(num.filter(item => item % 2 === 0));
// }

// evenNum(numbers);


// Find all the odd numbers

// function oddNum(num) {
// 	console.log(num.filter(item => item % 2 !== 0));
// }

// oddNum(numbers);


// Find all the words that contain 'is' use string method 'contains'

// function includeIs(str) {
// 	console.log(str.filter(item => item.includes("is")));
// }

// includeIs(strings);


// Find all the words that contain 'is' use string method 'indexOf'.
// function includeIs(str) {
// 	console.log(str.indexOf("is"));
// }

// includeIs(strings);


// Check if all the numbers in numbers array are divisible by three use array method (every)

// function divBy3(num) {
// 	console.log(num.every(item => item % 3 === 0));
// }

// divBy3(numbers);




//  Sort Array from smallest to largest

// function sortAscending(num) {
// 	console.log(num.sort((a, b) => a - b));
// }

// sortAscending(numbers);


// Remove the last word in strings

// function removeLastWord(str) {
// 	console.log(str.pop());
// }

// removeLastWord(strings);


// Add a new word in the array

// function addWord(str) {
// 	str.push("that");
// 	console.log(str);
// }

// addWord(strings);



// Remove the first word in the array
// function removeFirstWord(str) {
// 	console.log(str.shift());
// }

// removeFirstWord(strings);



// Place a new word at the start of the array use (upshift)

// function addFirstWord(str) {
// 	str.unshift("array");
// 	console.log(str);
// }

// addFirstWord(strings);



// Make a subset of numbers array [18,9,7,11]

// function subsetNumber(num) {
// 	console.log(num.splice(3, 4));
// }

// subsetNumber(numbers);


// Make a subset of strings array ['a','collection']

// function subsetStr(str) {
// 	console.log(str.splice(2, 2));
// }

// subsetStr(strings);


// Replace 12 & 18 with 1221 and 1881



// Replace words with string in strings array

// function replaceStr(str) {
// 	console.log(str.join(" ").replace("words", "array").split(" "));
// }
// replaceStr(strings);



// Customers Array
var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];
// Find all customers whose firstname starts with 'J'

// customers.forEach(item => {
// 	if(item["firstname"][0] === "J" || item["firstname"][0] === "j") {
// 		console.log(item);
// 	}
// })


// Create new array with firstname and lastname

let altCampusTeam = [
	{firstname : 'Suraj', lastname : 'Kumar'},
	{firstname : 'Ankit', lastname : 'Sinha'},
	{firstname : 'Prashant', lastname : 'Abhishek'},
	{firstname : 'Ravikant', lastname : 'Kumar'}
];


// Sort the array created above alphabetically






