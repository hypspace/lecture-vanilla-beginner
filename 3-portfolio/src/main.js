function handleScroll(el) {
  el.offsetHeight < window.scrollY
    ? el.classList.add('scrolled')
    : el.classList.remove('scrolled')
}

function setEventListeners() {
  document.onscroll = () => handleScroll(document.querySelector('header'))
}

;(function init() {
  setEventListeners()
})()
