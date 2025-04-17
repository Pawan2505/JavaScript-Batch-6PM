// async -> function -> return promise
// await -> wait for promise to complete

// async function myfun() {
//   let response = await Promise.resolve("Promise resolve");
//   console.log(response);
// }


// async function checkData(num) {
//     try {
//         if (num > 0) {
//             let data = await Promise.resolve("Positive Number")
//             console.log(data);
//         } else {
//             throw await Promise.reject("Negative number!");
//             // let error =await Promise.reject("Negative number!");
//             // throw new Error(error)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// checkData(-4);


function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1: getData()");
      resolve("DataA");
    }, 1000);
  });
}

function getMoreData(a) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2: getMoreData() with:", a);
      resolve(a + " + DataB");
    }, 1000);
  });
}

// Async function to handle all steps
async function getAllData() {
  let a = await getData(); // Step 1
  let b = await getMoreData(a); // Step 2
  console.log("Final Result:", b); // Final Output
}

// Call the main function
getAllData();