
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var Sedom = (function (exports) {
  'use strict';

  const getTheme = () => {
    switch (localStorage.getItem('SEDOM_THEME')) {
      case 'dark': {
        return 'dark'
      }
      case 'light': {
        return 'light'
      }
      default: {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
    }
  };

  const toggleTheme = () => {
    switch (getTheme()) {
      case 'dark': {
        document.documentElement.dataset.theme = 'light';
        return localStorage.setItem('SEDOM_THEME', 'light')
      }
      case 'light': {
        document.documentElement.dataset.theme = 'dark';
        return localStorage.setItem('SEDOM_THEME', 'dark')
      }
    }
  };

  const initTheme = () => {
    document.documentElement.dataset.theme = getTheme();
  };

  const initClick = () => {
    for (const el of document.querySelectorAll('.theme')) {
      el.addEventListener('click', toggleTheme);
    }
  };

  const initCode = () => {
    for (const element of document.querySelectorAll('code')) {
      element.innerHTML = element.innerHTML.replaceAll(/\n\s*/g, '');
    }
  };

  const initHover = () => {
    for (const element of document.querySelectorAll('abbr')) {
      if (element.getAttribute('title')) {
        element.addEventListener('mouseenter', () => {
          const text = element.textContent;
          element.textContent = element.getAttribute('title');
          element.setAttribute('title', text);
        });
        element.addEventListener('mouseleave', () => {
          const text = element.textContent;
          element.textContent = element.getAttribute('title');
          element.setAttribute('title', text);
        });
      }
    }
  };

  var version = "0.8.4";

  const initVersion = () => {
    console.log(
      `\n %c Sedom ${version} %c sedom.fzf404.art \n`,
      'color: #f1f3f5; background: #4263eb; padding:0.4rem 0;',
      'color: #212529; background: #dee2e6; padding:0.4rem 0;',
    );
  };

  const update = () => {
    initCode();
    initHover();
    initClick();
  };

  const init = () => {
    initTheme();
    initVersion();
    document.addEventListener('DOMContentLoaded', update);
  };

  init();

  exports.getTheme = getTheme;
  exports.init = init;
  exports.toggleTheme = toggleTheme;

  return exports;

})({});
