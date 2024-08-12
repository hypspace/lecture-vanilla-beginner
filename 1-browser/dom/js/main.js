const ul = document.querySelector('ul')
const form = document.querySelector('form')
const deleteBtn = ul.querySelectorAll('.btn-delete')
const input = form.querySelector('[type="text"]')
const addBtn = form.querySelector('button')

form.addEventListener('submit', onSubmit)
addBtn.addEventListener('click', onSubmit)
Array.from(deleteBtn).forEach(item => item.addEventListener('click', onDelete))

function onSubmit(e) {
  e.preventDefault()
  if (!input.value.trim('')) {
    clear()
    return
  }
  handleSubmitForm()
  clear()
}

function onDelete(e) {
  e.target.closest('li').remove()
}

function clear() {
  input.value = ''
}

function createElements() {
  const li = document.createElement('li')
  const span = document.createElement('span')
  const btn = document.createElement('button')
  const img = document.createElement('img')
  span.textContent = input.value
  btn.setAttribute('class', 'btn-delete')
  img.setAttribute('src', 'imgs/icon-delete.svg')
  btn.append(img)
  li.append(span, btn)
  return li
}

function handleSubmitForm() {
  ul.appendChild(createElements()).scrollIntoView({ behavior: 'smooth' })

  Array.from(ul.querySelectorAll('.btn-delete')).forEach(item => {
    item.addEventListener('click', onDelete)
  })
}
