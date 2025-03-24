// --- 1. Simple Object Definition ---

// Defining a basic object with properties
const person = {
  name: "Pawan Maurya",
  age: 25,
  salary: 999,
};

// Logging the entire object to the console
console.log(person);

// Accessing and logging individual properties
console.log(person.name); // Logs "Pawan Maurya"
console.log(person.age); // Logs 25
console.log(person.salary); // Logs 999

// --- 2. Adding Methods to an Object ---

// Defining an object with properties and a method
const personWithMethod = {
  name: "Pawan Maurya",
  age: 25,
  salary: 999,

  // Method to display a message
  display: function () {
    return "Bhai display run kiye ho!";
  },
};

// Logging the object and calling the display method
console.log(personWithMethod); // Logs the entire object
console.log(personWithMethod.name); // Logs "Pawan Maurya"
console.log(personWithMethod.age); // Logs 25
console.log(personWithMethod.salary); // Logs 999
console.log(personWithMethod.display()); // Logs the string "Bhai display run kiye ho!"

// --- 3. Using `this` Inside an Object Method ---

// Using the 'this' keyword inside an object method
const personWithThis = {
  name: "Pawan Maurya",
  age: 25,
  salary: 999,

  // Method that refers to the object's 'name' property using 'this'
  display: function () {
    return `${this.name} Bhai display run kiye ho!`;
  },
};

// Logging the object and calling the display method
console.log(personWithThis); // Logs the entire object
console.log(personWithThis.name); // Logs "Pawan Maurya"
console.log(personWithThis.age); // Logs 25
console.log(personWithThis.salary); // Logs 999
console.log(personWithThis.display()); // Logs "Pawan Maurya Bhai display run kiye ho!"

// --- 4. Accessing Object Properties Using `this` ---

// Using 'this' to access object properties in a method
const personAccessingWithThis = {
  name: "Pawan Maurya",
  age: 25,
  salary: 999,

  // Method that logs the object's 'name' property using 'this'
  display: function () {
    console.log(this.name); // Logs "Pawan Maurya"
  },
};

// Calling the display method
personAccessingWithThis.display();

// --- Note: ---

// 1. Objects in JavaScript are containers for properties (key-value pairs).
//    Properties can store data like strings or numbers and methods (functions).

// 2. Methods are functions that belong to an object and are used to perform actions related to that object.

// 3. The `this` keyword refers to the current object inside its method, which allows access to its properties.
