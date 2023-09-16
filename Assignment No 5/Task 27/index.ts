// Taks 27 

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

let alien_color = 'green';

if (alien_color === 'green') {
  console.log("Player earned 5 points for shooting the green alien!");
} else if (alien_color === 'yellow') {
  console.log("Player earned 10 points for shooting the yellow alien!");
} else if (alien_color === 'red') {
  console.log("Player earned 15 points for shooting the red alien!");
} else {
  console.log("Unknown alien color. No points earned.");
}

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let other_alien_color = 'yellow';

if (other_alien_color === 'green') {
  console.log("Player earned 5 points for shooting the green alien!");
} else if (other_alien_color === 'yellow') {
  console.log("Player earned 10 points for shooting the yellow alien!");
} else if (other_alien_color === 'red') {
  console.log("Player earned 15 points for shooting the red alien!");
} else {
  console.log("Unknown alien color. No points earned.");
}



// New version

let with_alien_color = 'red';

if (with_alien_color === 'green') {
  console.log("Player earned 5 points for shooting the green alien!");
} else if (with_alien_color === 'yellow') {
  console.log("Player earned 10 points for shooting the yellow alien!");
} else if (with_alien_color === 'red') {
  console.log("Player earned 15 points for shooting the red alien!");
} else {
  console.log("Unknown alien color. No points earned.");
}