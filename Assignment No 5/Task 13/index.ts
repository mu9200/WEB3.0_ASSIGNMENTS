// Taks 13

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.


let my_favorite_transport: Array<[transport:string, brand:string]> = [];

my_favorite_transport.push(['Car', 'Suzuki']);
my_favorite_transport.push(['Motercycle', 'Kawaskai']);
my_favorite_transport.push(['Cycle', 'China'])

console.log(my_favorite_transport)

my_favorite_transport.forEach(([transport, brand]) =>
{
    console.log(`I would like to own a ${transport} ${brand}.`)
})