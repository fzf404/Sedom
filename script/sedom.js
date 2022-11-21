import { initTheme } from './theme'
import { initCode } from './code'
import { initColor } from './color'

import '../style/sedom.scss'

export const initDOM = () => {
  initTheme()
  initColor()
  initCode()
}
