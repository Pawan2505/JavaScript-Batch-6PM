// let count = 1;
// function counter() {
//     console.log(count);
//     if (count == 5) {
//         clearInterval(interval);
//     }
//     count++;
// }

// let interval = setInterval(counter, 1000);

// let count = 1;
// function counter() {
//   console.log(count);
//   count++;
// }

// let interval = setInterval(counter, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 6000);

// const  greet =()=> {
//     console.log("Namste!");
// }

// let result = setTimeout(greet, 5000);

// clearInterval(result);

// synchronous v/s Asynchronous

// synchronous

// console.log("Step-1");
// console.log("Step-2");
// console.log("Step-3");
// console.log("Step-4");

// Asynchronous

// console.log("Start...")

// setTimeout(() => {
//     console.log("You are under wating...")
// }, 2000);

// console.log("End...");

// const greet = () => {
//   console.log("Namste!");
// };

// let timer = setTimeout(greet, 2000);
// clearTimeout(timer);


// let count = 0;

// // Start an interval that increments `count` every 1 second
// const intervalId = setInterval(() => {
//   count++;
//   console.log(count); // Logs the current count every second
// }, 1000);

// // Stop the interval after 5 seconds
// setTimeout(() => {
//   clearInterval(intervalId); // Stops the interval
//   console.log("Interval stopped.");
// }, 5000);

// let timer = 10;  // Start timer at 10 seconds

// const intervalId = setInterval(() => {
//   console.log(timer);
//   timer--;

//   // Stop the timer when it reaches 0
//   if (timer === 0) {
//     clearInterval(intervalId);  // Stops the interval when timer reaches 0
//     console.log("Time's up!");
//   }
// }, 1000);  // Countdown every second


// // Interval for count
// const intervalCount = setInterval(() => {
//   console.log("Counting...");
// }, 1000);

// // Interval for animation
// const intervalAnimation = setInterval(() => {
//   console.log("Animating...");
// }, 500);

// setTimeout(() => {
//   clearInterval(intervalCount);  // Stops the counting interval after 3 seconds
//   clearInterval(intervalAnimation);  // Stops the animation interval after 3 seconds
// }, 3000);

// // Using setTimeout()
// const timeoutId = setTimeout(() => {
//   console.log("This happens once after 3 seconds.");
// }, 3000);
// clearTimeout(timeoutId);  // Stops the timeout before it executes

// // Using setInterval()
// const intervalId = setInterval(() => {
//   console.log("This happens every 1 second.");
// }, 1000);
// clearInterval(intervalId);  // Stops the interval immediately