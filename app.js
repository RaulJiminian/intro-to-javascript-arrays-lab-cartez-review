/*
  ✨ Code Review & Refactor Suggestions ✨
  Great job working with arrays and iterating over data! 
  The following suggestions improve efficiency, readability, and best practices. 
  Keep up the great work! 🚀
*/

// ✅ Exercise 1: Define an empty array
// Perfect! No changes needed.
const foods = [];
console.log("Exercise 1 result:", foods);

// ✅ Exercise 2: Add strings to the array
// Nice use of `.push()`, but can initialize the array directly.
const foods2 = ["pizza", "cheeseburger"];
console.log("Exercise 2 result:", foods2);

// ✅ Exercise 3: Insert at the beginning
// `.unshift()` is the correct method!
foods2.unshift("taco");
console.log("Exercise 3 result:", foods2);

// ✅ Exercise 4: Access an array element
// Works well! Used `const` since `favFood` is not changing.
const favFood = foods2[1];
console.log("Exercise 4 result:", favFood);

// ✅ Exercise 5: Insert an element between two others
// `.splice()` is used correctly!
foods2.splice(2, 0, "tofu");
console.log("Exercise 5 result:", foods2);

// ✅ Exercise 6: Replace elements
// Correct use of `.splice()` for replacing multiple elements.
foods2.splice(1, 1, "sushi", "cupcake");
console.log("Exercise 6 result:", foods2);

// ✅ Exercise 7: Using `.slice()` method
// Works great! No changes needed.
const yummy = foods2.slice(1, 3);
console.log("Exercise 7 result:", yummy);

// ✅ Exercise 8: Finding an index
// Correct use of `.indexOf()`
const soyIdx = foods2.indexOf("tofu");
console.log("Exercise 8 result:", soyIdx);

// ✅ Exercise 9: Joining elements
// Good use of `.join()`!
const allFoods = foods2.join(" -> ");
console.log("Exercise 9 result:", allFoods);

// ✅ Exercise 10: Check for an element
// Perfect use of `.includes()`
const hasSoup = foods2.includes("soup");
console.log("Exercise 10 result:", hasSoup);

// ✅ Exercise 11: Odd numbers from an array
// Good use of `.forEach()`, but `.filter()` makes it cleaner.
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = nums.filter((num) => num % 2 !== 0);
console.log("Exercise 11 result:", odds);

// ✅ Exercise 12: FizzBuzz with arrays
// Great use of `.forEach()`! Clean and efficient.
const fizz = [];
const buzz = [];
const fizzbuzz = [];

nums.forEach((number) => {
  if (number % 3 === 0) fizz.push(number);
  if (number % 5 === 0) buzz.push(number);
  if (number % 3 === 0 && number % 5 === 0) fizzbuzz.push(number);
});

console.log("Exercise 12 Results:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);

// ✅ Exercise 13: Retrieve the Last Array
// Correct use of `.length - 1`, but `.at(-1)` is a modern alternative.
const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];
const numList = numArrays.at(-1);
console.log("Exercise 13 result:", numList);

// ✅ Exercise 14: Accessing within nested arrays
// Works correctly! No changes needed.
const num = numArrays[2][1];
console.log("Exercise 14 result:", num);

// ✅ Exercise 15: Nested array sum
// Great job! Used `.forEach()` but kept it simple.
let total = 0;
numArrays.forEach((innerArray) => {
  innerArray.forEach((num) => {
    total += num;
  });
});
console.log("Exercise 15 result:", total);
