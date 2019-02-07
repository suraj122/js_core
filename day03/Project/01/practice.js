// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(puppyAge, humanAge) {
  puppyAge *= 7;
  humanAge /= 7;
  alert(`Your doggie is ${puppyAge} years old in dog years!`)
  alert(`Human is ${humanAge} years old in dog years!`)
}

calculateDogAge(3, 14);

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.
function calculateSupply(age, amount) {
  let amountConsume = (age * 365) * amount;
  alert(`You will need ${amountConsume} to last you until the ripe old age of ${age}`)
}
calculateSupply(2, 3);

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
function celsiusToFahrenheit(celsiusTemperature) {
  let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
  alert(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);
}
celsiusToFahrenheit(2)

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function fahrenheitToCelsius(fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
  alert(`${fahrenheitTemp}°F is ${celsiusTemp}°C`);
}
fahrenheitToCelsius(34)

//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm("Did parents allow you?");
//   }
// }

// Will the function work differently if else is removed?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm("Did parents allow you?");
// }

// Is there any difference in the behavior of these two variants?  No


// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Do you have your parents permission to access this page?");
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||

// let checkAge = (age) => (age > 18) ? true : confirm("Do you have your parents permission to access this page?");

let checkAge = (age) => (age > 18) || confirm("Do you have your parents permission to access this page?");
checkAge(10);
 
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.
let result;
function pow(num, power) {
  for(let i = 0; i <= power; i++) {
    // let result;
    result = num ** power;
  }
  return result;
}

let num3 = +prompt("num?");
let power = +prompt("Pow?")

if(num3 > 0 && power > 0) {
  alert(pow(num3,power));
} else {
  alert("Enter a valid number");
}


// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.

function countVowel(word) {
  word = word.match(/[aeiouAEIOU]/gi);
  return word.length;
}
let word = prompt("Enter a word");
alert(countVowel(word));


// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”

function checkPalindrome(str) {
	let reverse = "";
  for(let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  if(str === "") {
  	return alert("not a palindrome");
  } else if(str.toLowerCase() === reverse.toLowerCase()){
  	return alert("a palindrome");
  } else {
  	return alert("not a palindrome");
  }
}
checkPalindrome("racEcaR");


// Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.

// Show the following output using one loop.
// 1, 2, 3, 4, 5
// 6, 7, 8, 9, 10

let printNum = "";
for(i = 1; i <= 10; i++) {
  if(i === 5) {
    i = 5 + "\n";
  }
  printNum = printNum + String(i) + ",";
}
console.log(printNum);

// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
let computeProduct = 1;
let computeSum = 0;
let num = prompt("Enter a number");

let sum = function (num) {
	for(let i = 0; i <= num; i++) {
		computeSum = computeSum + i;
	}
	return computeSum;
};

let product = function (num) {
	for(let i = 1; i <= num; i++) {
		computeProduct = computeProduct * i;
	}
	return computeProduct;
};

function computeNum(compute) {
	let result;
	if(compute === sum()) {
		result = sum();
	} else if (compute === product()) {
		result = product();
	}
	return result;
}

alert(computeNum(product(num)));

// Write a function that returns the largest element in a list.

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

let num1 = +prompt("Num?");
function computeSum1(num1) {

  let result = 0;

  for(i = 1; i <= num1; i++) {
    result = result + i;
  }
  console.log(result);
}

computeSum1(num1);

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
let num2 = +prompt("Num?");
function computeSum2(num2) {

  let result = 0;

  for(i = 1; i <= num2; i++) {
    if( i % 5 === 0 || i % 7 === 0) {
      result = result + i;
    }
  }
  console.log(result);
}

computeSum2(num2);

// Write a program that takes a number under (25) and prints the multiplication table for the number.
let tableNum = +prompt("Enter a num");
let tableResult = 0;
function table(tableNum) {
  for(let i = 0; i <= 10; i++) {
    result = tableNum * i;
  }
  return result;
}

if(tableNum < 25) {
  alert(table(tableNum));
} else {
  alert("Enter a number below 25");
}



