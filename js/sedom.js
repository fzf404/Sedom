import { initCode } from './code'
import { initColor } from './color'
import { initTheme } from './theme'
import { initVersion } from './version'

export const initDOM = () => {
  initTheme()
  initColor()
  initCode()
  initVersion()
}
