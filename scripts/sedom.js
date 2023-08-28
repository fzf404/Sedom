import { initCode } from './code'
import { initHover } from './hover'
import { initTheme } from './theme'
import { initVersion } from './version'

export const update = () => {
  initCode()
  initHover()
  initTheme()
}

export const init = () => {
  initVersion()
  document.addEventListener('DOMContentLoaded', update)
}
