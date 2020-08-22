const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', (e) => {
  e.preventDefault();
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
  if (themeBtn.textContent === themeState[0].text) {
    themeBtn.textContent = themeState[1].text;
    changeCSS(themeState[1].file);
  } else {
    themeBtn.textContent = themeState[0].text;
    changeCSS(themeState[0].file);
  }
});

function changeCSS(cssFile) {
  var link = document.querySelector('link#theme-elem');
  link.setAttribute('href', cssFile);
}
