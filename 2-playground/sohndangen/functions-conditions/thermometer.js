'use strict'

const bulb = document.querySelector('.bulb')
const mercury = document.querySelector('.mercury')
const tube = document.querySelector('.tube')

let mercuryLevel = 0

function onMouseDown() {
  bulb.classList.add('active')
  updateMercuryLevel()
  checkHighFever()
}

function onMouseUp() {
  bulb.classList.remove('active')
}

function updateMercuryLevel() {
  if (mercuryLevel < 100) {
    mercuryLevel += 5
    mercury.style.height = `${mercuryLevel}%`
  }
}

function checkHighFever() {
  if (mercuryLevel >= 70) {
    mercury.style.backgroundColor = `#ffe94d`
    alert('You have a high fever')
  }
}

bulb.addEventListener('mousedown', onMouseDown)
bulb.addEventListener('mouseup', onMouseUp)
