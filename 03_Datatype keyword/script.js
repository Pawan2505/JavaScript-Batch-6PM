// -------------------------------------------
// Introduction to `var` Keyword (Function Scope)
// -------------------------------------------

// Example 1: Declaring and using a var variable
var num = 10;
console.log(num); // 10

// Example 2: Redeclaring a var variable
var num = 20; // Redeclared num
console.log(num); // 20

// Example 3: Re-assigning a var variable
num = 50; // Re-assigned value
console.log(num); // 50

// Example 4: var variables are globally scoped when declared outside of functions
var value = 90;

{
  var value = 100; // Redeclared within the block
}

console.log(value); // 100 (var is function-scoped or globally scoped)

// -------------------------------------------
// Introduction to `let` Keyword (Block Scope)
// -------------------------------------------

// Example 1: Declaring and using a let variable
let x = 12;
console.log(x); // 12

// Example 2: Cannot redeclare a let variable in the same scope
// let x = 13;  // Uncaught SyntaxError: Identifier 'x' has already been declared

// Example 3: Reassigning a let variable is allowed
x = 13; // Reassigned value
console.log(x); // 13

x = 60;
console.log(x); // 60

// Example 4: Let variable is block-scoped and not accessible outside the block
{
  let num1 = 19;
  console.log(num1); // 19
}

// console.log(num1); // Uncaught ReferenceError: num1 is not defined

// Example 5: Demonstrating block scope
let num2 = 70; // Global scope
{
  let num2 = 800; // Local scope inside block
  console.log(num2); // 800 (local variable in block)
}

console.log(num2); // 70 (global variable)

// -------------------------------------------
// Introduction to `const` Keyword (Constant Variables)
// -------------------------------------------

// Example 1: Declaring a constant variable
const myValue = "Pawan";
console.log(myValue); // "Pawan"

// Example 2: Cannot reassign a const variable
// const myValue = "Ram";  // Uncaught SyntaxError: Identifier 'myValue' has already been declared
// console.log(myValue); // Error

// Example 3: Must initialize a const variable at the time of declaration
// const value;  // Uncaught SyntaxError: Missing initializer in const declaration

// Example 4: Cannot change the value of a const variable
// value = 40;  // Uncaught TypeError: Assignment to constant variable.

// -------------------------------------------
// Using `prompt()` to Get User Input
// -------------------------------------------

// Example 1: Using prompt() to get user input
let num = prompt("Enter a number:");
console.log(num); // User input value
console.log(typeof num); // string (since prompt returns a string)

// Example 2: Converting string input to number using parseInt()
let numInt = parseInt(prompt("Enter a number:"));
console.log(numInt); // Converted number
console.log(typeof numInt); // number

// Example 3: Converting string input to a floating-point number using parseFloat()
let numFloat = parseFloat(prompt("Enter a number:"));
console.log(numFloat); // Converted float number
console.log(typeof numFloat); // number

// -------------------------------------------
// Using `const` with User Input (Demonstrating const with user input)
// -------------------------------------------

// Example 1: Using const with user input
const numInput = parseFloat(prompt("Enter a number:"));
console.log(numInput); // Display the user input value
console.log(typeof numInput); // number

// -------------------------------------------
// Reminder: You can't assign a new value to a const variable after it's been assigned.
// Example: This would cause an error:
// const num = 10;
// num = 20;  // Uncaught TypeError: Assignment to constant variable.
// -------------------------------------------

// -------------------------------------------
// Note :
// -------------------------------------------
// - `var` is function-scoped and can be redeclared and reassigned.
// - `let` is block-scoped and can be reassigned, but not redeclared within the same scope.
// - `const` is block-scoped, cannot be reassigned, and must be initialized at the time of declaration.
// - `prompt()` allows for taking user input, which by default is a string. You can use `parseInt()` or `parseFloat()` for converting to numbers.
