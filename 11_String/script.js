// Initialize a string variable 'name'
const name = "Poojan Shrivastav";

// Log the original string to the console
console.log(name);

// Split the string into an array of individual characters
console.log(name.split(""));

// Split the string into characters, then join them back into a string
console.log(name.split("").join());

// Check and log the type of the result after joining
console.log(typeof name.split("").join());

// Iterate over each character in the string using forEach and log it
name.split("").forEach((element) => console.log(element));

// Convert the string to uppercase and log it
console.log(name.toUpperCase());

// Convert the string to lowercase and log it
console.log(name.toLowerCase());

// Example with a number
const num = 10;

// Convert the number to a string and log it
console.log(num.toString());

// Log the type of the result after converting the number to a string
console.log(typeof num.toString());

// Example with a string number
const num2 = "10";

// Convert the string number to an actual number using parseInt and log it
console.log(parseInt(num2));

// Log the type of the result after parsing the string number
console.log(typeof parseInt(num2));

// Use the 'at' method to get characters at specific positions in the string
console.log(name.at(0)); // First character
console.log(name.at(2)); // Third character

// Demonstrating string concatenation with different orders
const add = 12 + 5 + "54"; // Addition happens first, then concatenation with string
console.log(add);

const add2 = "54" + 12 + 5; // Concatenation happens first, then addition
console.log(add2);

// Loop over each character in the string using a 'for...of' loop
for (let item of name) {
  console.log(item);
}

// Convert the string to an array and iterate using forEach
Array.from(name).forEach((element) => {
  console.log(element);
});

// Example with another name string
const myname = "Pawan Maurya";

// Replace a part of the string using replace()
const changestr = myname.replace("Maurya", "Sir");

// Log the modified string and the original string
console.log(changestr);
console.log(myname);

// Get the character at the first position of the string
console.log(myname.charAt(0));

// Find the index of the character "M" in the string
console.log(myname.indexOf("M"));

// Extract a substring from the string from position 0 to 5
console.log(myname.substring(0, 5));

// Extract a substring from position 0 with length 5
console.log(myname.substr(0, 5));

// Example with a string having extra spaces
const language = "   Javascript Programming   ";

// Log the string before and after trimming the spaces
console.log(language);
console.log(language.trim());

// String concatenation examples
const str1 = "Hello ";
const str2 = "World";

// Concatenate two strings using + operator and log it
const str3 = str1 + " " + str2;
console.log(str3);

// Concatenate two strings using concat() method and log it
console.log(str1.concat(str2));
