
const prompt = require("prompt-sync")();

//Task 1
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

/*
let my_array:any[] = [1,2,3,4,5,6,7,8,9,10];

function update_array(arr:any[],index_no:number,...value:any[]){

   let modified_new_array = [...arr];

   if(index_no <0 || index_no > arr.length){
    throw new Error("Please enter Valid value");

       }

   modified_new_array.splice(index_no,0,...value);
   console.log(modified_new_array);

};

let modified_new_array = update_array(my_array,6,11,12,17,20) 

*/

// <------------------------------------------------------------------------------>
//Task 2
//- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

/*

let shoping_items:string[] = ['T-shirt','Cap', 'Bat','headphone'];

function shoping_items_add(arr:string[],index_no:number,...value:string[]){
   
    let shoping_items_modified:string[] = [...arr];

    if (index_no < 0 || index_no > arr.length){
        throw new Error("Please write valid entry to add items in cart");
        
    }
    shoping_items_modified.splice(index_no,0,...value)
    return(shoping_items_modified)

}

let shoping_items_modified_added = shoping_items_add(shoping_items,1,'Pent')
console.log (`After New Value Added ${shoping_items_modified_added}`)


// Remove Itmes Function



function shoping_items_remove(arr:string[], index_no:number,remove:string, ...value:string[]){
    let shoping_items_modified_remove:string[] = [...arr];

    if (index_no < 0 || index_no > arr.length) {
        throw new Error("Please enter valid value to remove entry");
                
    }

    // find the index of remove item
    let find_value_index = shoping_items_modified_remove.indexOf(remove)
    shoping_items_modified_remove.splice(index_no,find_value_index, ...value);
    return(shoping_items_modified_remove)

}

let shoping_items_modified_remove = shoping_items_remove(shoping_items,1,'Cap','trosure');
console.log(`Shoping cart after item remove ${shoping_items_modified_remove}`)

*/
// <------------------------------------------------------------------------------>
//Task 3
//- Write a program that uses a while loop to print the first 25 integers.

/*
let i = 0;
while (i <= 25) {
    console.log(i)
    i++
}
*/
 
// <------------------------------------------------------------------------------>

//Task 4
//- Write a program that uses a while loop to print the first 10 even numbers.

/*

let i = 0;
while (i <= 10) {
    if( i % 2 == 0){
        console.log(i)
    }
i++
    
}
*/
// <------------------------------------------------------------------------------>

//Task 5
//- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

/*
function factorial(n: number): number {
    if (n < 0) {
      throw new Error("Input must be a positive integer.");
    }
  
    let result = 1;
    let currentNumber = 1;
  
    while (currentNumber <= n) {
      result *= currentNumber;
      currentNumber++;
    }
  
    return result;
  }
  
 
  let n = 5; // Calculate the factorial of 5
  
let result = factorial(n);
  
  console.log(`The factorial of ${n} is ${result}`);

  */

// <------------------------------------------------------------------------------>

//Task 6
//- Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

/*
let check_array:number[] = [1 ,2,3,4,5,6,-5,8,-9,9,11,-2,12,-3];
function remove_neg_numbers(arr:number[]) {
    let non_neg_numbers:number[] = arr.filter((number) => number >=0)
    return non_neg_numbers;
    
}

console.log(`Orignal arry: ${check_array}`)
console.log(`Array after remove neg values: ${remove_neg_numbers(check_array)}`)

*/

// <------------------------------------------------------------------------------>

//Task 7
//- Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

/*

let my_array:number[] = [1,2,3,4,5,6,7,8,9,10];
function sum_of_arry(arr:number[]){
    let i = 0
    let sum = 0;
    while(i < my_array.length){
        sum += my_array[i]
        i++
    }
return sum

}
console.log(sum_of_arry(my_array))

*/
// <------------------------------------------------------------------------------>

//Task 8
//- Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature


let values_limit:number =Number(prompt("Please enter the no of valus you want to enter in the list"));
let my_new_array:number[] = [];


let i = 0;
while(i <= values_limit-1){
    my_new_array[i] = Number(prompt('Please enter the value of element'))
    i++
}

console.log(`User vlues: ${my_new_array}`);

function convert_to_fahrenheit(arr:number[]) {
    let i = 0;
    let f_value = 0;
    let new_f_array:number[] = [];
    while(i<= arr.length){
        f_value = (i * (9/5)) + 32
        new_f_array.push(f_value);
        i++

    }

    return(`New Array after convert value: ${new_f_array}`)
    
}

console.log(convert_to_fahrenheit(my_new_array));







export{};