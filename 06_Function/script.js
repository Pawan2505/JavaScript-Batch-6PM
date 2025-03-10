// // 1. Function Declaration (Named Functions)
// // Function definition with a name and called explicitly
// function greet() {
//   console.log("Good Morning!");
// }
// greet(); // Calling the function

// // Addition function with parameters
// function addition(x, y) {
//   let result = x + y; // performing addition
//   return result; // returning the result
// }
// console.log("Sum of both numbers: ", addition(10, 20)); // Calling with arguments

// // 2. Anonymous Functions (Function Expressions)
// // An anonymous function assigned to a variable (no name)
// let funs = function () {
//   console.log("Hello World!");
// };
// funs(); // Calling the function

// // Function returning a string (Anonymous Function)
// let funs2 = function () {
//   return "Anonymous Functions (Function Expressions)";
// };
// console.log(funs2()); // Calling the function

// // Using a const to define an anonymous function
// const sumConst = function (num1, num2) {
//   console.log(num1 + num2); // Output the sum
// };
// sumConst(10, 20); // Calling function

// // Error when trying to reassign a const function
// // sumConst = "hello"; // Uncomment to see the error

// // 3. Arrow Functions (ES6 Feature)
// // Shortened function syntax using arrow notation

// const arrow = () => console.log("Hello"); // Function with no parameters
// arrow(); // Calling the arrow function

// // Arrow function with parameters
// const add = (x, y) => {
//   console.log(`Add: ${x + y}`);
// };
// add(10, 20); // Calling function

// // Arrow function with default parameters
// const addWithDefault = (x, y = 50) => {
//   console.log(`Add: ${x + y}`);
// };
// addWithDefault(10); // y defaults to 50 if not passed
// addWithDefault(10, 100); // y is set to 100

// // Best practice for default parameters
// const addWithDefaultRight = (x = 80, y) => {
//   console.log(x);
//   console.log(y);
//   console.log(`Add: ${x + y}`);
// };
// addWithDefaultRight(100); // Only x is passed

// // 4. Nested Functions
// // Function inside another function

// function outerfn() {
//   console.log("Outer Function Called..");

//   // Inner function
//   function innerfn() {
//     console.log("Inner Function Called..");
//   }

//   innerfn(); // Calling inner function
// }
// outerfn(); // Calling outer function

// // 5. Closures
// // Function returning another function

// function outerfnClosure() {
//   let x = 10;
//   return function innerfnClosure() {
//     return x++; // Increment x on each call
//   };
// }

// let inner = outerfnClosure(); // inner is now a closure
// console.log(inner()); // 10
// console.log(inner()); // 11
// console.log(inner()); // 12
// console.log(inner()); // 13

// // 6. Recursion Function
// // A function calling itself to solve a problem

// // Sum of n natural numbers using recursion
// function sum(x) {
//   if (x == 1) {
//     return 1; // Base condition
//   }
//   return x + sum(x - 1); // Recursively calling sum
// }

// const result = sum(10); // Sum of numbers from 1 to 10
// console.log(result); // Output the result

// // 7. IIFE (Immediately Invoked Function Expressions)
// // Function that runs immediately after being defined

// (function () {
//   console.log("I am an Immediately Invoked Function Expression");
// })();

// // IIFE with parameters
// (function (x, y) {
//   console.log(`Multiply: ${x * y}`);
// })(10, 20); // Parameters passed immediately

// // Storing IIFE result in a variable
// const result2 = (function (x, y) {
//   return x * y;
// })(10, 20);
// console.log(result2); // Output: 200

// // Hoisting in JavaScript

// // Function Hoisting - Can be called before definition due to hoisting
// greet(); // Calling before definition
// function greet() {
//   console.log("Namaste!");
// }

// // Variable Hoisting with var
// console.log(x); // undefined due to hoisting
// var x = 40;
// console.log(x); // 40 after initialization

// // Variable Hoisting with let/const (not hoisted)
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 12;
// console.log(y); // 12 after initialization

// // Hoisting with const
// console.log(z); // ReferenceError: Cannot access 'z' before initialization
// const z = 12;
// console.log(z); // 12 after initialization

// // Not Hoisted - Arrow functions, and function expressions (assigned to variables)
// add(10, 30); // Error: Cannot call before definition
// const add = (x, y) => {
//   console.log(x + y);
// };

// // Anonymous function assigned to variable (not hoisted)
// fun(); // Error: Cannot call before definition
// const fun = function () {
//   console.log("Anonymous function called..");
// };
