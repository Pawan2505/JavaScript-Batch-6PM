function greet(name,callback) {
    console.log("Hi", name);
    callback();
}

function sayHello() {
    console.log("Hello, How are you?");
}

greet("Poojan", sayHello);