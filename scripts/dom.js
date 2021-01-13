// data
const themeState = [
  {
    text: '亮',
    file: '/styles/theme/light.css',
  },
  {
    text: '暗',
    file: '/styles/theme/dark.css',
  },
];

// handler
const themeBtn = document.getElementById('theme-btn');

function setTheme(theme) {
  themeBtn.textContent = theme.text;
  var link = document.querySelector('link#theme-elem');
  link.setAttribute('href', theme.file);
}

themeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (themeBtn.textContent === themeState[0].text) {
    setTheme(themeState[1]);
  } else {
    setTheme(themeState[0]);
  }
});

window.addEventListener('DOMContentLoaded', evt => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme(themeState[1]);
  }
});