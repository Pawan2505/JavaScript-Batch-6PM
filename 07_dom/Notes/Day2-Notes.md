
---

## **JavaScript DOM Manipulation and Event Handling**

### **Objective:**
In this Note4s, we will learn how to manipulate the Document Object Model (DOM) using JavaScript. Key topics include selecting elements, creating new elements, handling events, and working with user input.

---

### **1. Introduction to the DOM**
The **Document Object Model (DOM)** is a programming interface for web documents. It represents the page so that programs can manipulate the structure, style, and content. JavaScript provides several methods for interacting with and modifying the DOM.

---

### **2. Selecting Elements in the DOM**

Before we can modify an element, we need to **select it**. Here are some common methods to select elements:

#### **`document.querySelector()`**
- Selects the first element that matches a CSS selector.
- **Usage**:  
  ```javascript
  let element = document.querySelector(".myClass");
  ```

#### **`document.querySelectorAll()`**
- Selects all elements that match a CSS selector. Returns a **NodeList**.
- **Usage**:
  ```javascript
  let elements = document.querySelectorAll(".myClass");
  ```

#### **`document.getElementById()`**
- Selects an element by its **ID** attribute.
- **Usage**:
  ```javascript
  let element = document.getElementById("elementId");
  ```

#### **`document.getElementsByTagName()`**
- Selects all elements with a specific tag name.
- **Usage**:
  ```javascript
  let paragraphs = document.getElementsByTagName("p");
  ```

---

### **3. Creating New Elements**

JavaScript allows you to **dynamically create elements** and insert them into the DOM.

#### **`document.createElement()`**
- Creates a new HTML element.
- **Usage**:
  ```javascript
  let newElement = document.createElement("div");
  ```

#### **Setting Inner Content**

- **`innerHTML`**: Can be used to set or retrieve HTML content inside an element.
- **`innerText`**: Sets or retrieves the visible text content of an element.

**Example**:
```javascript
let div = document.createElement("div");
div.innerHTML = "<h1>Dynamic Title</h1>";
document.body.appendChild(div);
```

---

### **4. Modifying Element Attributes**

You can modify element attributes using the `setAttribute()` method. This is particularly useful for attributes like `src`, `href`, and `class`.

#### **`setAttribute()`**
- Sets the value of an attribute on the element.
- **Usage**:
  ```javascript
  let img = document.createElement("img");
  img.setAttribute("src", "image.jpg");
  ```

---

### **5. Modifying Classes with `classList`**

To modify the **CSS class** of an element, use the `classList` property.

#### **Common Methods**:
- **`add()`**: Adds one or more classes to the element.
- **`remove()`**: Removes one or more classes from the element.
- **`toggle()`**: Toggles between adding/removing a class.
- **`contains()`**: Checks if the element contains a specific class.

**Example**:
```javascript
let element = document.querySelector(".myClass");
element.classList.add("newClass");  // Adds a class
element.classList.remove("oldClass");  // Removes a class
```

---

### **6. Inserting Elements into the DOM**

After creating or modifying an element, you need to **append** it to the DOM to make it visible in the document.

#### **`appendChild()`**
- Appends a new child element to a parent element.
- **Usage**:
  ```javascript
  parentElement.appendChild(newElement);
  ```

---

### **7. Event Handling**

JavaScript allows you to **respond to user actions** (events) like clicks, typing, and mouse movements.

#### **`addEventListener()`**
- Used to attach an event listener to an element, which listens for specific events like `click`, `keydown`, `submit`, etc.
- **Usage**:
  ```javascript
  let button = document.querySelector("#myButton");
  button.addEventListener("click", function() {
      console.log("Button clicked!");
  });
  ```

#### **Common Events**:
- **Click**: `click`
- **Mouseover**: `mouseover`
- **Keyboard Input**: `keydown`, `keyup`, `keypress`
- **Form Submission**: `submit`

---

### **8. Working with User Input**

To capture and manipulate **user input** from forms or other input elements:

- **`value`**: Retrieves or sets the current value of an input field.
- **`innerText`**: Modifies the text content of an element.

**Example**: Capture user input from a text field and display it elsewhere in the DOM.

```javascript
function show() {
  const inputData = document.getElementById("input-box").value;  // Get input value
  const displayArea = document.getElementById("output");
  displayArea.innerText = inputData;  // Display the input in a paragraph
}
```

---

### **9. Example Walkthrough**

Let's break down a practical example of creating a product listing with dynamic content and user interaction:

```javascript
// Step 1: Define the image URL
let url = "https://example.com/image.jpg";  

// Step 2: Select the container for the product
let divBox = document.querySelector("#container");  

// Step 3: Create a new div element to hold the product content
const newDiv = document.createElement("div");

// Step 4: Add a class for styling
newDiv.classList.add("product");  

// Step 5: Insert product details dynamically
newDiv.innerHTML = `
    <img src="${url}" height="200px" width="200px"/>
    <h1>Product</h1>
    <p>Nice Product Image</p>
    <button>Add to cart</button>
`;

// Step 6: Append the new product div to the container
divBox.appendChild(newDiv);

// Step 7: Modify the content of a specific paragraph
const pElement = document.querySelector(".para");
pElement.innerHTML = "Hello Paragraph!";

// Step 8: Handle user input and display the text dynamically
function show() {
    const inputData = document.getElementById("input-box").value;
    const dataShow = document.getElementById("para");
    dataShow.innerText = inputData;  // Display the entered data
}

// Step 9: Add event listener to update the text when a button is clicked
document.getElementById("btnBox").addEventListener("click", function () {
    const inputData = document.getElementById("input-box").value;
    const dataShow = document.getElementById("para");
    dataShow.innerText = inputData;
});
```

---
### **11. Note:**

In this Notes, we covered:
- **DOM selection** and modification techniques.
- **Creating and inserting elements** dynamically.
- **Handling events** such as button clicks and user input.
- **Working with form data** and displaying results in the DOM.

---