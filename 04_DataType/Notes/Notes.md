## **Lecture Notes: Data Types in JavaScript**

### **Introduction**
In JavaScript, a **data type** is an attribute of data that tells the interpreter how the programmer intends to use the data. JavaScript has **primitives** and **objects** as its data types. Understanding the different data types and how they behave is crucial for writing effective code.

---

### **1. Primitive Data Types**

Primitive data types in JavaScript are **immutable** (their value cannot be changed once created) and are compared by their value. These include:

- **String**
- **Number**
- **BigInt**
- **Boolean**
- **undefined**
- **Symbol**
- **null**

#### **String**
- A string represents a sequence of characters enclosed in single (`'`) or double (`"`) quotes.
  
  ```javascript
  let greeting = "Namaste, Duniya!";
  let name = 'Rahul Sharma';
  
  console.log(typeof greeting); // string
  console.log(greeting);        // "Namaste, Duniya!"
  ```

- **Important Methods for Strings:**
  - `.length`: Gets the length of the string.
  - `.toUpperCase()`: Converts to uppercase.
  - `.toLowerCase()`: Converts to lowercase.
  - `.substring()`: Extracts a part of a string.

  ```javascript
  let text = "JavaScript";
  console.log(text.length);       // 10
  console.log(text.toUpperCase()); // "JAVASCRIPT"
  console.log(text.toLowerCase()); // "javascript"
  console.log(text.substring(0, 4)); // "Java"
  ```

#### **Number**
- A number can represent both integers and floating-point numbers.

  ```javascript
  let age = 25;
  let temperature = 37.5;
  
  console.log(typeof age);           // number
  console.log(age + temperature);    // 62.5
  ```

- **Important Methods for Numbers:**
  - `parseInt()`: Converts a string to an integer.
  - `parseFloat()`: Converts a string to a floating-point number.
  - `Number()`: Can be used to convert strings to numbers.

  ```javascript
  let numStr = "45.67";
  console.log(parseInt(numStr));  // 45
  console.log(parseFloat(numStr)); // 45.67
  ```

#### **BigInt**
- BigInt is a data type used for handling large integers that exceed the limits of the Number type.
  
  ```javascript
  let bigNumber = 9007199254740991n;  // Large number with BigInt notation
  console.log(typeof bigNumber);       // bigint
  ```

#### **Boolean**
- A boolean represents one of two values: `true` or `false`.

  ```javascript
  let isJavaScriptFun = true;
  let isOld = false;
  
  console.log(typeof isJavaScriptFun); // boolean
  console.log(isJavaScriptFun);        // true
  ```

#### **undefined**
- The `undefined` type represents a variable that has been declared but has not been assigned a value.

  ```javascript
  let notAssigned;
  console.log(typeof notAssigned);  // undefined
  ```

#### **null**
- `null` represents the intentional absence of any object value. It is an assignment value.

  ```javascript
  let emptyValue = null;
  console.log(typeof emptyValue);  // object (this is a known bug in JavaScript)
  ```

#### **Symbol**
- A symbol is a unique and immutable value often used as an identifier for object properties.

  ```javascript
  let sym1 = Symbol("description");
  let sym2 = Symbol("description");
  
  console.log(sym1 === sym2);  // false (they are unique)
  ```

---

### **2. Reference Data Types (Objects)**

Unlike primitive types, **objects** are **mutable** (can be changed), and they are compared by their reference.

#### **Object**
- An object is a collection of key-value pairs (also known as properties).

  ```javascript
  let person = {
    name: "Rahul",
    age: 30,
    isEmployed: true
  };
  
  console.log(person.name);       // "Rahul"
  console.log(person["age"]);     // 30
  ```

- **Methods for Objects:**
  - `.hasOwnProperty()`: Checks if the object contains the specified property.
  - `Object.keys()`: Returns an array of the object’s keys.
  - `Object.values()`: Returns an array of the object’s values.

  ```javascript
  console.log(person.hasOwnProperty('name'));  // true
  console.log(Object.keys(person));           // ["name", "age", "isEmployed"]
  console.log(Object.values(person));         // ["Rahul", 30, true]
  ```

#### **Array**
- An array is an ordered collection of elements, which can be of any data type.

  ```javascript
  let fruits = ["Apple", "Banana", "Mango"];
  
  console.log(fruits[0]);    // "Apple"
  console.log(fruits.length); // 3
  ```

- **Methods for Arrays:**
  - `.push()`: Adds an element to the end of the array.
  - `.pop()`: Removes the last element of the array.
  - `.shift()`: Removes the first element of the array.
  - `.unshift()`: Adds an element to the beginning of the array.

  ```javascript
  fruits.push("Orange");
  console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
  ```

#### **Function**
- A function is a block of code designed to perform a particular task.

  ```javascript
  function greet(name) {
    return "Namaste, " + name + "!";
  }
  
  console.log(greet("Rahul")); // "Namaste, Rahul!"
  ```

#### **Date**
- JavaScript has a built-in `Date` object to handle dates and times.

  ```javascript
  let today = new Date();
  console.log(today); // Current date and time
  ```

---

### **3. Type Coercion in JavaScript**

JavaScript is **loosely typed**, meaning it performs **type coercion**, which automatically converts one data type to another when necessary.

#### **Implicit Coercion**
- JavaScript automatically converts one type to another during operations.

  ```javascript
  let num = "10" + 5;  // Implicitly converts 5 to string and concatenates
  console.log(num);     // "105"
  
  let sum = "10" - 5;   // Implicitly converts "10" to a number and performs subtraction
  console.log(sum);     // 5
  ```

#### **Explicit Coercion**
- We can explicitly convert data types using functions like `String()`, `Number()`, and `Boolean()`.

  ```javascript
  let num = String(10);  // Converts number to string
  let booleanValue = Boolean("");  // Converts empty string to boolean (false)
  
  console.log(num);  // "10"
  console.log(booleanValue); // false
  ```

---

### **4. Type Checking**

You can check the type of a variable using the `typeof` operator.

```javascript
let str = "Hello";
console.log(typeof str);  // "string"

let num = 123;
console.log(typeof num);  // "number"

let isTrue = true;
console.log(typeof isTrue);  // "boolean"

let person = { name: "Amit", age: 25 };
console.log(typeof person);  // "object"
```

---

### **Note:**

JavaScript provides various **data types** that allow developers to store, manipulate, and work with data in a variety of ways. Understanding the differences between **primitive types** and **reference types** is crucial for efficient coding, as it affects how data is manipulated, compared, and passed around in the program.

- **Primitive types** are immutable and compared by value.
- **Reference types** are mutable and compared by reference.
- JavaScript's dynamic typing and type coercion allow for flexibility but also require careful handling to avoid errors.

---

### **Questions**

1. What is the difference between `null` and `undefined` in JavaScript?
2. How do you convert a string to a number in JavaScript?
3. Explain what **type coercion** is and provide an example.
4. What is the difference between `let` and `const` when declaring variables?
5. How do you check if a variable is an object in JavaScript?
  
---
<<<<<<< HEAD

     
=======
>>>>>>> 4fd2d9f85dee065922947b03daa3befe8b0ebf85
