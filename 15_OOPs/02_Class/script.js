// =========================
// 1. Simple Class with Method
// =========================

class Person1 {
  get() {
    console.log("Hello Class");
  }
}

const obj1 = new Person1();
obj1.get(); // Output: Hello Class

// =========================
// 2. Constructor with Parameters
// =========================

class Person2 {
  constructor(name, age, salary) {
    // storing values inside object
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  details() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.salary);
  }
}

const obj2 = new Person2("Pawan", 25, 100);
obj2.details(); // Output: Pawan, 25, 100

// =========================
// 3. Set and Get Methods
// =========================

class Person3 {
  set(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  get() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.salary);
  }
}

const obj3 = new Person3();
obj3.set("Poojan", 20, 9999);
obj3.get(); // Output: Poojan, 20, 9999

// =========================
// 4. Inheritance using Constructor and super()
// =========================

class Person4 {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}

class Employee1 extends Person4 {
  constructor(name, age, salary, course) {
    super(name, age, salary); // calling parent constructor
    this.course = course;
  }

  get() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.salary);
    console.log(this.course);
  }
}

const obj4 = new Employee1("Poojan", 20, 9999, "Full Stack");
obj4.get();

// =========================
// 5. Private Property using #
// =========================

class Person5 {
  #name; // private property

  constructor(name, age, salary) {
    this.#name = name;
    this.age = age;
    this.salary = salary;
  }

  get() {
    console.log(this.#name); // access private
    console.log(this.age);
    console.log(this.salary);
  }

  get(name) {
    console.log("Second get method", name); // method overriding simulation
  }
}

class Employee2 extends Person5 {
  constructor(name, age, salary, course) {
    super(name, age, salary);
    this.course = course;
  }

  get() {
    console.log(this.name); // ❌ won't work – name is private
    console.log(this.age);
    console.log(this.salary);
    console.log(this.course);
  }
}

const obj5 = new Person5("Pawan", 25, 789);
obj5.get("rkg"); // Output: Second get method rkg
obj5.get(); // ❌ Will not call the first get(), only the latest get() exists

console.log("Second class details ...");
const obj6 = new Employee2("Poojan", 20, 9999, "Full Stack");
obj6.get(); // name will be undefined due to privacy

// =========================
// 6. Single Inheritance
// =========================

class Parent1 {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child1 extends Parent1 {}

const obj7 = new Child1();
obj7.greet(); // Output: Hello from Parent

// =========================
// 7. Multilevel Inheritance
// =========================

class A {
  msg() {
    console.log("Class A");
  }
}

class B extends A {}

class C extends B {}

const obj8 = new C();
obj8.msg(); // Output: Class A

// =========================
// 8. Hierarchical Inheritance
// =========================

class Parent2 {
  greet() {
    console.log("Hello");
  }
}

class Child2 extends Parent2 {}
class Child3 extends Parent2 {}

new Child2().greet(); // Output: Hello
new Child3().greet(); // Output: Hello
