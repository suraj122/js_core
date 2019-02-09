//1. Pick a penguin from Wikipedia's List of Fictional Penguins (https://en.wikipedia.org/wiki/List_of_fictional_penguins) and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).
let myPenguin = {
	name: "Captain Cook",
	origin: "Mr. Popper's Penguins",
	author: "Richard and Florence Atwater",
}

//2. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
// console.log(`Hello, I'm a penguin and my name is ${myPenguin["name"]}!`);

//. Write another line of code that adds a new property to your penguin called canFly and set it to false.
myPenguin["canFly"] = false;

console.log(myPenguin["canFly"]);


//4. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"

myPenguin["chirp"] = "CHIRP CHIRP! Is this what penguins sound like?";
console.log(myPenguin["chirp"]);

//5. Add another method to your penguin called sayHello that prints to the console the same message from problem 2 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!

//6. Next, call your penguin's sayHello() method and make sure that it works!

//7. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.

//8. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.

let fly = function(canFly) {
	if(canFly) {
		console.log("I can fly!");
	} else {
		console.log("No flying for me!");
	}
}

//9. Call your penguin's fly() method and make sure it works!
myPenguin[fly()];

//10. Change the canFly property to true -- again, without modifying any of your previous code!
myPenguin[fly(true)];

//11. Now call your penguin's fly() method again and make sure it works as expected!
myPenguin[fly()];

//12. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)

for(let key in myPenguin) {
	console.log(key);
}

//13. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)
for(let key in myPenguin) {
	console.log(myPenguin[key]);
}

// Exercise 2
// 14.
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

let myFavRecipe = {
	title: "Chicken Biryani",
	serves: 7,
	ingredients: ["Chicken", "Rice", "Curd", "Spices"],
}

console.log(myFavRecipe);

for(let prop in myFavRecipe) {
	console.log(myFavRecipe[prop]);
}

// 15.
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

let bookRecord = [
	Alchemist = {
		title: "The Alchemist",
		author: "Paulo Coehlo",
		alreadyRead: true,
	},
	DaVinci = {
		title: "Da Vinci Code",
		author: "Dan Brown",
		alreadyRead: false,
	},
	Eleanor = {
		title: "Eleanor and park",
		author: "Rainbow Rowell",
		alreadyRead: true,
	}
]

for(let i = 0; i < bookRecord.length; i++) {
	console.log(`${bookRecord[i]["title"]} by ${bookRecord[i]["author"]}`)
}

for(let i = 0; i < bookRecord.length; i++) {
	if(bookRecord[i]["alreadyRead"]) {
		console.log(`You already read ${bookRecord[i]["title"]} by ${bookRecord[i]["author"]}`)
	} else {
		console.log(`You still need to read ${bookRecord[i]["title"]} by ${bookRecord[i]["author"]}`)
	}
}








