function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const person = new Person("John", 30)
person.greet();

const person2 = new Person("Jane", 19)
person2.greet();