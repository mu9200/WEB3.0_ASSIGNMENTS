"use strict";
// Taks 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let my_favorite_places = ['Maldives', 'USA', 'Turky', 'Egypt', 'Dubai'];
console.log('---------------------------------------------------------');
//• Print your array in its original order.
console.log(`My Favorite places are ${my_favorite_places}`);
console.log('---------------------------------------------------------');
//• Print your array in alphabetical order without modifying the actual list.
let new_sorted_list = [...my_favorite_places].sort();
console.log(new_sorted_list);
console.log('---------------------------------------------------------');
// • Show that your array is still in its original order by printing it.
console.log(`Array is still in its original order. `);
console.log(`${my_favorite_places}`);
console.log('---------------------------------------------------------');
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Array in reverse alphabetical order without changing the order. `);
let reverse_order = [...my_favorite_places].sort().reverse();
console.log(reverse_order);
console.log('---------------------------------------------------------');
// • Show that your array is still in its original order by printing it again.
console.log(`Array is still in its original order. `);
console.log(`${my_favorite_places}`);
console.log('---------------------------------------------------------');
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(`Array in reverse order. `);
console.log(my_favorite_places.reverse());
console.log('---------------------------------------------------------');
//  • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`Array in reverse order and list back to original order. `);
console.log(my_favorite_places.reverse());
console.log('---------------------------------------------------------');
//  • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Order has been changed');
console.log(my_favorite_places.sort());
console.log('---------------------------------------------------------');
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Reverse Order');
console.log(my_favorite_places.reverse());
