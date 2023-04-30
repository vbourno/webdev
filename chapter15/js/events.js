// $( document ).ready(function() {
//     $('#cfBtn').click(function() {
//         $('#cfText').html('Hello Coding Factory')
//     })
// })

// $(function() {
//     $('#cfBtn').on('click', function() {
//         $('#cfText').html('Hello Everybody')
//     })
// })

// $(function() {
//     $('#cfBtn').on('click', sayHelloToEverybody)
// })

// function sayHelloToEverybody() {
//     $('#cfText').html('Hello everybody!!!')
// }

$(function() {
    $('.container').on('click', 'p', sayHello)
})

function sayHello() {
    $('#helloId').html('Hello World!')
}
