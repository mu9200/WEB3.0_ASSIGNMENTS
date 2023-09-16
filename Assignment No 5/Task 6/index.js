"use strict";
//<-------------------------------------------------------------------------->
// Task 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
/*
let name_print:string = ('Mudasar Iqbal');

console.log(`Hello ${name_print} would you like to learn some Python today`);
*/
//<-------------------------------------------------------------------------->
// Task 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
/*

let my_name:string = ('MuDasar IQBAL')
console.log(my_name.toLowerCase());
console.log(my_name.toUpperCase());


// <-------------------------------------------------------------->
// With For Loop

let splitword:string[] = my_name.split(' ');
let titleCase:string = '';

for(let i = 0; i<splitword.length ; i++){
    
    titleCase +=splitword[i].charAt(0).toUpperCase()+ splitword[i].slice(1).toLowerCase()+ ' ';
}

console.log(`New ${titleCase}`)


// <-------------------------------------------------------------->
// in a function

function changeToUpper(arr:string[]) {

    let newTitleCase:string = '';

    for (let i = 0; i < arr.length; i++){
        newTitleCase += arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase()+' ';
    }

    return(newTitleCase)
    
}

let newParagraph:string = 'This is my new paraprhap need into title case'
let newArrayIs:string[] =newParagraph.split(' ');

console.log(newArrayIs)
console.log(`with Function ${changeToUpper(newArrayIs)}`)

*/
// <-------------------------------------------------------------->
// Task No 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
/*



console.log(`Quaid-e-Azam Said: "Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man."`)

*/
// <-------------------------------------------------------------->
// Task No 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
/*
let famous_person:string = 'Quaid-e-Azam';
let message:string = ('Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.');

console.log(`${famous_person} Said: "${message}"`)

*/
// <-------------------------------------------------------------->
// Task No 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
/*

let stripping_Names:string = '\t               My name is Mudasar    \n';

console.log(stripping_Names)

console.log(`Print After Remove White Spaces ${stripping_Names.trim()}`);

*/
// <-------------------------------------------------------------->
// Task No 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
/*

console.log(2+6);
console.log(12-4);
console.log(2*4);
console.log(64/8);

*/
// <-------------------------------------------------------------->
// Task No 8
/*
console.log('_'.repeat(65));
console.log(2+6);

console.log('_'.repeat(65));
console.log(12-4);

console.log('_'.repeat(65));
console.log(2*4);

console.log('_'.repeat(65));
console.log(64/8);
console.log('_'.repeat(65));
*/
// <-------------------------------------------------------------->
// Task No 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let fav_num = 12;
console.log(`This is my favorite number ${fav_num}`);
