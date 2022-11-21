import { getTheme, toggleTheme } from './script/theme'
import { initDOM } from './script/sedom'

// 防止重复初始化
if (!window.Sedom) {
  // 全局注册
  window.Sedom = { getTheme, toggleTheme }
  // 初始化Sedom
  document.addEventListener('DOMContentLoaded', initDOM)
}
