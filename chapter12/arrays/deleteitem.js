const grades = [4,5,8,1,0,10,0]
let n = grades.length

while (n) {
    n--
    if (grades[n] === 0) {
        grades.splice(n, 1)
    }
}

console.log(grades)