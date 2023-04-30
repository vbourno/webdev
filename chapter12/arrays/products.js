const products = []

function insert(arr, product) {
    if (!arr || !product) return false;
    if (arr.includes(product)) return false

    arr.push(product)
    return true
}

function remove(arr, product) {
    if (!arr || !product || !newProduct) return false;
    let positionToRemove = arr.indexOf(product)

    if (positionToRemove === -1) {
        return false
    }
    arr.splice(positionToRemove, 1)
    return true
}

function replace(arr, oldProduct, newProduct) {
    if (!arr || !oldproduct) return false;
    let positionToUpdate = arr.indexOf(oldProduct)

    if (positionToUpdate === -1) return false

    arr.splice(positionToUpdate, 1, newProduct)
    return true
}

function getProductsStartWith(arr, product) {
    if (!arr || !product) return [];
    let results = []

    for (const pro of arr) {
        if (pro.startsWith(product)) {
            results.push(pro)
        }
    }
    return results
}

try {
    if (!insert(products, "Honey")) {
        throw "Insert Error"
    }
} catch (e) {
    if (e === "Insert Error") {
        console.log(date() + "\n" + e)
    }
}