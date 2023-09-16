// Taks 42

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
      greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
  }
  
  // Create an array of magician's names
  const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Call make_great() to modify the magicians' names
  const greatMagicians = make_great(magicianNames);
  
  // Call show_magicians() to see the modified list
  show_magicians(greatMagicians);
  