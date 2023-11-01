/*
 * File Name: complex_code.js
 * Description: This code is a complex and elaborate example showcasing various advanced JavaScript concepts and techniques.
 *              It includes object-oriented programming, functional programming, asynchronous code, and more.
 */

// Helper function to create a random delay
function getRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// An array of numbers for demonstration
const numbers = [1, 2, 3, 4, 5];

// Calculate the factorial of each number using map and factorial function
const factorials = numbers.map((num) => factorial(num));

// Asynchronous function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Use the fetchData function asynchronously
fetchData("https://api.example.com/data");

// Higher-order function to create multiplication functions with a specific factor
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

// Create a multiplier function with a factor of 5
const multiplyBy5 = createMultiplier(5);

// Use the multiplier function
console.log(multiplyBy5(10));

// Creating a promise that resolves with a random delay
const delayPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Delayed data");
  }, getRandomDelay());
});

// Using the delayed data
delayPromise.then((data) => {
  console.log(data);
});

// Generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = getRandomNumber(0, i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffling an array of numbers
const shuffledNumbers = shuffleArray(numbers);
console.log(shuffledNumbers);

// Exporting specific functions or variables
export { Person, factorial, multiplyBy5 };