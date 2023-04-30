const number = [1,2,3,4,5];

// const evenNumbers = number.filter(function(num) {
//     return num % 2 === 0;
// })

const evenNumbers = number.filter((num) => num % 2 === 0);

console.log(evenNumbers);

const fruits = ["apple", "banana", "cherry"];
const lengths = fruits.map((fruit) => fruit.length);

console.log(lengths);

const employees = [
    {name: "Alice", salary: 50000},
    {name: "Bob", salary: 60000},
    {name: "Chris", salary: 70000}
]

const sortBySalary = (a,b) => b.salary - a.salary
const sortedBySalaray = employees.sort(sortBySalary)

console.log(sortBySalary)

console.log(employees);