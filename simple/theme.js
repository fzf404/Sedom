// 获取主题
const getTheme = () => {
  const theme = localStorage.getItem('theme')
  return theme ? theme : 'dark'
}

// 修改主题
export function changeTheme() {
  const theme = getTheme()
  switch (theme) {
    case 'dark':
      document.documentElement.setAttribute('class', 'light')
      localStorage.setItem('theme', 'light')
      break
    case 'light':
      document.documentElement.setAttribute('class', 'dark')
      localStorage.setItem('theme', 'dark')
      break
  }
}

// 初始化
export function initTheme() {
  const theme = getTheme()
  document.documentElement.setAttribute('class', theme)
}
