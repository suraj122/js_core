/* *********************************    Arrays inside objects      ********************************* */


// 1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
let myPenguin = {
	name: "Captain Cook",
	origin: "Mr. Popper's Penguins",
	author: "Richard and Florence Atwater",
}
myPenguin["favoriteFoods"] = ["chicken", "Egg", "Fish"];

// 2. Access your penguin's second favorite food and print it to the console using console.log()
// console.log(myPenguin["favoriteFoods"][1]);

// 3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.

let firstFavFood = myPenguin["favoriteFoods"][0];
console.log(firstFavFood);

// 4. Add another food to the end of the list.
myPenguin["favoriteFoods"].push("chicken biryani");

console.log(myPenguin["favoriteFoods"]);

// 5. Print the length of your penguin's favoriteFoods array to the console with console.log()
console.log(myPenguin["favoriteFoods"].length);

// 6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).

myPenguin["favoriteFoods"][myPenguin["favoriteFoods"].length - 1] = "pineapples";
console.log(myPenguin["favoriteFoods"]);

// 7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. (Hint: this is essentially the same problem as step 18 from above.)

let lastFavFood = myPenguin["favoriteFoods"][myPenguin["favoriteFoods"].length - 1];
// console.log(lastFavFood);

//8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)

for(let key in myPenguin["favoriteFoods"]) {
	console.log(myPenguin["favoriteFoods"][key])
}








