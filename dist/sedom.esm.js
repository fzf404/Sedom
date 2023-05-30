// 获取空格长度
const getSpaceLength = (str) => {
  let space = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      space++;
    } else {
      return space
    }
  }
  return space
};

// 初始化代码
const initCode = () => {
  document.querySelectorAll('code').forEach((element) => {
    // 获取代码内容
    const code = element.innerHTML
      .replace(/^\s*\n/, '')
      .replace(/\n\s*$/, '')
      .split('\n');
    // 获取代码缩进
    const space = getSpaceLength(code[0]);
    // 清空代码内容
    element.innerHTML = '';
    // 重新添加代码内容
    code.map((item) => {
      const span = document.createElement('pre');
      span.innerText = item.slice(space);
      element.appendChild(span);
    });
  });
};

// 处理鼠标悬停事件
const initHover = () => {
  document.querySelectorAll('abbr').forEach((element) => {
    // 判断属性
    if (element.getAttribute('title')) {
      element.addEventListener('mouseenter', () => {
        // 交换内容
        const text = element.innerText;
        element.innerText = element.getAttribute('title');
        element.setAttribute('title', text);
      });
      element.addEventListener('mouseleave', () => {
        // 交换内容
        const text = element.innerText;
        element.innerText = element.getAttribute('title');
        element.setAttribute('title', text);
      });
    }
  });
};

// 获取主题
const getTheme = () => {
  return localStorage.getItem('theme') || 'dark'
};

// 切换主题
const toggleTheme = () => {
  switch (getTheme()) {
    case 'dark':
      document.documentElement.setAttribute('data-theme', 'light');
      return localStorage.setItem('theme', 'light')
    case 'light':
      document.documentElement.setAttribute('data-theme', 'dark');
      return localStorage.setItem('theme', 'dark')
  }
};

// 初始化主题
const initTheme = () => {
  // 设置主题
  document.documentElement.setAttribute('data-theme', getTheme());
  // 切换主题
  document.querySelectorAll('.theme').forEach((el) => {
    el.addEventListener('click', toggleTheme);
  });
};

var version = "0.7.3";

const initVersion = () => {
  console.log(
    `\n %c Sedom ${version} %c sedom.fzf404.art \n`,
    'color: #f1f3f5; background: #4263eb; padding:0.4rem 0;',
    'color: #212529; background: #dee2e6; padding:0.4rem 0;'
  );
};

const update = () => {
  initTheme();
  initCode();
  initHover();
};

const init = () => {
  initVersion();
  document.addEventListener('DOMContentLoaded', update);
};

init();

export { getTheme, init, toggleTheme, update };