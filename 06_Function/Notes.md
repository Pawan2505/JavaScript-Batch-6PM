### **Lecture Notes: JavaScript Functions**

#### **1. Function Declaration (Named Functions)**
A **function declaration** (or named function) defines a function with a name, and it can be called anywhere in the scope after its declaration.

**Syntax:**
```javascript
function functionName() {
    // code block
}
```

**Example:**
```javascript
function greet() {
    console.log("Good Morning!");
}
greet(); // Calling the function
```

- **Key Points:**
  - Can be called before or after its definition due to *hoisting* (JavaScript moves function declarations to the top of their scope).
  - Used when you need to reference a function multiple times in your code.

#### **2. Anonymous Functions (Function Expressions)**
An **anonymous function** is a function without a name. It is usually assigned to a variable or passed as an argument to another function.

**Syntax:**
```javascript
let variableName = function() {
    // code block
};
```

**Example:**
```javascript
let funs = function() {
    console.log("Hello World!");
};
funs(); // Calling the anonymous function
```

- **Key Points:**
  - Cannot be hoisted.
  - Often used when functions are used as values, like callbacks or event handlers.
  - Anonymous functions can also return values or perform specific tasks without needing to be reused.

#### **3. Arrow Functions (ES6 Feature)**
**Arrow functions** are a shorter syntax for writing functions, introduced in ECMAScript 6 (ES6). They are anonymous and have a simpler syntax, especially for functions with a single expression.

**Syntax:**
```javascript
const functionName = () => {
    // code block
};
```

For single expressions, you can omit the `{}` and `return` keyword.

**Example:**
```javascript
const add = (x, y) => {
    console.log(`Add: ${x + y}`);
};
add(10, 20); // Calling the arrow function
```

- **Key Points:**
  - **Default Parameters:** You can define default values for parameters in arrow functions.
  - Arrow functions do not have their own `this`, they inherit it from the outer scope (this is important for working with methods in objects).
  - Ideal for short functions and callbacks.

**Example with Default Parameters:**
```javascript
const add = (x, y = 50) => {
    console.log(`Add: ${x + y}`);
};
add(10); // y defaults to 50 if not passed
```

#### **4. Nested Functions**
A **nested function** is a function defined inside another function. The inner function has access to the outer function's variables (lexical scoping).

**Example:**
```javascript
function outerfn() {
    console.log("Outer Function Called..");

    function innerfn() {
        console.log("Inner Function Called..");
    }

    innerfn(); // Calling inner function
}
outerfn(); // Calling the outer function
```

- **Key Points:**
  - Inner functions can access variables from the outer function (closures).
  - Useful when you want to organize your code in a way that certain functionality is only needed inside a parent function.

#### **5. Closures**
A **closure** is a function that "remembers" the scope in which it was created, even if the outer function has finished execution.

**Example:**
```javascript
function outerfn() {
    let x = 10;  // Variable defined in outer function
    return function innerfn() {
        return x++; // This inner function can access x
    }
}

let inner = outerfn();  // inner is now a closure
console.log(inner()); // 10
console.log(inner()); // 11
```

- **Key Points:**
  - The inner function retains access to variables from the outer function's scope even after the outer function has executed.
  - Closures are useful for maintaining private variables or state in your code.

#### **6. Recursion Function**
**Recursion** is a technique where a function calls itself to solve a problem step by step, often with a base condition to terminate the recursive calls.

**Example:**
```javascript
function sum(x) {
    if (x == 1) {
        return 1; // Base case
    }
    return x + sum(x - 1); // Recursive call
}

const result = sum(10);  // Sum of numbers from 1 to 10
console.log(result);  // Output: 55
```

- **Key Points:**
  - **Base Condition:** A condition that ends the recursion. Without it, the function would call itself indefinitely.
  - Recursion can simplify problems like summing numbers, factorials, or tree traversal.

#### **7. IIFE (Immediately Invoked Function Expressions)**
An **IIFE** is a function that is immediately invoked after its creation. It’s useful for creating a private scope and avoiding polluting the global scope.

**Syntax:**
```javascript
(function() {
    // code block
})();
```

**Example:**
```javascript
(function() {
    console.log("I am an Immediately Invoked Function Expression");
})();
```

- **Key Points:**
  - IIFE is used to create a private scope.
  - Commonly used in JavaScript modules to encapsulate variables and avoid global namespace pollution.

#### **8. Hoisting**
**Hoisting** is JavaScript's behavior of moving function and variable declarations to the top of their scope during the compile phase.

- **Hoisting with Functions:** Function declarations are hoisted completely, meaning you can call them before their declaration in the code.
  
  ```javascript
  greet(); // Works because function declarations are hoisted
  function greet() {
      console.log("Hello!");
  }
  ```

- **Hoisting with Variables:**
  - Variables declared with `var` are hoisted, but their values are not assigned until the line of code is executed.
  
    ```javascript
    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5
    ```
  - Variables declared with `let` or `const` are **not hoisted** in the same way and will throw a `ReferenceError` if accessed before initialization.

    ```javascript
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 10;
    ```

### **Note:**
- **Variables:** Always declare variables with `let` or `const` instead of `var` to avoid unexpected behavior due to hoisting.
- **Best Practices:** Use **arrow functions** for concise syntax and **IIFE** for encapsulation of code in modules.
- **Closure and Lexical Scope:** Understanding closures is important for handling asynchronous tasks like callbacks and promises.

---

- Functions are the building blocks of JavaScript.
- There are multiple ways to define and use functions, such as **named functions**, **anonymous functions**, **arrow functions**, and more.
- **Nested functions** and **closures** are advanced concepts that help with managing state and scope.
- **Recursion** is a powerful concept for solving problems step by step.
- **IIFE** allows you to create private scopes, and **hoisting** is an important concept to understand variable and function behavior.

---