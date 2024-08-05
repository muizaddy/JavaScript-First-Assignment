// Library has a collection of books
// Book is represented as an object

// title (string): The title of the book.
// author (string): The author of the book.
// yearPublished (yearPublished): The year the book was published.
// available (boolean): Whether the book is currently available for borrowing.

// The library's book inventory is stored in an array named library.

// Requirements

// Create the library Array:
const library = [];
// Adding book objects to the array using the push method:
library.push(
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    available: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    available: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
    // Updating the availabilty of "1984" to true
    available: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
    available: true,
  }
);


// Removing "Pride and Prejudice" using the splice method.

const newLibrary = library.splice(3, 1);
console.log(newLibrary);
console.log(library);

// Check if a book is in the library
const check = library[0].title;
console.log(check.includes("The Great Gatsby"));

// Borrow book
// Updating the available status to false
library[0].available = false;
library.shift();
console.log(library);

// Adding new book to the start of the library
library.unshift({
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  yearPublished: 1951,
  available: true,
});
// List of booktitles
const bookTitle = [library[0].title, library[1].title, library[2].title];
const joinTitle = bookTitle.join(", ");
console.log(joinTitle);
// Creating a New Library Section
const newArrivals = library.slice(1);
console.log(newArrivals);
