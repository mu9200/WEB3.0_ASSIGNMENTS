// Task 1
//- Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

/*

function sumOfFirstNEvenNumbers(n: number) {
    let sum = 0

    for(let i=1; i<=5; i++){
        
        if(i%2==0){
            sum += i
        }
        
    }

   return sum;
 }

let n = 5; 

let result = sumOfFirstNEvenNumbers(n);

console.log(`The sum of the first ${n} even numbers sum is ${result}`);

*/
// <---------------------------------------------------------------------------->

// Task 2
//- Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
/*
let new_array:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
let new_arry_even_numbers:number[] = []
for(let i = 1; i < new_array.length; i++){
    if (i % 2 ==0){
        new_arry_even_numbers.push(i)
    }
}

console.log(new_arry_even_numbers)

*/

// <---------------------------------------------------------------------------->

// Task 3
//- Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
/*
function removeEvenNumbers(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (number % 2 === 0) {
        numbers.splice(i, 1);
        i--; 
      }
    }
    return numbers;
  }
  
  
  const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  console.log('Original Array:', numberArray);
  const oddOnlyArray = removeEvenNumbers(numberArray);
  console.log('Array with Even Numbers Removed:', oddOnlyArray);

  */

// <---------------------------------------------------------------------------->

// Task 4
//- Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

/*
function calculate_Area(radius: number) {
    let pi = 3.14159; 
    let area = pi * Math.pow(radius, 2);
    return area;
  }
  
  let radius = 5;
  let circleArea = calculate_Area(radius);
  
  console.log(`The area of a circle with radius ${radius} is ${circleArea}`);

  */

// <---------------------------------------------------------------------------->

// Task 5
//- Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.



// <---------------------------------------------------------------------------->

// Task 6
//- Write a program that uses a function to find the largest element in an array of numbers.
/*

function findLargestElement(numbers: number[]): number | undefined {
    if (numbers.length === 0) {
      return undefined; // Return undefined if the array is empty
    }
  
    let largest = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
  
    return largest;
  }
  
  // Example usage:
  const numberArray: number[] = [7, 2, 9, 1, 5];
  
  const largestElement = findLargestElement(numberArray);
  
  if (largestElement !== undefined) {
    console.log(`The largest element in the array is: ${largestElement}`);
  } else {
    console.log("The array is empty.");
  }
*/


// <---------------------------------------------------------------------------->