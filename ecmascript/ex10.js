class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const p = new Person("John", "Doe");
console.log(p.fullname());

const p2 = new Person("a", "b");
console.log(p2.fullname());