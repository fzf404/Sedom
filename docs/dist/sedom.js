
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

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
        .replace(/^\n/, '')
        .replace(/\n\s.$/, '')
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

  var version = "0.6.1";

  const initVersion = () => {
    console.log(
      `\n %c Sedom ${version} %c sedom.fzf404.art \n`,
      'color: #f1f3f5; background: #4263eb; padding:0.4rem 0;',
      'color: #212529; background: #dee2e6; padding:0.4rem 0;'
    );
  };

  const initDOM = () => {
    initTheme();
    initCode();
    initVersion();
  };

  // 防止重复初始化
  if (!window.Sedom) {
    // 全局注册
    window.Sedom = { getTheme, toggleTheme };
    // 初始化Sedom
    document.addEventListener('DOMContentLoaded', initDOM);
  }

})();
