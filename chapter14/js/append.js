const container = document.querySelector('.container')
container.innerHTML += '<p>Hello CF!!</p>'

const p = document.createElement('p')
p.textContent = 'Hello World!!'

container.appendChild(p)