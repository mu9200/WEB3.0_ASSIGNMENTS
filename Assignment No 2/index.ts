
const prompt = require("prompt-sync")();

// Task One
// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

// ******Convert Celcius to Fahrenheit******

/*
let c = 50;
let f = 0;
f = c * (9/5) + 32;
console.log(f);
*/

// ******Convert Fahrenheit to Celcius******
/*

let fahrenheit_Value = 50;
let celcius_Value = 0;
celcius_Value = (fahrenheit_Value - 32) * 5/9;
console.log(celcius_Value);

*/
//<--------------------------------------------------------------->>

// Task No 2
//  - Write a program that calculates the percentage.

/*
let num = 1000;
let per = 47;

let vlaue_In_Percentage = num/100 * per
console.log('Marks in PercentageL: ' + vlaue_In_Percentage);
*/
//<--------------------------------------------------------------->>

// Task No 3
// - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

/*
let num_of_days = 180;
let days_in_week = 7;

let no_of_weeks = (Math.floor(num_of_days/7));
let no_of_days = num_of_days % days_in_week;

console.log(no_of_weeks);
console.log(no_of_days);
*/

//<--------------------------------------------------------------->>

// Task No 4
// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

/*
let produc_price = 100;
if (produc_price > 100) {
    let discount_in_percent = 10
    let discount_value = produc_price*discount_in_percent/100
    console.log('Product Price after Discount', produc_price - discount_value )
    
}else{
    let discount_in_percent = 5
    let discount_value = produc_price*discount_in_percent/100
    console.log('Product Price after Discount', produc_price - discount_value )
};
*/

//<--------------------------------------------------------------->>

// Task No 5
// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

/*
let user_age = 13;
if(user_age <= 12){
    console.log('Child');
}else if (user_age >=13 && user_age <19) {
    console.log('Teenager')
    
} else {
    console.log('Adult');
    
}

*/


//<--------------------------------------------------------------->>

//Task No 6
//Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

/*

let tem_today = 10;
if (tem_today<=15) {
    console.log('Please wear very warm clothes.');
    
    
}else if(tem_today >=16 && tem_today <=22){
    console.log('Please wear warm clothes.');
    
}else{
    console.log('You can wear notmal clothes.');
    
}

*/

//<--------------------------------------------------------------->>

// Task No 7
// Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

/*

let num_of_user = 11

if (num_of_user%3 == 0 && num_of_user %5 == 0 ){
    console.log('The given number is divisible by both 3 and 5');
    
}else if(num_of_user%3 == 0 && num_of_user %5 != 0){
    console.log('The given number is divisible only by 3 ');
    
}else if(num_of_user%3 != 0 && num_of_user %5 == 0){
    console.log('The given number is divisible only by 5 ')
}else{
    console.log('The given number is not divisible by both number');
    
}
console.log(num_of_user%3);

*/



//<--------------------------------------------------------------->>

// Task No 8
// Write a program that checks if the given year is leap year or not.

/*
let year_check  = 2024;
if(year_check % 4 == 0){
    console.log('This is Leap year');
    
}else{
    console.log('This is not leap year');
    
};
*/

//<--------------------------------------------------------------->>

// Task No 9
// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
/*

let day_in_no = Number(prompt('Please enter the day no from 1 to 7:'))


if (!isNaN(day_in_no) && day_in_no >=1 && day_in_no <=7) {
    if (day_in_no ===1) {
        console.log('Monday');
        
    } else if (day_in_no ===2) {
        console.log('Tuesday')
    } else if (day_in_no ===3) {
        console.log('Wednesday')
        
    }else if (day_in_no ===4) {
        console.log('Thursday')
        
    }else if (day_in_no ===5) {
        console.log('Friday')
        
    }else if (day_in_no ===6) {
        console.log('Saturday')
        
    }else if (day_in_no ===7) {
        console.log('Sunday')
        
    }
    
}else(
    console.log('Invalid Entry')
)

*/

//<--------------------------------------------------------------->>

// Task No 10
// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax. Where the tax amount will be calculated by the amount of bill.

//<--------------------------------------------------------------->>

// Task No 11

let unit_consumed:number = Number(prompt('Please enter electricity units consumed: '));
let unit_Price:number = 0;
let tax_price:number = 0;
let total_bill:number = 0;

if (unit_consumed > 100 && unit_consumed <=200) {
    unit_Price = 25;
    tax_price  = 10
    
}else if(unit_consumed > 200 && unit_consumed<= 500){
    unit_Price = 32;
    tax_price = 15
}else if(unit_consumed > 500){
    unit_Price = 40;
    tax_price = 15
}else{
    unit_Price = 20;
    tax_price = 0;
};



let total_bill_without_tax = (unit_consumed*unit_Price);
let tax_amount:number =  (unit_consumed*unit_Price)*tax_price/100
total_bill  = total_bill_without_tax + tax_amount
console.log(`Your bill without Tax ${total_bill_without_tax}, tax amount ${tax_amount} total bill now${total_bill}`)



export{};
