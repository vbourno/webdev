const qaurterSales = [1000,2000,3000,3500]

let netProfits = qaurterSales.map(function(val) {
    return val * 0.7
})

console.log(netProfits)

let netProfitsGT1500 = netProfits.filter(profits => profits > 1500)

console.log(netProfitsGT1500)

let sumOfNetProfits = netProfits.reduce(function(total, profit) {
    return total + profit}, 0)
console.log(sumOfNetProfits)