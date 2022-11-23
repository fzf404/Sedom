import { initTheme } from './theme'
import { initCode } from './code'
import { initColor } from './color'
import { initVersion } from './version'

export const initDOM = () => {
  initTheme()
  initColor()
  initCode()
  initVersion()
}
