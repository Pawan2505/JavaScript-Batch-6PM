// let obj = {
//   name: "Pawan",
//     age: 25,
//     subject: ["HTML", "CSS", "JS"],
  
//     car: {
//         car1: "BMW",
//         car2:"Mahindra"
//     }
// };

// console.log(obj);

// obj.salary = 999;

// console.log(obj)

// obj.name = "Poojan"

// console.log(obj);


// delete obj.age;


// console.log(obj);

// console.log(obj.car.car2)



// const students = [
//     { name: "Amit", age: 20 },
//     { name: "Sara", age: 22 },
//     { name: "Kunal", age: 21 }
// ];
// console.log(students[1].age); // Output: Sara


// students.forEach((student) => {
//   console.log(student.name + " is " + student.age + " years old.");
// });

// for (let student of students) {
//   console.log(student.name);
// }


let obj = {
  name: "Pawan",
    age: 25,
    subject: ["HTML", "CSS", "JS"],
  
    car: {
        car1: "BMW",
        car2:"Mahindra"
    }
};


// console.log(Object.keys(obj.car))

// console.log(Object.values(obj.car))

// console.log(Object.entries(obj))


let obj1 = Object.create(obj);

console.log(obj1.name)

obj1.abc = "dewe" // not ok

console.log(obj)



obj2 = {
    name:"Shita",
    abc: "Efwe",
    dwe:"wfewe"
}

Object.assign(obj, obj2)

console.log(obj)

