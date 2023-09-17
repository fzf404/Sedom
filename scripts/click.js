import { toggleTheme } from './theme'

export const initClick = () => {
  for (const el of document.querySelectorAll('.theme')) {
    el.addEventListener('click', toggleTheme)
  }
}
