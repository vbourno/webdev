const myObj = new Object();
myObj.foo = "bar";

console.log(myObj.foo);

myObj.baz = "qux";

const keys = Object.keys(myObj);
console.log(keys);

const a = {}
const b = new Object()

console.log(typeof a)
console.log(typeof b)

console.log(a instanceof Object)
console.log(b instanceof Object)

console.log(Object.getPrototypeOf(a) === Object.prototype)
console.log(Object.getPrototypeOf(b) === Object.prototype)

let copiedObj = Object.assign(myObj, {id: 2});
console.log(copiedObj);

const entries = Object.entries(copiedObj);
console.log(entries);

const reconvertedObj = Object.fromEntries(entries);
console.log(reconvertedObj);