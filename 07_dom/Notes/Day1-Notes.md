### **JavaScript DOM Manipulation**

#### **What is the DOM?**

The **DOM (Document Object Model)** is a way for JavaScript to interact with the HTML of a webpage. It represents the page as a tree structure, where each element, attribute, and piece of text is a node.

JavaScript allows you to **change** the content, style, and structure of your webpage through the DOM.

---

### **1. Selecting Elements from the Webpage**

To manipulate elements on the webpage, you first need to **select** them. Here are some common ways:

- **`getElementById()`**: Selects an element by its **ID**.

  ```javascript
  const h1Element = document.getElementById("h1-heading");
  ```

- **`getElementsByClassName()`**: Selects all elements with a certain **class**. It returns a list of elements, so you need to specify which one to use.

  ```javascript
  let divCont = document.getElementsByClassName("container")[0]; // First element with class "container"
  ```

- **`querySelector()`**: Selects the first element that matches a CSS selector (e.g., an ID or class).

  ```javascript
  const h1Element = document.querySelector("#h1-heading");
  ```

---

### **2. Changing Text and HTML Content**

- **`innerText`**: This is used to change the **text** inside an element. HTML tags won’t be rendered, just the plain text.

  ```javascript
  h1Element.innerText = "Hello class!"; // Changes the text inside the element
  ```

- **`innerHTML`**: This is used to insert **HTML code** inside an element. It allows you to use HTML tags like `<i>`, `<b>`, etc.

  ```javascript
  h1Element.innerHTML = `<i>DOM Class!</i>`; // Adds HTML content
  ```

---

### **3. Changing Styles (CSS)**

You can change the look of an element by modifying its **style**.

- **`style`**: This allows you to change a single CSS property (e.g., color, font-size).

  ```javascript
  h1Element.style.color = "red"; // Changes text color to red
  ```

- **`cssText`**: This allows you to change multiple CSS properties at once.

  ```javascript
  h1Element.style.cssText = `background-color: blue; font-size: 50px`; // Changes multiple styles at once
  ```

---

### **4. Changing Classes**

Classes are used for styling elements. You can **add**, **remove**, or **replace** classes using JavaScript.

- **`classList.add()`**: Adds a class to an element.

  ```javascript
  h1Element.classList.add("heading"); // Adds the class "heading"
  ```

- **`classList.remove()`**: Removes a class from an element.

  ```javascript
  h1Element.classList.remove("heading"); // Removes the class "heading"
  ```

- **`classList.replace()`**: Replaces one class with another.

  ```javascript
  h1Element.classList.replace("heading", "h1"); // Replaces "heading" with "h1"
  ```

- **`setAttribute()`**: Used to set an attribute, including the class.

  ```javascript
  h1Element.setAttribute("class", "heading"); // Sets the class to "heading"
  ```

---

### **5. Changing Element Attributes**

Attributes give additional information about an element, like the `title`, `href`, or `src`. You can change them with JavaScript.

- **`getAttribute()`**: Get the value of an attribute.

  ```javascript
  const att = h1Element.getAttribute("class"); // Gets the class attribute
  console.log(att); // Logs the class value
  ```

- **`setAttribute()`**: Set the value of an attribute.

  ```javascript
  h1Element.setAttribute("title", "This is the heading!"); // Sets the title attribute
  ```

- **`removeAttribute()`**: Removes an attribute from an element.

  ```javascript
  h1Element.removeAttribute("class"); // Removes the class attribute
  ```

---

### **6. Modifying the Structure (Adding/Removing Elements)**

You can add or remove elements on the page dynamically.

- **`appendChild()`**: Adds a new element as a child of another element.

  ```javascript
  let newElement = document.createElement("p"); // Creates a new <p> element
  newElement.innerText = "New paragraph added!";
  h1Element.appendChild(newElement); // Adds it to the h1 element
  ```

- **`removeChild()`**: Removes an element from its parent.

  ```javascript
  h1Element.removeChild(newElement); // Removes the newly added paragraph
  ```

---

### **Note:**

1. **Selecting Elements**: Use `getElementById()`, `getElementsByClassName()`, and `querySelector()` to find elements on the page.
2. **Changing Text/HTML**: Use `innerText` for plain text and `innerHTML` for HTML content.
3. **Changing Styles**: Use `style` for individual CSS properties and `cssText` for multiple styles.
4. **Manipulating Classes**: Use `classList.add()`, `classList.remove()`, and `classList.replace()` to modify classes.
5. **Manipulating Attributes**: Use `setAttribute()`, `getAttribute()`, and `removeAttribute()` to change attributes.
6. **Adding/Removing Elements**: Use `appendChild()` and `removeChild()` to modify the structure of the webpage.

---
