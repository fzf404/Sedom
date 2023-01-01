(function () {
  'use strict';

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
      const code = element.innerHTML.replace(/^\n/, '').replace(/\n\s.$/, '').split('\n');
      // 获取代码缩进
      const space = getSpaceLength(code[0]);
      // 清空代码内容
      element.innerHTML = '';
      // 重新添加代码内容
      code.map((item, index) => {
        const span = document.createElement('pre');
        span.innerText = item.slice(space);
        element.appendChild(span);
      });
    });
  };

  // 初始化颜色
  const initColor = () => {
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
    ];
    // 随机颜色
    document.querySelectorAll('.random').forEach((element) => {
      element.classList.add(`${color[Math.floor(Math.random() * color.length)]}`);
    });
  };

  var name = "sedom";
  var version = "0.5.8";
  var description = "Minimal style library";
  var keywords = [
  	"ui",
  	"scss",
  	"style",
  	"framework"
  ];
  var homepage = "https://sedom.fzf404.art/";
  var repository = {
  	type: "git",
  	url: "https://github.com/fzf404/Sedom"
  };
  var license = "MIT";
  var author = "fzf404";
  var main = "index.js";
  var scripts = {
  	build: "rollup --config rollup.config.js",
  	dev: "rollup --config rollup.config.dev.js --watch",
  	release: "rollup --config rollup.config.js && pnpm publish"
  };
  var devDependencies = {
  	"@rollup/plugin-commonjs": "^22.0.2",
  	"@rollup/plugin-json": "^5.0.1",
  	"@rollup/plugin-node-resolve": "^14.1.0",
  	prettier: "^2.8.0",
  	"prettier-plugin-css-order": "^1.3.0",
  	rollup: "^2.79.1",
  	"rollup-plugin-livereload": "^2.0.5",
  	"rollup-plugin-sass": "^1.12.16",
  	"rollup-plugin-serve": "^2.0.1"
  };
  var engines = {
  	node: ">=14",
  	pnpm: ">=7"
  };
  var pkg = {
  	name: name,
  	version: version,
  	description: description,
  	keywords: keywords,
  	homepage: homepage,
  	repository: repository,
  	license: license,
  	author: author,
  	main: main,
  	scripts: scripts,
  	devDependencies: devDependencies,
  	engines: engines
  };

  const initVersion = () => {
    console.log(
      `\n %c Sedom ${pkg.version} %c sedom.fzf404.art \n`,
      'color: #f1f3f5; background: #4263eb; padding:0.4rem 0;',
      'color: #212529; background: #dee2e6; padding:0.4rem 0;'
    );
  };

  const initDOM = () => {
    initTheme();
    initColor();
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
