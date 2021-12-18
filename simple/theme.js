// 主题
const tmp = localStorage.getItem("theme");
let theme = tmp ? tmp : "light";

// 设置主题
document.documentElement.setAttribute("class", theme);

// 修改主题
function onChangeTheme() {
  switch (theme) {
    case "dark":
      theme = "light";
      document.documentElement.setAttribute("class", theme);
      localStorage.setItem("theme", theme);
      break;
    case "light":
      theme = "dark";
      document.documentElement.setAttribute("class", theme);
      localStorage.setItem("theme", theme);
      break;
  }
}
