// 获取主题
export const getTheme = () => {
  return localStorage.getItem('theme') || 'dark'
}

// 切换主题
export const toggleTheme = () => {
  switch (getTheme()) {
    case 'dark':
      document.documentElement.setAttribute('data-theme', 'light')
      return localStorage.setItem('theme', 'light')
    case 'light':
      document.documentElement.setAttribute('data-theme', 'dark')
      return localStorage.setItem('theme', 'dark')
  }
}

// 初始化主题
export const initTheme = () => {
  // 设置主题
  document.documentElement.setAttribute('data-theme', getTheme())
  // 切换主题
  document.querySelectorAll('.theme').forEach((el) => {
    el.addEventListener('click', toggleTheme)
  })
}
