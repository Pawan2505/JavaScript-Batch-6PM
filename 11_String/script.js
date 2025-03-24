const name = "Poojan Shrivastav";

console.log(name);

console.log(name.split(""));

console.log(name.split("").join());

console.log(typeof name.split("").join());

name.split("").forEach((element) => console.log(element));

console.log(name.toUpperCase());

console.log(name.toLowerCase());

const num = 10;

console.log(num.toString());

console.log(typeof num.toString());

const num2 = "10";

console.log(parseInt(num2));
console.log(typeof parseInt(num2));

console.log(name.at(0));
console.log(name.at(2));

const add = 12 + 5 + "54";
console.log(add);

const add2 = "54" + 12 + 5;
console.log(add2);

for (let item of name) {
  console.log(item);
}

Array.from(name).forEach((element) => {
  console.log(element);
});

const myname = "Pawan Maurya";

const changestr = myname.replace("Maurya", "Sir");

console.log(changestr);
console.log(myname);

console.log(myname.charAt(0));

console.log(myname.indexOf("M"));

console.log(myname.substring(0, 5));
console.log(myname.substr(0, 5));

const language = "   Javascript Programming   ";
console.log(language);

console.log(language.trim());

const str1 = "Hello ";
const str2 = "World";

const str3 = str1 + " " + str2;
console.log(str3);

console.log(str1.concat(str2));
