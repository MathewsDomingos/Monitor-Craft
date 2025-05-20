// Card Principal
function toggleBgInputs() {
  const bgType = document.querySelector('input[name="tipoBg"]:checked').value;
  document.getElementById('cores-background').style.display = (bgType === 'simple') ? 'block' : 'none';
  document.getElementById('cores-gradiente').style.display = (bgType === 'gradient') ? 'block' : 'none';
  updatePreview();
}

// Trigger
function toggleTriggerBgInputs() {
  const triggerBgType = document.querySelector('input[name="tipoTriggerBg"]:checked').value;
  document.getElementById('trigger-cores-background').style.display = (triggerBgType === 'simple') ? 'block' : 'none';
  document.getElementById('trigger-cores-gradiente').style.display = (triggerBgType === 'gradient') ? 'block' : 'none';
  updatePreview();
}

// Listeners Para Mudança dos Radios Buttons
document.querySelectorAll('input[name="tipoBg"]').forEach(el => {
  el.addEventListener('change', toggleBgInputs);
});
document.querySelectorAll('input[name="tipoTriggerBg"]').forEach(el => {
  el.addEventListener('change', toggleTriggerBgInputs);
});

// Inicializa Exibição ao Abrir a Página
window.addEventListener('DOMContentLoaded', function () {
  toggleBgInputs();
  toggleTriggerBgInputs();
});
