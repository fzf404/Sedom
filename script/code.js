const getSpaceLength = (str) => {
  let space = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      space++
    } else {
      return space
    }
  }
  return space
}

// 初始化代码
export const initCode = () => {
  document.querySelectorAll('code').forEach((element) => {
    // 获取代码内容
    const code = element.innerHTML.replace(/^\n/, '').replace(/\n\s.$/, '').split('\n')
    // 获取代码缩进
    const space = getSpaceLength(code[0])
    // 清空代码内容
    element.innerHTML = ''
    // 重新添加代码内容
    code.map((item, index) => {
      const span = document.createElement('span')
      span.innerText = item.slice(space)
      element.appendChild(span)
    })
  })
}
