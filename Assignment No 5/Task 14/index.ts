// Task 14

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let people_for_dinner:string[] = ['Ali', 'Hamza', 'Shaikh'];

for (let i = 0; i < people_for_dinner.length; i++){
    console.log(`I want to invite you for dinner Tonight Mr ${people_for_dinner[i]}`)
}

people_for_dinner.forEach((people_name)=>{
    console.log((`I want to invite you for dinner Tonight Mr ${people_name}`))
})