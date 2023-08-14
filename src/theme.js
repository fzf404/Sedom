export const getTheme = () => {
  switch (localStorage.getItem('SEDOM_THEME')) {
    case 'dark': {
      return 'dark'
    }
    case 'light': {
      return 'light'
    }
    default: {
      return window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark'
    }
  }
}

export const toggleTheme = () => {
  switch (getTheme()) {
    case 'dark': {
      document.documentElement.dataset.theme = 'light'
      return localStorage.setItem('SEDOM_THEME', 'light')
    }
    case 'light': {
      document.documentElement.dataset.theme = 'dark'
      return localStorage.setItem('SEDOM_THEME', 'dark')
    }
  }
}

export const initTheme = () => {
  document.documentElement.dataset.theme = getTheme()
  for (const el of document.querySelectorAll('.theme')) {
    el.addEventListener('click', toggleTheme)
  }
}
