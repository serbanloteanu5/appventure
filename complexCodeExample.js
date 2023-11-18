/**
 * Filename: complexCodeExample.js
 * 
 * This code demonstrates a complex and sophisticated JavaScript program that simulates a virtual pet game.
 * The virtual pet has various attributes and behaviors, and interacts with the user through a text-based interface.
 * The code includes object-oriented programming concepts, game mechanics, and interactive user input handling.
 */

// Pet class represents a virtual pet with name, age, and various attributes
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.hunger = 50;
    this.energy = 100;
    this.happiness = 100;
    this.hygiene = 100;
  }

  feed(amount) {
    this.hunger -= amount;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
    this.energy += amount;
    this.happiness += amount;
  }

  sleep() {
    this.energy = 100;
    this.happiness += 10;
  }

  play() {
    this.energy -= 10;
    if (this.energy < 0) {
      this.energy = 0;
    }
    this.happiness += 20;
  }

  clean() {
    this.hygiene = 100;
    this.happiness += 10;
  }
}

// Game class manages the game state and user interactions
class Game {
  constructor() {
    this.pet = null;
    this.isGameOver = false;
  }

  start() {
    const name = prompt("Welcome to the Virtual Pet game! Please enter a name for your pet:");
    const age = parseInt(prompt("Enter the age of your pet:"));
    this.pet = new Pet(name, age);
    this.displayStats();
    this.gameLoop();
  }

  displayStats() {
    console.log(`Name: ${this.pet.name}`);
    console.log(`Age: ${this.pet.age}`);
    console.log(`Hunger: ${this.pet.hunger}`);
    console.log(`Energy: ${this.pet.energy}`);
    console.log(`Happiness: ${this.pet.happiness}`);
    console.log(`Hygiene: ${this.pet.hygiene}`);
  }

  gameLoop() {
    while (!this.isGameOver) {
      const action = prompt(`What would you like to do with ${this.pet.name}? (feed/sleep/play/clean/quit)`);
      this.handleAction(action.toLowerCase());
      this.updateStats();
      this.checkGameOver();
    }
    console.log("Game over! Thanks for playing!");
  }

  handleAction(action) {
    switch (action) {
      case "feed":
        const foodAmount = parseInt(prompt("Enter the amount of food to feed:"));
        this.pet.feed(foodAmount);
        break;
      case "sleep":
        this.pet.sleep();
        break;
      case "play":
        this.pet.play();
        break;
      case "clean":
        this.pet.clean();
        break;
      case "quit":
        this.isGameOver = true;
        break;
      default:
        console.log("Invalid action!");
    }
  }

  updateStats() {
    this.pet.hunger += 5;
    if (this.pet.hunger > 100) {
      this.pet.hunger = 100;
    }
    this.pet.energy -= 10;
    if (this.pet.energy < 0) {
      this.pet.energy = 0;
    }
    this.pet.happiness -= 5;
    if (this.pet.happiness < 0) {
      this.pet.happiness = 0;
    }
    this.pet.hygiene -= 2;
    if (this.pet.hygiene < 0) {
      this.pet.hygiene = 0;
    }
    this.displayStats();
  }

  checkGameOver() {
    if (
      this.pet.hunger === 100 ||
      this.pet.energy === 0 ||
      this.pet.happiness === 0 ||
      this.pet.hygiene === 0
    ) {
      this.isGameOver = true;
    }
  }
}

// Initialize the game
const game = new Game();
game.start();