// Taks 41 

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  // Create an array of magician's names
  const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Call the function to show the magicians
  show_magicians(magicianNames);