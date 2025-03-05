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
