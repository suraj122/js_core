var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr) {
  arr.sort((a, b) => (b.length - a.length));
  console.log(arr[0]);
}

findLongestWord(words);


var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

function sumArray(arr) {
  console.log((arr.reduce((sum, current) => sum + current, 0)) / numbers1.length);
}

sumArray(numbers1);




var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

function sumArray(arr) {
  console.log((arr.reduce((sum, current) => sum + current, 0)) / (numbers2.length));
}

sumArray(numbers2);



var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(arr) {
  console.log((arr.reduce((sum, current) => sum + current.length, 0)) / words2.length);
}

averageWordLength(words2);




