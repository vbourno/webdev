class Person {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

   get fullname() {
        return this.#firstName + " " + this.#lastName;
    }

    set fullname(name) {
        const[firstName, lastName] = name.split(" ");
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
}

const p = new Person("John", "Doe");
console.log(p.fullname);

p.fullname = "Evangelos Bournousouzis"
console.log(p.fullname);