const students = [
                {Name: "Alice", age: 17}, 
                {Name: "Bob", age: 23},
                {Name: "Anna", age: 40}
            ]

let studentsOver18 = students.filter(stu => stu.age > 18)

let average = students.reduce((sum, stu, _, { length }) => 
    sum + stu.age / length, 0)

console.log(studentsOver18)
console.log(average)