function formatAndMove(e, x, y) {
    e.style.width = '100px'
    e.style.textAlign = 'center'
    e.style,border = "1px solid black"
    e.style.position = 'absolute'
    e.style.left = `${x}px`
    e.style.top = `${y}px`
}

const p = document.querySelector('.hello')
formatAndMove(p, 200, 150)