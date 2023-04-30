const arr = [5,7,1,9,4]

function getMaxValue(arr) {
    let maxValue = -Infinity

    for (let item of arr) {
        if (item > maxValue) {
            maxValue = item
        }
    }

    return maxValue
}

console.log(maxValue)