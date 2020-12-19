const bodyRef = document.querySelector('body');
const themeToggleRef = document.querySelector('#theme-switch-toggle');

themeToggleRef.addEventListener('change', themeToggleHandler);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

savedThemeHandler();


function setDarkThemeHandler() {
  bodyRef.classList.add(Theme.DARK);
  bodyRef.classList.remove(Theme.LIGHT);
};

function setLightThemeHandler() {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
};

function themeToggleHandler() {
  if (this.checked) {
    setDarkThemeHandler();
    localStorage.setItem('Current-Theme', Theme.DARK);
  } else {
    setLightThemeHandler();
    localStorage.setItem('Current-Theme', Theme.LIGHT);
  };
};

function savedThemeHandler() {
  const savedTheme = localStorage.getItem('Current-Theme');
  if (savedTheme === Theme.DARK) {
    setDarkThemeHandler();
    themeToggleRef.checked = true;
  } else setLightThemeHandler();
};



