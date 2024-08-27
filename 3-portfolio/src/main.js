import debounce from './utils/debounce.js'

function handleScrollHeaderAndAside(headerEl, asideEl) {
  if (!headerEl) return
  if (headerEl.offsetHeight < window.scrollY) {
    headerEl.classList.add('scrolled')
    asideEl.classList.add('scrolled')
  } else {
    headerEl.classList.remove('scrolled')
    asideEl.classList.remove('scrolled')
  }
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
  const asideEl = document.querySelector('aside')
  if (!headerEl || !asideEl) return

  const sections = ['#home', '#about', '#skill', '#work', '#testimonial']
  const sectionsEl = sections
    .map(id => document.querySelector(id))
    .filter(Boolean)

  handleScrollHeaderAndAside(headerEl, asideEl)
  sectionsEl.forEach(el => handleScrollSection(el, headerEl))
}, 20)

function setEventListeners() {
  document.addEventListener('scroll', onScroll)
}

;(function init() {
  setEventListeners()
})()
