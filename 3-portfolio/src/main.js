import debounce from './utils/debounce.js'
import initObserver from './utils/observer.js'
import initTypeIt from './utils/typeit.js'

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
    ? (el.style.filter = `blur(${Math.abs(rect.top) / 300}px)`)
    : (el.style.filter = `none`)
}

function handleClickMenuIcon(navEl, menuIconEl) {
  if (!navEl || !menuIconEl) return
  navEl.classList.toggle('clicked')
  menuIconEl.classList.toggle('clicked')
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

const onClickIcon = menuIconEl => {
  const navEl = document.querySelector('nav')
  if (!navEl || !menuIconEl) return
  handleClickMenuIcon(navEl, menuIconEl)
}

const onClickList = menuIconEl => {
  const navEl = document.querySelector('nav')
  if (!navEl || !menuIconEl) return
  navEl.classList.toggle('clicked')
  menuIconEl.classList.toggle('clicked')
}

function setEventListeners() {
  const menuIconEl = document.querySelector('i.fa-solid.fa-burger')
  const menuListEl = document.querySelectorAll('nav li a')

  document.addEventListener('scroll', onScroll)
  menuIconEl.addEventListener('click', () => onClickIcon(menuIconEl))
  menuListEl.forEach(item =>
    item.addEventListener('click', () => onClickList(menuIconEl))
  )
}

;(function init() {
  setEventListeners()
  initObserver()
  initTypeIt()
})()
