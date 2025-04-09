// ------------------------------------------
// 🔹 1. Store & Retrieve a String
// ------------------------------------------
let name = "Poojan";
localStorage.setItem("student", name);

let username = localStorage.getItem("student");
console.log("Username:", username); // Output: Poojan

// ------------------------------------------
// 🔹 2. Store a Number (treated as string)
// ------------------------------------------
let num = 12;
localStorage.setItem("student", num);

let usernameNum = localStorage.getItem("student");
console.log("Stored Number:", usernameNum); // Output: "12"
console.log("Type of stored number:", typeof usernameNum); // string

// ------------------------------------------
// 🔹 3. Store an Object using JSON.stringify
// ------------------------------------------
const obj1 = {
  id: 1,
  username: "Poojan",
  course: "Full Stack",
};

// Always convert object to JSON string before storing
localStorage.setItem("user", JSON.stringify(obj1));

// ------------------------------------------
// 🔹 4. Retrieve & Parse Object from localStorage
// ------------------------------------------
let data = localStorage.getItem("user");
console.log("Raw JSON string:", data); // string

let finalData = JSON.parse(data);
console.log("Parsed Object:", finalData); // object
console.log("Type after parsing:", typeof finalData); // object

// ------------------------------------------
// 🔹 5. Update Object and Save Again
// ------------------------------------------
obj1.salary = 235346;
localStorage.setItem("user", JSON.stringify(obj1));

let updatedUser = localStorage.getItem("user");
console.log("Updated Object:", JSON.parse(updatedUser));

// ------------------------------------------
// 🔹 6. Modify Existing Property
// ------------------------------------------
obj1.course = "MERN";
localStorage.setItem("user", JSON.stringify(obj1));

let modifiedUser = localStorage.getItem("user");
console.log("Modified Course:", JSON.parse(modifiedUser));

// ------------------------------------------
// 🔹 7. Delete a Property and Update Storage
// ------------------------------------------
delete obj1.salary;
localStorage.setItem("user", JSON.stringify(obj1));

let afterDelete = localStorage.getItem("user");
console.log("After Deleting Salary:", JSON.parse(afterDelete));

// ------------------------------------------
// 🔸 JSON Notes (for lecture explanation)
// ------------------------------------------
// JSON -> JavaScript Object Notation
// ✅ Only data (no functions, no comments)
// ✅ All keys must be in double quotes (string format)
// ✅ Functions, undefined, symbols not allowed
// ✅ Structure is same as JS object (syntax differs slightly)
