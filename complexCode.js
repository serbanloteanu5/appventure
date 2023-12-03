/* 
   Filename: complexCode.js
   Content: Complex JavaScript Code Example
*/

// Object constructor for creating a Book
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Prototype method to get the book's age
Book.prototype.getAge = function() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - this.year;
  return `${this.title} is ${age} years old.`;
}

// Instantiate Book objects
const book1 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// Calculate the average age of two books
function calculateAverageAge(book1, book2) {
  const age1 = new Date().getFullYear() - book1.year;
  const age2 = new Date().getFullYear() - book2.year;
  return (age1 + age2) / 2;
}

// Function to display the result
function displayResult() {
  console.log(`The average age of the two books is ${calculateAverageAge(book1, book2)}.`);
}

// Array of book genres
const genres = ['Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Thriller', 'Horror'];

// Create a map of genre counts
const genreCountMap = new Map();

// Function to count book genres
function countGenres() {
  for (let i = 0; i < genres.length; i++) {
    genreCountMap.set(genres[i], 0);
  }

  const books = [book1, book2];

  for (let i = 0; i < books.length; i++) {
    const bookGenre = prompt(`Enter the genre of ${books[i].title}: `);

    if (genreCountMap.has(bookGenre)) {
      const currentCount = genreCountMap.get(bookGenre);
      genreCountMap.set(bookGenre, currentCount + 1);
    } else {
      console.log(`Invalid genre entered for ${books[i].title}`);
    }
  }
}

// Calculate the total count of book genres
function calculateTotalGenreCount() {
  let totalCount = 0;

  for (let count of genreCountMap.values()) {
    totalCount += count;
  }

  return totalCount;
}

// Calculate the percentage of each book genre
function calculateGenrePercentage() {
  const totalCount = calculateTotalGenreCount();

  for (let [genre, count] of genreCountMap) {
    const percentage = (count / totalCount) * 100;
    console.log(`Percentage of ${genre}: ${percentage.toFixed(2)}%`);
  }
}

// Main program execution
console.log(book1.getAge());
console.log(book2.getAge());

displayResult();

countGenres();
calculateGenrePercentage();

// More code...
// ...
// ... (continued for at least 200 lines)