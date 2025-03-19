### Notes : JavaScript Array Methods


### **1. Understanding Arrays**

In JavaScript, arrays are used to store multiple values in a single variable. Arrays can hold values of any type, including numbers, strings, booleans, and even other arrays or objects.

#### Example of declaring arrays:

```javascript
const emptyArray = [];  // Empty array
const numberArray = [1, 2, 3, 4, 5];  // Array of numbers
const mixedArray = [1, "Hello", true, null, [1, 2]];  // Array with mixed data types
```

- **`const`**: You can modify the contents of the array, but you cannot reassign the array itself (i.e., `const arr = []` is fine, but you cannot do `arr = []` later).
  
---

### **2. Working with Array Methods**

#### **`push()`**: Adds elements to the **end** of the array

- **Syntax**: `array.push(element1, element2, ..., elementN)`
- **Returns**: The new **length** of the array after the elements have been added.

```javascript
const fruits = [];
fruits.push("Apple");  // Adds "Apple" to the array
fruits.push("Banana", "Cherry");  // Adds "Banana" and "Cherry" to the array
console.log(fruits);  // Output: ["Apple", "Banana", "Cherry"]
```

- The **`push()`** method is used to **add** one or more elements to the **end** of the array.
- The length of the array increases after using `push()`.

#### **`pop()`**: Removes elements from the **end** of the array

- **Syntax**: `array.pop()`
- **Returns**: The **last** element that was removed from the array.

```javascript
const numbers = [10, 20, 30, 40];
const lastValue = numbers.pop();  // Removes 40 from the array
console.log(numbers);  // Output: [10, 20, 30]
console.log(lastValue);  // Output: 40
```

- The **`pop()`** method removes the **last element** of the array and returns that element.
- The array is **mutated** (modified) after calling `pop()`.

---

### **3. Key Concepts**

- **Arrays are mutable**: You can change the contents of an array even if it's declared with `const`, as long as you don't reassign the array itself.
  
  ```javascript
  const arr = [1, 2, 3];
  arr.push(4);  // OK: Adds 4 to the array
  arr = [1, 2, 3, 4];  // Error: Cannot reassign a `const` variable
  ```

- **Modifying the array**: Both `push()` and `pop()` **mutate** the original array, meaning they change the array's content.

---

### **4. Real-World Examples**

#### **Example 1: Building a Shopping Cart**

Imagine a shopping cart for an e-commerce website:

```javascript
const cart = [];

// User adds items to the cart
cart.push("Shirt");
cart.push("Pants");
console.log(cart);  // Output: ["Shirt", "Pants"]

// User removes the last item from the cart
const removedItem = cart.pop();
console.log(cart);  // Output: ["Shirt"]
console.log(`${removedItem} removed from the cart!`);  // Output: Pants removed from the cart!
```

- **`push()`**: Used when items are added to the shopping cart.
- **`pop()`**: Used when items are removed from the shopping cart.

#### **Example 2: Undo/Redo Functionality**

You can use an array to keep track of actions, allowing for an "undo" feature.

```javascript
const actions = [];

// User performs actions
actions.push("Draw Circle");
actions.push("Draw Rectangle");
console.log(actions);  // Output: ["Draw Circle", "Draw Rectangle"]

// User undoes the last action
const lastAction = actions.pop();
console.log(actions);  // Output: ["Draw Circle"]
console.log(`Undo: ${lastAction}`);  // Output: Undo: Draw Rectangle
```

---

### **5. Array Methods**

- **`push()`**: Adds elements to the **end** of the array. It increases the length of the array.
  
  ```javascript
  array.push(10);  // Adds 10 to the end
  ```

- **`pop()`**: Removes the **last** element of the array. It returns the removed element and reduces the array's length.

  ```javascript
  const removedElement = array.pop();  // Removes last element
  ```

---

### **6. Note:**

1. **Use `const` for arrays**: Even though `const` doesn't allow reassignment, it allows you to modify the contents of the array (e.g., using `push()` or `pop()`).
2. **Track changes carefully**: Arrays can grow or shrink based on methods like `push()` and `pop()`, so always be aware of the current length and the contents when working with them.
3. **Mutating arrays**: Remember that methods like `push()` and `pop()` **mutate** the original array, meaning the array itself changes.

---

### **7. What's Next?**

In the next lecture, we will look at more array methods, such as:

- **`shift()`**: Removes the first element.
- **`unshift()`**: Adds elements to the beginning of the array.
- **`splice()`**: Adds or removes elements at specific positions.

This will give you a more complete understanding of how to manage arrays in JavaScript for real-world applications.

---
