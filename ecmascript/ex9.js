function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullname = function() {
    return `${this.firstName} ${this.lastName}`
}

const john = new Person("John", "Doe");
const jane = new Person("Jane", "Smith");

console.log(john.fullname());
console.log(jane.fullname());