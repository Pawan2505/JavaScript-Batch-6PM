## **JavaScript Array Methods - Detailed Notes**
---

In JavaScript, arrays are used to store multiple values in a single variable. Arrays come with a variety of built-in methods that help you manipulate or retrieve data from them. Below are some commonly used array methods explained in detail:

### 1. **`splice()`**  
The `splice()` method is used to add or remove elements from an array at a specified index.

**Syntax:**
```javascript
arr.splice(start, deleteCount, item1, item2, ...);
```

- `start`: The index at which to start changing the array.
- `deleteCount`: The number of elements to remove from the array (optional).
- `item1, item2, ...`: The elements to add to the array (optional).

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
arr.splice(2, 1); // Removes 1 element from index 2
console.log(arr); // Output: [12, 34, 8, 9]

arr.splice(2, 2, 1000, 2000); // Removes 2 elements starting from index 2 and inserts 1000, 2000
console.log(arr); // Output: [12, 34, 1000, 2000]
```

### 2. **`slice()`**  
The `slice()` method returns a shallow copy of a portion of an array into a new array.

**Syntax:**
```javascript
arr.slice(start, end);
```
- `start`: The index where to start the extraction (inclusive).
- `end`: The index where to end the extraction (exclusive). If omitted, it extracts till the end of the array.

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
const brr = arr.slice(1, 3); // Extracts elements from index 1 to 3 (exclusive)
console.log(brr); // Output: [34, 567]
```

### 3. **`shift()` and `unshift()`**  
- **`shift()`** removes the first element from an array and returns that element.
- **`unshift()`** adds one or more elements to the beginning of an array and returns the new array length.

**Examples:**
```javascript
const arr = [12, 34, 567, 8, 9];
const deleted = arr.shift(); // Removes the first element
console.log(deleted); // Output: 12
console.log(arr); // Output: [34, 567, 8, 9]

arr.unshift(200, 10, 20); // Adds 200, 10, 20 at the start
console.log(arr); // Output: [200, 10, 20, 34, 567, 8, 9]
```

### 4. **`at()`**  
The `at()` method allows you to access an element at a specific index, including negative indices (which count from the end of the array).

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
console.log(arr.at(2)); // Output: 567 (element at index 2)
console.log(arr.at(-1)); // Output: 9 (last element)
```

### 5. **`indexOf()`**  
The `indexOf()` method returns the first index at which a specified value is found in the array. If the element is not found, it returns `-1`.

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
console.log(arr.indexOf(8)); // Output: 3
console.log(arr.indexOf(100)); // Output: -1
```

### 6. **`findIndex()`**  
The `findIndex()` method returns the index of the first element that satisfies the provided testing function.

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
const value = arr.findIndex((item) => item === 8); 
console.log(value); // Output: 3 (index of element 8)
```

### 7. **`includes()`**  
The `includes()` method checks if a specified element exists in the array and returns `true` or `false`.

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
console.log(arr.includes(567)); // Output: true
console.log(arr.includes(562347)); // Output: false
```

### 8. **`forEach()`**  
The `forEach()` method is used to iterate over each element in the array and perform an operation.

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
arr.forEach((item) => {
    console.log(item); // Logs each item in the array
});
```

### 9. **`map()`**  
The `map()` method creates a new array by applying a function to each element of the original array.

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
const doubledArr = arr.map((item) => item * 2);
console.log(doubledArr); // Output: [24, 68, 1134, 16, 18]
```

### 10. **`reduce()`**  
The `reduce()` method reduces the array to a single value by applying a function to each element in the array.

**Syntax:**
```javascript
arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);
```

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
const sum = arr.reduce((acc, item) => acc + item, 0);
console.log(sum); // Output: 630
```

### 11. **`filter()`**  
The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
const evenNumbers = arr.filter((item) => item % 2 === 0);
console.log(evenNumbers); // Output: [12, 34, 8]
```

### 12. **`every()`**  
The `every()` method tests whether all elements in the array pass the test implemented by the provided function.

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
const allEven = arr.every((item) => item % 2 === 0);
console.log(allEven); // Output: false (not all elements are even)
```

### 13. **`some()`**  
The `some()` method tests whether at least one element in the array passes the test implemented by the provided function.

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
const someEven = arr.some((item) => item % 2 === 0);
console.log(someEven); // Output: true (there are even numbers in the array)
```

### 14. **`length`**  
The `length` property returns the number of elements in an array.

**Example:**
```javascript
const arr = [12, 34, 567, 8, 9];
console.log(arr.length); // Output: 5
```

---

## **Note:**
- **Mutating Methods:** `splice()`, `shift()`, `unshift()` (modify the original array).
- **Non-mutating Methods:** `slice()`, `map()`, `filter()`, `reduce()` (do not modify the original array, but return new values).
- **Searching & Finding:** `indexOf()`, `includes()`, `findIndex()`.
- **Iteration:** `forEach()`, `map()`.
- **Condition Checking:** `every()`, `some()`, `filter()`.

---
