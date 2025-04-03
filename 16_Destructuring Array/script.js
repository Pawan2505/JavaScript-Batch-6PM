// **Array Destructuring**
const numbers = [10, 20, 30, 40];

const [a, b, c, d] = numbers;
console.log("Values:", a, b, c, d);

// **Skipping Elements in Destructuring**
const numbers2 = [10, 20, 30, 40];

const [x, , , y] = numbers2;
console.log("First and Last:", x, y);

// **Rest Operator in Destructuring**
const numbers3 = [10, 20, 30, 40, 67];

const [p, q, ...rest] = numbers3;
console.log("First:", p);
console.log("Second:", q);
console.log("Remaining Elements:", ...rest);

// **Swapping Variables Without a Third Variable**
let m = 10,
  n = 20;
[m, n] = [n, m];
console.log("After Swapping:", m, n);

// **Default Values in Destructuring**
let arr1 = [12];
const [val1, val2 = 50] = arr1;
console.log("With Default:", val1, val2);

let arr2 = [12, 100];
const [val3, val4 = 50] = arr2;
console.log("Without Default:", val3, val4);

// **Destructuring in Functions**
function getCoordinate() {
  return [10, 30];
}
const [coordX, coordY] = getCoordinate();
console.log("Coordinates:", coordX, coordY);

// **Nested Array Destructuring**
let matrix = [
  [1, 2],
  [3, 4],
];
const [[m1, m2], [m3, m4]] = matrix;

console.log("Matrix Values:", m1, m2, m3, m4);
