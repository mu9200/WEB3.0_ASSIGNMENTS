
// Task 3

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

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



