import { initCode } from './code'
import { initHover } from './hover'
import { initTheme } from './theme'
import { initVersion } from './version'

export const initDOM = () => {
  initTheme()
  initCode()
  initHover()
  initVersion()
}
