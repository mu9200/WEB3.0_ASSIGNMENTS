// Taks 21

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items

// Define a type for a book object
type Book = {
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
  };
  
  // Create an array of book objects
  const books: Book[] = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publicationYear: 1960,
      genre: "Fiction"
    },
    {
      title: "1984",
      author: "George Orwell",
      publicationYear: 1949,
      genre: "Dystopian"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationYear: 1925,
      genre: "Classic"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publicationYear: 1937,
      genre: "Fantasy"
    }
  ];
  
  // Print the list of books
  console.log("List of Books:");
  for (const book of books) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Publication Year: ${book.publicationYear}`);
    console.log(`Genre: ${book.genre}`);
    console.log("------------------------");
  }