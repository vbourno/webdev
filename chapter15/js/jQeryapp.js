$(document).ready(function() {
    //sayHello()
    //sayLorem()
    sayHelloCF()
})

function sayHello() {
    $('h1').html('Hello Coding Factory')
}

function sayLorem() {
    const p = $('<p></p>')  // const p = $(document.createElement('p'))
    p.html('Lorem ipsum, dolor...')
    $('body').append(p)
}

function sayHelloCF() {
    $('<div class="container">').appendTo('body')
    $('<p class="cf-text"></p>').appendTo('.container')
    $('.cf-text').html('Hello Coding Factory')
    $('cf-text').css('color', 'red')
    $('.container').css({'background-color': 'yellow', 'border': '2px solid green', 'text-align': 'center'})
}
