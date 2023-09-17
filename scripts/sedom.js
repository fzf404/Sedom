import { initClick } from './click'
import { initCode } from './code'
import { initHover } from './hover'
import { initTheme } from './theme'
import { initVersion } from './version'

export const update = () => {
  initCode()
  initHover()
  initClick()
}

export const init = () => {
  initTheme()
  initVersion()
  document.addEventListener('DOMContentLoaded', update)
}
