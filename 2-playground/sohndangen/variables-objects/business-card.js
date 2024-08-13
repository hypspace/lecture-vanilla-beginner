'use strict'

function generateCard() {
  const name = document.getElementById('name').value
  const title = document.getElementById('title').value
  const company = document.getElementById('company').value
  const email = document.getElementById('email').value
  const phone = document.getElementById('phone').value

  const cardDiv = document.getElementById('card')

  cardDiv.innerHTML = ''

  if (!name || !title || !company || !email || !phone) {
    cardDiv.innerHTML = '<p>Please fill in all fields.</p>'
    return
  }

  const cardHtml = `
            <h2>${name}</h2>
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        `

  cardDiv.innerHTML = cardHtml
}
