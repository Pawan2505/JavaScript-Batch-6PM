// let num = 145475;

// let count = 0;
// while (num > 0) {
//     num = Math.floor(num / 10); // remove last digit from number
//     count++;
// }

// console.log(count)




// let num = 145475;

// let sum = 0;
// while (num > 0) {

//     let digit = num % 10; // take last digit

//     sum += digit;

//     num = Math.floor(num / 10); // remove last digit from number

// }

// console.log(sum)


let num = 145475;

let rev = 0;
while (num > 0) {
  let digit = num % 10; // take last digit

  rev = rev*10 + digit;

  num = Math.floor(num / 10); // remove last digit from number
}

console.log(rev);
