// Taks 29

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.


let favoriteFruits: string[] = ["banana", "strawberry", "apple", "mango", "pineapple"];

// Check for specific fruits in the array
if (favoriteFruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favoriteFruits.includes("strawberry")) {
  console.log("You have a thing for strawberries!");
}

if (favoriteFruits.includes("apple")) {
  console.log("Apples are among your favorites!");
}

if (favoriteFruits.includes("kiwi")) {
  console.log("Kiwi is one of your favorite fruits!");
} else {
  console.log("Kiwi is not in your list of favorite fruits.");
}

if (favoriteFruits.includes("mango")) {
  console.log("Mangoes are your absolute favorite!");
}

if (favoriteFruits.includes("orange")) {
  console.log("Oranges are also on your list of favorite fruits!");
} else {
  console.log("Oranges are not in your list of favorite fruits.");
}


// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["apple", "banana", "strawberry"];

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
  console.log("You have a thing for apples!");
}

if (favorite_fruits.includes("kiwi")) {
  console.log("Kiwi is one of your favorite fruits!");
} else {
  console.log("Kiwi is not in your list of favorite fruits.");
}

if (favorite_fruits.includes("grape")) {
  console.log("Grapes are among your favorites!");
} else {
  console.log("Grapes are not in your list of favorite fruits.");
}

if (favorite_fruits.includes("strawberry")) {
  console.log("Strawberries are your absolute favorite!");
}




