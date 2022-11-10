import '../scss/index.scss'

// 获取主题
const getTheme = () => {
  return localStorage.getItem('theme') || 'dark'
}

// 切换主题
const changeTheme = () => {
  switch (getTheme()) {
    case 'dark':
      document.documentElement.setAttribute('class', 'light')
      return localStorage.setItem('theme', 'light')
    case 'light':
      document.documentElement.setAttribute('class', 'dark')
      return localStorage.setItem('theme', 'dark')
  }
}

// 初始化主题
const initTheme = () => {
  // 设置主题
  document.documentElement.setAttribute('class', getTheme())
  // 切换主题
  document.querySelectorAll('.theme').forEach((el) => {
    el.addEventListener('click', changeTheme)
  })
}

// 初始化颜色
const initColor = () => {
  // 颜色表
  const color = [
    'red',
    'pink',
    'purple',
    'violet',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'lime',
    'yellow',
    'orange',
  ]
  // 随机颜色
  document.querySelectorAll('.a-rand').forEach((el) => {
    el.setAttribute('class', `a-rand a-${color[Math.floor(Math.random() * color.length)]}`)
  })
}

// 初始化 DOM
const initDOM = () => {
  initTheme()
  initColor()
}

document.addEventListener('DOMContentLoaded', initDOM)
