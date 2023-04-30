let arr = [14,56,123,45,12]

arr.sort(function(a, b) {
    // if (a > b) return 1
    // else if (a < b) return -1
    // else return 0
    return a - b
})

console.log(arr)