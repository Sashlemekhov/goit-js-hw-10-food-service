const bodyRef = document.querySelector('body');
const themeToggleRef = document.querySelector('#theme-switch-toggle');

themeToggleRef.addEventListener('change', themeToggleHandler);

savedThemeHandler();


function setDarkThemeHandler() {
  bodyRef.classList.add('dark-theme');
  bodyRef.classList.remove('light-theme');
};

function setLightThemeHandler() {
  bodyRef.classList.add('light-theme');
  bodyRef.classList.remove('dark-theme');
};

function themeToggleHandler() {
  if (this.checked) {
    setDarkThemeHandler();
    localStorage.setItem('Current-Theme', 'dark');
  } else {
    setLightThemeHandler();
    localStorage.setItem('Current-Theme', 'light');
  };
};

function savedThemeHandler() {
  const savedTheme = localStorage.getItem('Current-Theme');
  if (savedTheme === "dark") {
    setDarkThemeHandler();
    themeToggleRef.checked = true;
  };
  if (savedTheme === "light") {
    setLightThemeHandler();
  };
};



