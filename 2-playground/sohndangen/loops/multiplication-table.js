'use strict'

function generateTable() {
  const number = parseInt(document.getElementById('numberInput').value)
  const resultDiv = document.getElementById('result')

  resultDiv.innerHTML = ''

  if (isNaN(number) || number < 1) {
    resultDiv.innerHTML = '<p>Please enter a valid number greater than 0.</p>'
    return
  }

  let tableHtml = `<h2>Multiplication Table for ${number}</h2>`
  tableHtml +=
    '<table><thead><tr><th>Multiplier</th><th>Result</th></tr></thead><tbody>'

  for (let i = 1; i <= 9; i++) {
    tableHtml += `<tr><td>${number} × ${i}</td><td>${number * i}</td></tr>`
  }

  tableHtml += '</tbody></table>'
  resultDiv.innerHTML = tableHtml
}
