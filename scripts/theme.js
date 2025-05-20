document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById('toggle-theme');
  const body = document.body;

  // Carrega o Tema Salvo
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    btn.checked = true;
  }

  btn.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});
