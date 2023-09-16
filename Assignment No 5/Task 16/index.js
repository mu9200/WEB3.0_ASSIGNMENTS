"use strict";
// Taks 16 
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let people_for_dinner = ['Ali', 'Hamza', 'Shaikh'];
// Add a print statement to the end of your program informing people that you found a bigger dinner table
for (let person of people_for_dinner) {
    console.log(`Hello ${person} we found a bigger table`);
}
;
// Add one new guest to the beginning of your array.
people_for_dinner.unshift('Misbah');
console.log(`After add new person at the beginning of the List. Name of person is ${people_for_dinner[0]}`);
// step 2 Add person middle of the array
let middle_index = Math.floor(people_for_dinner.length / 2);
people_for_dinner.splice(middle_index, 0, 'Ateeq');
console.log(people_for_dinner);
// step 3
people_for_dinner.push('Muzammal');
console.log(people_for_dinner);
people_for_dinner.forEach((guest_name) => {
    console.log(`I want to invite you for dinner Tonight Mr ${guest_name}`);
});
