'use strict'

let operator = ''
let currentInput = ''
let firstValue = ''
let shouldResetDisplay = false

function clearDisplay() {
  currentInput = ''
  operator = ''
  firstValue = ''
  document.getElementById('display').textContent = '0'
}

function appendNumber(number) {
  if (shouldResetDisplay) {
    currentInput = ''
    shouldResetDisplay = false
  }
  currentInput += number
  document.getElementById('display').textContent = currentInput
}

function setOperator(op) {
  if (operator && currentInput) {
    calculate()
  }
  firstValue = currentInput
  operator = op
  currentInput = ''
}

function calculate() {
  if (operator && firstValue && currentInput) {
    const result = eval(`${firstValue}${operator}${currentInput}`)
    document.getElementById('display').innerText = result
    currentInput = result
    operator = ''
    shouldResetDisplay = true
  }
}

document.querySelector('.btns-section').addEventListener('click', event => {
  const text = event.target.textContent
  if (!text) return
  if (text === 'C') {
    clearDisplay()
  } else if (['+', '-', '*', '/'].includes(text)) {
    setOperator(text)
  } else if (text === '=') {
    calculate()
  } else {
    appendNumber(text)
  }
})
