import { initDOM } from './script/sedom'
import { getTheme, toggleTheme } from './script/theme'

import './style/sedom.scss'

// 防止重复初始化
if (!window.Sedom) {
  // 全局注册
  window.Sedom = { getTheme, toggleTheme }
  // 初始化Sedom
  document.addEventListener('DOMContentLoaded', initDOM)
}
