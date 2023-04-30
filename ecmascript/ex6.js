function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name}`)
        }
    }
}

const person = createPerson("John", 30)
person.greet();