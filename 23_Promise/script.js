// let myPromise = new Promise((resolve, reject) => {
//   resolve("Successful..");

// //   reject("Error in Promise!");
// });
// myPromise
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Cleanup promise"));

// let myPromise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Successfull");
//   } else {
//     reject("Error aa gya");
//   }
// });
// myPromise
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error : ", error))
//   .finally(() => console.log("Cleanup promise"));


// chaning Promise

// let url = "https://dummyjson.com/recipes";
// let myPromise = new Promise((resolve, reject) => {
 
//     try {
//         let response = fetch(url);
//         resolve(response);
//     } catch (error) {
//         reject(error);
//     }
// });
// myPromise
//     .then((data1) => data1.json())
//     .then((data2) => console.log(data2))
//   .catch((error) => console.log("Error : ", error))
//   .finally(() => console.log("Cleanup promise"));


// Promise.all([
//   Promise.resolve("Task1"),
//   Promise.resolve("Task2"),
//   Promise.resolve("Task3"),
// ]).then((data) => console.log(data))
// .catch((error) =>console.log(error))

// Promise.all([
//   Promise.resolve("Task1"),
//   Promise.resolve("Task2"),
//   Promise.reject("Task3"),
// ])
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));


// let url = "https://dummyjson.com/recipes";
// let myPromise = new Promise((resolve, reject) => {
 
//     try {
//         let response = fetch(url);
//         resolve(response);
//     } catch (error) {
//         reject(error);
//     }
// });

// console.log(myPromise)


