### **Lecture: Understanding Objects and Methods in JavaScript**
---

### **1. Simple Object Definition**

```javascript
// Defining a basic object with properties
const person = {
    name: "Pawan Maurya",
    age: 25,
    salary: 999
};

// Logging the entire object to the console
console.log(person);

// Accessing and logging individual properties
console.log(person.name);    // Logs "Pawan Maurya"
console.log(person.age);     // Logs 25
console.log(person.salary);  // Logs 999
```

- **Explanation**: 
  - In this example, we create an object `person` with three properties: `name`, `age`, and `salary`.
  - We access these properties using `person.propertyName` and log them to the console.

---

### **2. Adding Methods to an Object**

```javascript
// Defining an object with properties and a method
const person = {
  name: "Pawan Maurya",
  age: 25,
  salary: 999,
  
  // Method to display a message
  display: function () {
    return "Bhai display run kiye ho!";
  }
};

// Logging the object and calling the display method
console.log(person);                // Logs the entire object
console.log(person.name);           // Logs "Pawan Maurya"
console.log(person.age);            // Logs 25
console.log(person.salary);         // Logs 999
console.log(person.display());      // Logs the string "Bhai display run kiye ho!"
```

- **Explanation**:
  - Here, we've added a method `display` to the object. Methods are functions that are associated with objects.
  - The method `display` simply returns a string. We access the method using `person.display()`.

---

### **3. Using `this` Inside an Object Method**

```javascript
// Using the 'this' keyword inside an object method
const person = {
  name: "Pawan Maurya",
  age: 25,
  salary: 999,
  
  // Method that refers to the object's 'name' property using 'this'
  display: function () {
    return `${this.name} Bhai display run kiye ho!`;
  }
};

// Logging the object and calling the display method
console.log(person);                // Logs the entire object
console.log(person.name);           // Logs "Pawan Maurya"
console.log(person.age);            // Logs 25
console.log(person.salary);         // Logs 999
console.log(person.display());      // Logs "Pawan Maurya Bhai display run kiye ho!"
```

- **Explanation**:
  - Inside the method `display`, we use the `this` keyword to refer to the object itself (in this case, the `person` object).
  - `this.name` refers to the `name` property of the object. So when the `display()` method is called, it returns a message that includes the `name` value.

---

### **4. Accessing Object Properties Using `this`**

```javascript
// Using 'this' to access object properties in a method
const person = {
  name: "Pawan Maurya",
  age: 25,
  salary: 999,
  
  // Method that logs the object's 'name' property using 'this'
  display: function () {
    console.log(this.name);  // Logs "Pawan Maurya"
  }
};

// Calling the display method
person.display();
```

- **Explanation**:
  - In this example, inside the `display` method, we use `this.name` to log the `name` property of the object.
  - When `person.display()` is called, it logs `"Pawan Maurya"` because `this` refers to the `person` object.

---

### **Note:**:

1. **Objects**: Objects in JavaScript are containers for properties (key-value pairs). Properties can store data (like strings or numbers) and methods (functions).
   
2. **Methods**: You can define methods inside an object. A method is simply a function that belongs to an object and is used to perform actions related to that object.

3. **`this` keyword**:
   - Inside an object's method, `this` refers to the object itself.
   - Using `this`, you can access properties of the object within the method.
   - Example: `this.name` refers to the `name` property of the current object.

---
