### **1. Introduction to `var` Keyword:**

The `var` keyword is function-scoped and can be re-declared and updated.

```javascript
// Example 1: Declaring and using a var variable
var num = 10; 
console.log(num);  // 10

// Example 2: Redeclaring a var variable
var num = 20;  // Redeclaring num
console.log(num);  // 20

// Example 3: Re-assigning a var variable
num = 50; // Re-assigned value
console.log(num);  // 50

// Example 4: var variables are globally scoped when declared outside of functions
var value = 90;

{
    var value = 100; // Redeclared within the block
}

console.log(value); // 100 (block scoped but var is function-scoped or globally scoped)
```

### **2. Introduction to `let` Keyword (Block Scope):**

The `let` keyword is block-scoped and cannot be redeclared within the same scope.

```javascript
// Example 1: Declaring and using a let variable
let x = 12;
console.log(x);  // 12

// Example 2: Cannot redeclare a let variable in the same scope
// let x = 13; // Uncaught SyntaxError: Identifier 'x' has already been declared

// Example 3: Reassigning a let variable is allowed
x = 13;  // Reassigned value
console.log(x);  // 13

x = 60;
console.log(x);  // 60

// Example 4: Let variable is block-scoped and not accessible outside the block
{
    let num1 = 19;
    console.log(num1);  // 19
}

// console.log(num1); // Uncaught ReferenceError: num1 is not defined

// Example 5: Demonstrating block scope
let num2 = 70;  // Global scope
{
    let num2 = 800; // Local scope inside block
    console.log(num2);  // 800 (local variable in block)
}

console.log(num2);  // 70 (global variable)
```

### **3. Introduction to `const` Keyword (Constant Variables):**

The `const` keyword is also block-scoped, but it must be assigned a value at the time of declaration, and the value cannot be reassigned.

```javascript
// Example 1: Declaring a constant variable
const myValue = "Pawan";
console.log(myValue);  // "Pawan"

// Example 2: Cannot reassign a const variable
// const myValue = "Ram";  // Uncaught SyntaxError: Identifier 'myValue' has already been declared
// console.log(myValue); // Error

// Example 3: Must initialize a const variable at the time of declaration
// const value;  // Uncaught SyntaxError: Missing initializer in const declaration

// Example 4: Cannot change the value of a const variable
// value = 40;  // Uncaught TypeError: Assignment to constant variable.

```

### **4. Using `prompt()` to Get User Input:**

You can take user input using `prompt()` which returns a string value by default.

```javascript
// Example 1: Using prompt() to get user input
let num = prompt("Enter a number:");
console.log(num);  // User input value
console.log(typeof num);  // string (since prompt returns a string)

// Example 2: Converting string input to number using parseInt()
let numInt = parseInt(prompt("Enter a number:"));
console.log(numInt);  // Converted number
console.log(typeof numInt);  // number

// Example 3: Converting string input to a floating-point number using parseFloat()
let numFloat = parseFloat(prompt("Enter a number:"));
console.log(numFloat);  // Converted float number
console.log(typeof numFloat);  // number
```

### **5. Using `const` with User Input:**

Even though `const` variables are constants, you can still take user input and store it in a `const` variable (but you can't reassign the variable later).

```javascript
// Example 1: Using const with user input
const num = parseFloat(prompt("Enter a number:"));
console.log(num);  // Display the user input value
console.log(typeof num);  // number
```

**Note:** The value of a `const` variable can't be changed after it’s initialized, but we can take user input and store it as long as we don't attempt to reassign the variable later.

---

### **Note:**

- **`var`**: Function-scoped and can be redeclared and updated. Be cautious, as it can sometimes lead to bugs due to its global or function scope.
  
- **`let`**: Block-scoped and cannot be redeclared within the same block. However, it can be updated.

- **`const`**: Block-scoped and the value cannot be reassigned after initialization. However, if the value is an object, the contents of the object can still be modified.

---

