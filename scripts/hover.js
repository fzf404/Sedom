export const initHover = () => {
  for (const element of document.querySelectorAll('abbr')) {
    if (element.getAttribute('title')) {
      element.addEventListener('mouseenter', () => {
        const text = element.textContent
        element.textContent = element.getAttribute('title')
        element.setAttribute('title', text)
      })
      element.addEventListener('mouseleave', () => {
        const text = element.textContent
        element.textContent = element.getAttribute('title')
        element.setAttribute('title', text)
      })
    }
  }
}
