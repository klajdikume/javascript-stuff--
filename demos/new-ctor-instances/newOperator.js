// new operators

// it creates new empty object
// it binds this to our newly created object
// it adds __proto__ which points to the constructor function prototype object
// adds a return this to the end of the object, so it can be returned from the function

function Student(name, age) {
    this.name = name;
    this.age = age;
}

var first = new Student('John', 26);

// first.__proto__ -> Student.prototype
