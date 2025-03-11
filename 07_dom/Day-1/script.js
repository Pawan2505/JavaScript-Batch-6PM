// Select the h1 element by its ID
const h1Element = document.getElementById("h1-heading");

// Update the inner text of the h1 element
h1Element.innerText = "Hello class!";

// Insert HTML content into the h1 element (Note: Using innerHTML allows HTML elements within the string)
h1Element.innerHTML = `<i>DOM Class!</i>`;

// Using innerText will not render HTML tags, they will be shown as text
h1Element.innerText = `<i>DOM Class!</i>`;

// Change the color of the h1 text to red
h1Element.style.color = "red";

// Apply multiple styles at once using cssText
h1Element.style.cssText = `background-color: blue; font-size: 50px`;

// Change the background color of the h1 element to red
h1Element.style.backgroundColor = "red";

// Add a new CSS class to the h1 element
h1Element.classList.add("heading");

// Remove a CSS class from the h1 element
h1Element.classList.remove("heading");

// Replace an existing class with a new one
h1Element.classList.replace("heading", "h1");

// Set a specific attribute for the h1 element
h1Element.setAttribute("class", "heading");
h1Element.setAttribute("title", "Title is set now!");

// Remove an attribute from the h1 element
h1Element.removeAttribute("class");

// Get and log the value of an attribute (in this case, the class attribute)
const att = h1Element.getAttribute("class");
console.log(att);

// Select the first element with the class name "container"
let divCont = document.getElementsByClassName("container")[0];

// Change the inner text of the div with the "container" class
divCont.innerText = "Hello Bhai";

// Apply multiple styles to the div container
divCont.style.cssText = `height: 500px; background-color: red`;
