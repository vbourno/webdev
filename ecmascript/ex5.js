const obj = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

obj.greet();

const pgreet = obj.greet;
pgreet();