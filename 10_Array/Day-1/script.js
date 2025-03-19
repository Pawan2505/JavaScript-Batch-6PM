// Declaration of variables using let, var, const
// const ensures the variable cannot be reassigned

// Example 1: Empty array initialization
const arr = [];
console.log(arr); // Outputs: []

// Example 2: Array with numbers
const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2); // Outputs: [1, 2, 3, 4, 5, 6, 7]

// Example 3: Mixed data types in an array
const arr3 = [1, 2, 3, 4, 5, 6, 7, "vraj", false];
console.log(arr3); // Outputs: [1, 2, 3, 4, 5, 6, 7, "vraj", false]

// Array methods

// 1. push() -> Adds elements to the end of the array
const array = [];
array.push(10); // Adds 10 to the array
array.push(20); // Adds 20 to the array
array.push(30); // Adds 30 to the array
array.push(40); // Adds 40 to the array
array.push(50); // Adds 50 to the array
array.push("Pawan"); // Adds "Pawan" to the array
console.log(array); // Outputs: [10, 20, 30, 40, 50, "Pawan"]

// 2. pop() -> Removes the last element of the array
const deletedValue = array.pop(); // Removes "Pawan" from the array
array.pop(); // Removes 50 from the array
console.log(array); // Outputs: [10, 20, 30, 40]
console.log(`${deletedValue} - deleted from array!`); // Outputs: Pawan - deleted from array!
