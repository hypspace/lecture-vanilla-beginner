const sectionIds = [
  '#home',
  '#about',
  '#skill',
  '#work',
  '#testimonial',
  '#contact',
]

const sectionEls = sectionIds.map(id => document.querySelector(id))
const menuListEls = sectionIds.map(id =>
  document.querySelector(`[href="${id}"]`)
)
const visibleSectionEls = sectionIds.map(() => false)
let activeMenuItem = menuListEls[0]
const options = {
  rootMargin: '-15% 0px 0px 0px',
  threshold: [0, 0.99],
}

const observerCallback = entries => {
  let selectLastOne

  entries.forEach(entry => {
    const index = sectionIds.indexOf(`#${entry.target.id}`)
    visibleSectionEls[index] = entry.isIntersecting

    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.99
  })

  const menuIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSectionEls)
  selectMenuItem(menuIndex)
}

const findFirstIntersecting = intersections => {
  const index = intersections.indexOf(true)
  return index >= 0 ? index : 0
}

const selectMenuItem = index => {
  const MenuItem = menuListEls[index]
  if (!MenuItem) return
  activeMenuItem.parentNode.classList.remove('active')
  activeMenuItem = MenuItem
  activeMenuItem.parentNode.classList.add('active')
}

const initObserver = () => {
  const observer = new IntersectionObserver(observerCallback, options)
  sectionEls.forEach(el => observer.observe(el))
}

export default initObserver
