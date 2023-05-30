// 处理鼠标悬停事件
export const initHover = () => {
  document.querySelectorAll('abbr').forEach((element) => {
    // 判断属性
    if (element.getAttribute('title')) {
      element.addEventListener('mouseenter', () => {
        // 交换内容
        const text = element.innerText
        element.innerText = element.getAttribute('title')
        element.setAttribute('title', text)
      })
      element.addEventListener('mouseleave', () => {
        // 交换内容
        const text = element.innerText
        element.innerText = element.getAttribute('title')
        element.setAttribute('title', text)
      })
    }
  })
}
