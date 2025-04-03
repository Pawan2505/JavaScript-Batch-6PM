// **Constructor Function**
function Person(id, name, age, salary) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.details = function () {
    return `Name: ${this.name}`;
  };
}

// Creating instances
let p1 = new Person(1, "Pawan", 25, 900);
p1.rollno = 11; // Adding a new property
delete p1.rollno; // Deleting a property
p1.age = 24; // Modifying an existing property

let p2 = new Person(2, "Poojan", 20, 1200);

// Logging details
console.log("Person 1:", p1);
console.log("Person 1 Details:", p1.details());
console.log("Person 2:", p2);

// **Prototype in JavaScript**
Person.prototype.display = function () {
  return this.name;
};

console.log("Prototype Method:", p1.display());

// **Object Prototype Example**
const teacher = {
  name: "Mr. Sharma",
  subject: "Math",
  introduce: function () {
    console.log(`Hello, I am ${this.name} and I teach ${this.subject}`);
  },
};

console.log("Teacher Object:", teacher);
teacher.introduce();

// Creating a new object from teacher using Object.create()
const newTeacher = Object.create(teacher);
console.log("New Teacher Object:", newTeacher);
newTeacher.introduce(); // Uses inherited properties

// Modifying the new object's properties
newTeacher.name = "Pawan";
newTeacher.introduce();

// **Object.create() Example**
const obj1 = {
  name: "Pawan",
};

const temp = Object.create(obj1);
temp.age = 31;

console.log("Temp Object:", temp);
console.log("Original Object:", obj1);
