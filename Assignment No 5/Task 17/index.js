"use strict";
// Taks 17 
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// step 1
let people_for_dinner = ['Ali', 'Hamza', 'Shaikh'];
// Add one new guest to the beginning of your array.
people_for_dinner.unshift('Misbah');
// Add person middle of the array
let middle_index = Math.floor(people_for_dinner.length / 2);
people_for_dinner.splice(middle_index, 0, 'Ateeq');
// Add at the end of the array
people_for_dinner.push('Muzammal');
//print message I can invite only two person
people_for_dinner.forEach((guest_name) => {
    console.log(`I can invite only two person Mr ${guest_name}`);
});
// Step 2
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (people_for_dinner.length > 2) {
    let peple_removed = people_for_dinner.pop();
    console.log(`${peple_removed} you’re sorry you can’t invite them to dinner`);
}
// step 3
// Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(people_for_dinner);
people_for_dinner.forEach((person) => {
    console.log(`${person} You're still invited for dinner`);
});
// Step 4
// remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
while (people_for_dinner.length > 0) {
    let new_people_removed = people_for_dinner.pop();
}
console.log(people_for_dinner);
