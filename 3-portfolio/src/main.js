import debounce from './utils/debounce.js'

function handleScrollHeader(el) {
  if (!el) return
  el.offsetHeight < window.scrollY
    ? el.classList.add('scrolled')
    : el.classList.remove('scrolled')
}

function handleScrollSection(el, headerEl) {
  if (!el || !headerEl) return
  const rect = el.getBoundingClientRect()
  rect.top < headerEl.scrollHeight && rect.bottom > 0
    ? (el.style.filter = `blur(${Math.abs(rect.top) / 100}px)`)
    : (el.style.filter = `none`)
}

const onScroll = debounce(() => {
  const headerEl = document.querySelector('header')
  if (!headerEl) return

  const sections = ['#home', '#about', '#skill', '#work', '#testimonial']
  const sectionsEl = sections
    .map(id => document.querySelector(id))
    .filter(Boolean)

  handleScrollHeader(headerEl)
  sectionsEl.forEach(el => handleScrollSection(el, headerEl))
}, 20)

function setEventListeners() {
  document.addEventListener('scroll', onScroll)
}

;(function init() {
  setEventListeners()
})()
