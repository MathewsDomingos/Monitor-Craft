function renderIcons() {
  const gallery = document.getElementById('icones-galeria');
  gallery.innerHTML = '';
  icons.forEach((icon, idx) => {
    const img = document.createElement('img');
    img.src = icon;
    img.alt = `Ícone ${idx + 1}`;
    img.className = 'rounded border p-1 bg-white';
    img.style.width = '40px';
    img.style.cursor = 'pointer';
    if (idx === selectedIconIndex) {
      img.classList.add('selected', 'border-success');
    }
    img.onclick = () => {
      selectedIconIndex = idx;
      renderIcons();
      updatePreview();
    };
    gallery.appendChild(img);

    // Scroll Automático Quando o Ícone For Selecionado
    if (idx === selectedIconIndex) {
      setTimeout(() => {
        img.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }, 10);
    }
  });
}
