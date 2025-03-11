// 1. Define the image URL
// let url = "https://i.pinimg.com/474x/94/ce/a4/94cea4aa538482fc8653df7d3c625ecd.jpg";

// 2. Select the container where new content will be added
let divBox = document.querySelector("#container");

// 3. Create a new div element to hold the product content
const newDiv = document.createElement("div");

// 4. Add a class to the newly created div for styling purposes
newDiv.classList.add("product");

// 5. Insert HTML content into the new div (product image, title, description, and button)
newDiv.innerHTML = `
    <img src="${url}" height="200px" width="200px"/>
    <h1>Product</h1>
    <p>Nice Product Image</p>
    <button>Add to cart</button>
`;

// 6. Append the newly created div with content into the container div
divBox.appendChild(newDiv);

// 7. Select a paragraph element by class name and change its inner text
const pElement = document.querySelector(".para");
pElement.innerHTML = "Hello Paragraph!";

// 8. Select a specific paragraph element using querySelectorAll and change its text
const pElement2 = document.querySelectorAll(".para")[3];
pElement2.innerHTML = "Hello Paragraph!";

// 9. Function to capture user input and display it in another element
function show() {
  // 10. Get the value from an input field
  const inputdata = document.getElementById("input-box").value;

  // 11. Show the input data in a paragraph element
  const dataShow = document.getElementById("para");
  dataShow.innerText = inputdata;
}

// 12. Event listener for a button click to show the input data
document.getElementById("btnBox").addEventListener("click", function () {
  // 13. Get the input data when the button is clicked
  const inputdata = document.getElementById("input-box").value;

  // 14. Show the input data in the paragraph element
  const dataShow = document.getElementById("para");
  dataShow.innerText = inputdata;
});

// 15. Select a specific paragraph by tag name and change its text
document.getElementsByTagName("p")[1].innerText = "index 1 paragraph selected!";


