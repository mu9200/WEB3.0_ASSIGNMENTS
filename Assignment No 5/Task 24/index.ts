// Taks 23


//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

let color1 = "red";
let color2 = "blue";

console.log("Is color1 equal to color2? I predict False.");
console.log(color1 === color2); // False

let fruit1 = "apple";
let fruit2 = "apple";

console.log("Is fruit1 not equal to fruit2? I predict False.");
console.log(fruit1 !== fruit2); // False

//• Tests using the lower case function

let text1 = "Hello";
let text2 = "hello";

console.log("Is text1 lowercase equal to text2 lowercase? I predict True.");
console.log(text1.toLowerCase() === text2.toLowerCase()); // True

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let x = 10;
let y = 5;

console.log("Is x greater than y? I predict True.");
console.log(x > y); // True

let temperature1 = 25;
let temperature2 = 30;

console.log("Is temperature1 less than or equal to temperature2? I predict True.");
console.log(temperature1 <= temperature2); // True

//• Tests using "and" and "or" operators

let isSunny = true;
let isWarm = true;

console.log("Is it sunny and warm? I predict True.");
console.log(isSunny && isWarm); // True

let isRainy = false;
let hasUmbrella = true;

console.log("Is it raining or do you have an umbrella? I predict True.");
console.log(isRainy || hasUmbrella); // True

//• Test whether an item is in a array

let fruits = ["apple", "banana", "cherry", "kiwi"];

console.log("Is 'cherry' in the fruits array? I predict True.");
console.log(fruits.includes("cherry")); // True

//• Test whether an item is not in a array

let animals = ["lion", "tiger", "bear"];

console.log("Is 'elephant' not in the animals array? I predict True.");
console.log(!animals.includes("elephant")); // True



