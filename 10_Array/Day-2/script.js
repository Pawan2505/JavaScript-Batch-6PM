// Initialize an array
const arr = [12, 34, 567, 8, 9];

// **1. Splice: Modifying array by adding/removing elements**
// Syntax: arr.splice(start, deleteCount, itemsToAdd)
// Removing 1 element from index 2
arr.splice(2, 1);
console.log(arr);

// Removing 2 elements from index 2
arr.splice(2, 2);
console.log(arr);

// Removing 2 elements from index 2 and inserting new values
arr.splice(2, 2, 1000, 2000);
console.log(arr);

// **2. Slice: Creating a new array from a part of the original array**
// Syntax: arr.slice(start, end)
// Creating a new array from index 1 to 3 (excluding index 3)
const brr = arr.slice(1, 3);
console.log(brr);

// **3. Shift and Unshift: Modifying the beginning of the array**
// Removing the first element from the array and logging it
const deleted = arr.shift();
console.log(`${deleted} value deleted from array`);

// Adding multiple elements at the beginning of the array
arr.unshift(10, 20, 30); // Adding 10, 20, and 30
arr.unshift(200); // Adding 200 at the start
console.log(arr);

// **4. Accessing Elements: Using methods like at() and indexOf()**
// Using the 'at' method to access the element at index 2
console.log(arr.at(2));

// Finding the index of element 8 in the array
console.log(arr.indexOf(8));

// Using findIndex to find the index of the element 8
let value = arr.findIndex((item) => item === 8);
console.log(value);

// **5. Includes: Checking if a value exists in the array**
// Checking if 567 is present in the array
console.log(arr.includes(567));

// Checking if 562347 is present in the array
console.log(arr.includes(562347));

// **6. Iterating Over Arrays: Using forEach to iterate**
arr.forEach((item) => {
  console.log(item); // Logs each item in the array
});

// **7. Map: Transforming array elements**
// Creating a new array where each element is multiplied by 2
const doubledArr = arr.map((item) => item * 2);
console.log(doubledArr);

// Using map to log each item (same as forEach)
arr.map((item) => console.log(item));

// **8. Reduce: Accumulating values**
// Using reduce to sum the values of the array, starting with an initial value of 1
const sum = arr.reduce((acc, item) => acc + item, 1);
console.log(sum);

// **9. Filter: Selecting elements based on a condition**
// Filtering out even numbers from the array
const evenNumbers = arr.filter((item) => item % 2 === 0);
console.log(evenNumbers);

// **10. Every: Checking if all elements satisfy a condition**
// Checking if all elements in the array are even
const allEven = arr.every((item) => item % 2 === 0);
console.log(allEven);

// **11. Some: Checking if at least one element satisfies a condition**
// Checking if there is at least one even number in the array
const someEven = arr.some((item) => item % 2 === 0);
console.log(someEven);

// **12. Array Length: Getting the length of the array**
console.log(arr.length);
