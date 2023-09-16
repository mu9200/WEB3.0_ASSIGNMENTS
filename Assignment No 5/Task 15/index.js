"use strict";
// Task 15
Object.defineProperty(exports, "__esModule", { value: true });
exports.people_for_dinner = void 0;
//  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let people_for_dinner = ['Ali', 'Hamza', 'Shaikh'];
exports.people_for_dinner = people_for_dinner;
// step 1
let person_cant_come = 'Hamza';
console.log(`${person_cant_come} is not comming for dinner`);
// step 2
let new_person_invite = 'Shakeel';
let check_index_no_person_not_come = people_for_dinner.indexOf(person_cant_come);
people_for_dinner.splice(check_index_no_person_not_come, 1, new_person_invite);
console.log(`List wtih new Name ${people_for_dinner}`);
// step 3
people_for_dinner.forEach((guestName) => {
    console.log(`I want to invite you for dinner Tonight Mr ${guestName}`);
});
