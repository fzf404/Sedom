import { initTheme } from './theme'
import { initCode } from './code'
import { initColor } from './color'

export const initDOM = () => {
  initTheme()
  initColor()
  initCode()
}
