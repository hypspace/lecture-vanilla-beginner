'use strict'

function calculateTotal() {
  const input = document.getElementById('fishPrices').value
  const resultDiv = document.getElementById('result')

  resultDiv.innerHTML = ''

  const prices = input
    .split(',')
    .map(price => parseFloat(price.trim()))
    .filter(price => !isNaN(price))

  if (prices.length === 0) {
    resultDiv.innerHTML =
      '<p>Please enter valid numbers separated by commas.</p>'
    return
  }

  const total = prices.reduce((acc, curr) => acc + curr, 0)

  resultDiv.innerHTML = `<p>Total Price: $${total.toFixed(2)}</p>`
}
