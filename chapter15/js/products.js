const products = [  {id: 1, name: "Apples"}, 
                    {id: 2, name: "Oranges"},
                    {id: 3, name: "Honey"},
                    {id: 4, name: "Eggs"},
                    {id: 5, name: "Milk"}
                ]

window.onload = function() {
    document.querySelector('.btn').addEventListener('click', function() {
        getProduct(document.querySelector('#inputProduct').value.trim())
    })

    document.querySelector('#inputProduct').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            getProduct(this.value.trim())
        }
    })
}

function getProduct(id) {
    if (!id) {
        return
    }

    onBeforeGet()
    fetchProduct(id)
}

function onBeforeGet() {
    hideError()
    hideFound()
}

function hideError() {
    const center = document.querySelector('div.center')
    if (center.querySelector('.error')) {
        center.querySelector('.error').remove()
    }
}

function hideFound() {
    const center = document.querySelector('div.center')
    if (center.querySelector('.found')) {
        center.querySelector('.found').remove()
    }
}

function fetchProduct(productId) {
    let results = products.find(e => e.id === Number(productId))
    handleResults(results)
}

function handleResults(results) {
    if (!results) {
        showError()
        return
    }

    showFound(results)
}

function showError() {
    const clone = document.querySelector('.error').cloneNode(true)
    clone.classList.remove('hidden')
    document.querySelector('div.center').append(clone)
}

function showFound(results) {
    const clone = document.querySelector('.found').cloneNode(true)
    clone.classList.remove('hidden')
    clone.append(document.createTextNode(`${results.name}`))
    document.querySelector('div.center').append(clone)
}






