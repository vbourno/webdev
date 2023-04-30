class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.greet0 = this.greet0.bind(this);
    }

    greet = () => {
        console.log(`Hello, my name is ${this.name}`)
    }

    greet0() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const person = new Person("John", 30);
person.greet();

const greet = person.greet;
greet();

const greet0 = person.greet0;
greet0();