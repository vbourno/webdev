class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}, I work as ${this.jobTitle}`);
    }
}

const employee = new Employee("John", 30, "Software Engineer")
employee.greet();
employee.introduce();