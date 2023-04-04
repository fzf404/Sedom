import { initCode } from './code'
import { initTheme } from './theme'
import { initVersion } from './version'

export const initDOM = () => {
  initTheme()
  initCode()
  initVersion()
}
