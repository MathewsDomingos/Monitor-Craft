document.addEventListener('DOMContentLoaded', function () {
  // Elementos do dropdown
  const themeLight = document.getElementById('theme-light');
  const themeDark = document.getElementById('theme-dark');
  const themeDropdownIcon = document.querySelector('#themeDropdown i');
  const body = document.body;

  // Função para ativar tema
  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      themeDark.classList.add('active');
      themeLight.classList.remove('active');
      if (themeDropdownIcon) {
        themeDropdownIcon.classList.remove('bi-sun');
        themeDropdownIcon.classList.add('bi-moon');
      }
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      themeDark.classList.remove('active');
      themeLight.classList.add('active');
      if (themeDropdownIcon) {
        themeDropdownIcon.classList.add('bi-sun');
        themeDropdownIcon.classList.remove('bi-moon');
      }
      localStorage.setItem('theme', 'light');
    }
  }

  // Eventos do dropdown
  if (themeLight) {
    themeLight.addEventListener('click', function (e) {
      e.preventDefault();
      setTheme('light');
    });
  }
  if (themeDark) {
    themeDark.addEventListener('click', function (e) {
      e.preventDefault();
      setTheme('dark');
    });
  }

  // Inicializa o tema salvo
  const temaSalvo = localStorage.getItem('theme');
  if (temaSalvo === 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});
