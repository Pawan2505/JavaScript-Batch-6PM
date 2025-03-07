// function show() {
//     let box = document.getElementById("input-box").value;
//     console.log(isNaN(box));
//     if (isNaN(box)) {
//         console.log(box);

//     } else {
//          console.log("Input box is empty!");
//     }
// }

// function

// 1.Function Declaration (Named Functions)
// 2. Anonymous Functions (Function Expressions)
// 3. Arrow Functions (ES6 Feature)
// 4.  Nested Functions
// 5. Closer Function
// 6. IIFE (Immediately Invoked Function Expressions)
// 7. Recursion Function

//  1.Function Declaration (Named Functions)

// function greet() {  // definition
//     console.log("Good Morning!")
// }

// greet(); // call

// function addition(x, y) { // fn def -> parameter
//     let result = x + y;
//     return result;
// }

//call -> argument
// console.log("Sum of both number : ",addition(10, 20));
// console.log("Sum of both number : "+ addition(10, 20));

// console.log(`Sum of both numberfght :  ${addition(10, 20)}`);

// Anonymous Functions (Function Expressions)

// let funs = function() {
//     console.log("Hello World!")
// }

// console.log(funs)
// funs();

// let funs = function () {

//     return "Anonymous Functions (Function Expressions)";
// };

// console.log(funs());

// const sumConst = function(num1, num2) {
//     console.log(num1 + num2);
// };

// sumConst(10, 20); // Output: 30

// sumConst = "hello"; // ❌ ERROR: Cannot reassign a `const` variable


//  Arrow Functions (ES6 Feature)


// const arrow = () => console.log("Hello")

// arrow();


// const add = (x, y) => {
//     console.log(`Add : ${x + y}`);
// }

// add(10,20)


// const add = (x, y = 50) => {
//     console.log(`Add : ${x + y}`);
// }

// add(10)

// const add = (x, y = 50) => {
//     console.log(`Add : ${x + y}`);
// }

// add(10,100)

// best practice -> default ko right se do
// const add = (x = 80, y) => {
//     console.log(x)
//     console.log(y)
//   console.log(`Add : ${x + y}`);
// };

// add(100);

// const sub = ()=>{
//     let x = 10;
//     let y = 5;

//     return x-y;
// }

// console.log(sub())


// IIFE (Immediately Invoked Function Expressions)


// (function () {
//     console.log("I am Immediately Invoked Function Expressions");
// })();


// (function (x,y) {
//     console.log(`Multiply : ${x * y}`);
// })(10,20);


// const result = (function (x,y) {
//     return x * y;
// })(10, 20);

// console.log(result)


//  Nested Functions


// // step : 1

// function outerfn() {
    
//     console.log("Outer Function Called..");
//     function innerfn() {
//         console.log("Inner Function Called..")
//     }
// }


// outerfn();



// // step : 2

// function outerfn() {
    
//     console.log("Outer Function Called..");
//     function innerfn() {
//         console.log("Inner Function Called..")
//     }

//     innerfn();
// }


// outerfn();

// step : 3

// function outerfn() {

//     let x = 10;
//  return function innerfn() {
//      return x++;
//     }
// }


// let inner = outerfn();


// console.log(inner()); // 10
// console.log(inner());
// console.log(inner());
// console.log(inner());



//  Recursion Function


// n natural number sum by recursion

// 1. base condition
// 2. iteself calling


// function sum(x) {
    
//     if (x == 1) {
//         return 1;
//     }

//     return x + sum(x - 1);
// }

// const result = sum(10);

// console.log(result);

// Hoisting in javascript

// Hoisting Function

// greet();
// function greet() {
//     console.log("Namaste!");
// }


//Not Hoisting Function => we can not call that fun before function definition

// add(10, 30);

// const add = (x, y) => {
//     console.log(x + y);
// }


// fun()

// const fun = function () {
//     console.log("Anonymous called..")
// }


// hoisting variable be can create by var keyword

// console.log(x)

// var x = 40

// console.log(x)

// // not hoisting variable -> let

// console.log(y)

// let y = 12;

// console.log(y)

// console.log(z)
// const z = 12;
// console.log(z)