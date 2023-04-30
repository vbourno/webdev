const products = [
    {name: 'Milk', price: 10},
    {name: 'Honey', price: 18},
    {name: 'Oranges', price: 5},
    {name: 'Oranges', price: 2}
]

products.sort(function(a, b) {
    if (a.name > b.name) return 1
    else if (a.name < b.name) return -1
    else if (a.name === b.name) {
        if (a.price > b.price) return 1
        else if (a. price < b.price) return -1
        else return 0
    }
})

console.log(products)