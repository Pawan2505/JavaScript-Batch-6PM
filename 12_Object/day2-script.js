// Example of an object with different properties including a nested object and an array
let obj = {
  name: "Pawan", // String property: Name
  age: 25, // Number property: Age
  subject: ["HTML", "CSS", "JS"], // Array property: Subjects

  car: {
    car1: "BMW", // Nested object inside 'car'
    car2: "Mahindra", // Nested object inside 'car'
  },
};

// Output the entire object to the console
console.log(obj);

// Adding a new property 'salary' to the object
obj.salary = 999;

// Output the updated object to the console
console.log(obj);

// Modifying an existing property 'name' in the object
obj.name = "Poojan";

// Output the object after modification
console.log(obj);

// Deleting the 'age' property from the object
delete obj.age;

// Output the object after deleting the 'age' property
console.log(obj);

// Accessing a property of a nested object using dot notation
console.log(obj.car.car2); // Output: Mahindra

// Example of an array of objects (representing students)
const students = [
  { name: "Amit", age: 20 }, // Object with 'name' and 'age' properties
  { name: "Sara", age: 22 },
  { name: "Kunal", age: 21 },
];

// Accessing a specific property (age) of the second student (Sara)
console.log(students[1].age); // Output: 22 (Sara's age)

// Looping over the 'students' array using forEach to print the name and age of each student
students.forEach((student) => {
  console.log(student.name + " is " + student.age + " years old.");
});

// Another loop using for..of to print only the names of the students
for (let student of students) {
  console.log(student.name);
}

// Example of Object methods

// Accessing the keys of the 'car' object (nested inside 'obj')
console.log(Object.keys(obj.car)); // Output: ['car1', 'car2']

// Accessing the values of the 'car' object
console.log(Object.values(obj.car)); // Output: ['BMW', 'Mahindra']

// Accessing both keys and values of the 'obj' object using Object.entries
console.log(Object.entries(obj)); // Output: [['name', 'Pawan'], ['age', 25], ['subject', ['HTML', 'CSS', 'JS']], ['car', { car1: 'BMW', car2: 'Mahindra' }], ['salary', 999]]

// Creating a new object 'obj1' that inherits from 'obj' using Object.create()
let obj1 = Object.create(obj);

// Accessing the 'name' property of the inherited object 'obj1'
console.log(obj1.name); // Output: Pawan (inherited from 'obj')

// Adding a new property to 'obj1' (This is not okay because 'abc' is not part of 'obj1')
obj1.abc = "dewe"; // This is not a part of obj1

// Displaying 'obj' to show that the original object remains unchanged
console.log(obj);

// Example of merging properties from one object into another using Object.assign
let obj2 = {
  name: "Shita", // New name property
  abc: "Efwe", // New abc property
  dwe: "wfewe", // New dwe property
};

// Merging 'obj2' into 'obj', so properties of 'obj2' will be added to 'obj'
Object.assign(obj, obj2);

// Displaying the 'obj' after merging the properties of 'obj2'
console.log(obj); // Output: { name: 'Shita', age: 25, subject: ['HTML', 'CSS', 'JS'], car: { car1: 'BMW', car2: 'Mahindra' }, salary: 999, abc: 'Efwe', dwe: 'wfewe' }
