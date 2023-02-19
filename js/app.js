let button = document.querySelector('#btn'),
    color = document.querySelector('.color')

let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', function () {
  let hexColor = generateHex()
  body.style.background = hexColor
  color.textContent = hexColor
})

function generateHex() {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]
  }
  
  return hexColor
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
}