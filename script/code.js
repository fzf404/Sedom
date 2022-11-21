// 初始化代码
export const initCode = () => {
  document.querySelectorAll('code span').forEach((el) => {
    el.innerText = el.innerHTML
  })
}

// 初始化 DOM
const initDom = () => {
  initTheme()
  initColor()
  initCode()
}

// 初始化 Sedom
const initSedom = () => {
  if (window.Sedom) {
    return
  } else {
    window.Sedom = { getTheme, toggleTheme }
    document.addEventListener('DOMContentLoaded', initDom)
  }
}

// 导出函数
export default { initSedom, getTheme, toggleTheme }
