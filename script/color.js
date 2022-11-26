// 初始化颜色
export const initColor = () => {
  // 颜色表
  const color = [
    'white',
    'light',
    'middle',
    'gray',
    'dark',
    'black',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'teal',
    'cyan',
    'blue',
    'indigo',
    'violet',
    'purple',
    'pink',
    'rainbow',
  ]
  // 随机颜色
  document.querySelectorAll('.random').forEach((element) => {
    element.classList.add(`${color[Math.floor(Math.random() * color.length)]}`)
  })
}
