const numbers = [23, 10, 2, 50]

// const over10 = numbers.filter((val) => {
//     if (val > 10) {
//         return val;
//     }
// })

const over10 = numbers.filter((val) => val>10)

console.log(over10);
console.log(numbers);