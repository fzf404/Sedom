export const initCode = () => {
  for (const element of document.querySelectorAll('code')) {
    element.innerHTML = element.innerHTML.replaceAll(/\n\s*/g, '')
  }
}
