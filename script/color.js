// 初始化颜色
export const initColor = () => {
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
