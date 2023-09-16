"use strict";
// Taks 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ["Mudasar", "Ali", "Numan", "Hasan", "Faisal"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["Ateeq", "Waqas", "Numan", "Hasan", "Ahmad"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
for (let newUsername of new_users) {
    // Convert newUsername and each current username to lowercase for case insensitivity
    let lowerCaseNewUsername = newUsername.toLowerCase();
    // Check if the lowercase newUsername is in the current_users list
    let isUsernameTaken = current_users.some((currentUsername) => currentUsername.toLowerCase() === lowerCaseNewUsername);
    // Print the result
    if (isUsernameTaken) {
        console.log(`Sorry, ${newUsername} is already taken. Please choose a different username.`);
    }
    else {
        console.log(`Congratulations, ${newUsername} is available!`);
    }
}
