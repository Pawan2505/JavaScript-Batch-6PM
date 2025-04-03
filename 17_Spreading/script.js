// **Copying an Array**
let arr = [12, 34, 5, 66];
let newArr = [...arr];
console.log("Copied Array:", newArr);

// **Merging Two Arrays**
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

const mergedArray = [...arr1, ...arr2];
console.log("Merged Array:", mergedArray);

// **Adding New Elements to an Array**
let array = [4, 5, 6];
let updatedArray = [23, ...array, 200, 400];
console.log("Updated Array:", updatedArray);

// **Working with Objects**
const person = {
  name: "Poojan",
  age: 18,
};

console.log("Original Object:", person);

// Adding a new property
console.log("With Salary Property:", { ...person, salary: 500000 });

// Updating an existing property
console.log("Updated Age:", { ...person, age: 21 });
