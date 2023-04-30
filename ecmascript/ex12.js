class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static createUser(userData) {
        const {name, age} = userData
        if (!name || !age) {
            throw new Error("Name and age are required!")
        }
        return new User(name, age)
    }
}

const userData = {name: "John Doe", age: 30}
const user = User.createUser(userData)
console.log(user);