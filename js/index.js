import '../scss/index.scss'

const a_color = [
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

document.querySelectorAll('.a-random').forEach((el) => {
  el.setAttribute('class', `a-random a-${a_color[Math.floor(Math.random() * a_color.length)]}`)
})
