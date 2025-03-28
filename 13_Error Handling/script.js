// SyntaxError: missing ) after argument list
// The following code is missing a closing parenthesis. This will cause a syntax error when executed.
console.log("Hello world"); // Corrected code: console.log("Hello world");

// ReferenceError: x is not defined
// The variable 'x' is not declared, so trying to log it will result in a ReferenceError.
console.log(x); // ReferenceError: x is not defined

// ReferenceError: add is not defined
// The function 'add' is not declared, so calling it results in a ReferenceError.
console.log(add()); // ReferenceError: add is not defined

// TypeError: Cannot read properties of undefined (reading 'name')
// Variable 'a' is declared but not initialized, so it is 'undefined'.
// Trying to access 'name' property will cause a TypeError.
let a;
console.log(a.name); // TypeError: Cannot read properties of undefined (reading 'name')

// RangeError: Invalid array length
// Array lengths cannot be negative. Creating an array with a negative size will throw a RangeError.
let arr = new Array(-2); // RangeError: Invalid array length
console.log(arr);

// Trying to access a property of an uninitialized variable 'a'.
// This will cause a runtime error because 'a' is undefined.
let a;
console.log(a.name); // TypeError: Cannot read properties of undefined (reading 'name')

// A general message to indicate the program continues running after errors
console.log("Hello error bhai");

// Using try-catch to handle an error gracefully
try {
  let a;
  return a.name; // Will throw an error because 'a' is undefined
} catch (error) {
  console.log(error.message); // This will log the error message when 'a' is undefined
}

// Continuing execution after the error handling block
console.log("Hello error bhai");

// Using try-catch-finally to handle specific errors and clean up resources
try {
  let a = -2;
  if (a < 0) {
    throw new Error("a cannot be less than zero."); // Throwing a custom error
  }
} catch (ex) {
  console.log(ex.message); // Will log the custom error message
} finally {
  console.log("Cleaning unused memory..."); // Code in the finally block always runs, regardless of error
}

// Division by zero
console.log(10 / 0); // Infinity (no error, but this results in a special value)

// Handling a division by zero inside a try-catch block
try {
  let result = 10 / 0;
  console.log(result); // Logs Infinity, no error
} catch (error) {
  console.log("Error occurred:", error); // Will not run because no error is thrown
}

// Throwing and catching a custom error for an invalid age
try {
  let age = -5;
  if (age < 0) {
    throw "Age cannot be negative!"; // Throwing a custom error message
  }
} catch (error) {
  console.log("Caught Error:", error); // Catching and logging the custom error message
}
