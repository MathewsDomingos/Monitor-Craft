// =========================================
// GALERIA DE ÍCONES
// =========================================

// /assets/icons/icons.js

let selectedIconIndex = 0;

function renderIcons() {
  const gallery = document.getElementById('icones-galeria');
  gallery.innerHTML = '';
  icons.forEach((icon, idx) => {
    const div = document.createElement('div');
    div.className = 'icon-item';
    if (idx === selectedIconIndex) div.classList.add('selected');

    const img = document.createElement('img');
    img.src = icon;
    img.alt = `Ícone ${idx + 1}`;

    div.appendChild(img);

    div.onclick = () => {
      selectedIconIndex = idx;
      renderIcons();
      updatePreview();
    };
    gallery.appendChild(div);
  });
}

// =========================================
// CAMPOS DE COR/GRADIENTE DINÂMICOS
// =========================================
function toggleBgInputs() {
  const bgType = document.querySelector('input[name="tipoBg"]:checked').value;
  const bgSimple = document.getElementById('cores-background');
  const bgGradient = document.getElementById('cores-gradiente');
  if (bgType === 'simple') {
    bgSimple.classList.add('show');
    bgGradient.classList.remove('show');
  } else {
    bgSimple.classList.remove('show');
    bgGradient.classList.add('show');
  }
  updatePreview();
}
function toggleTriggerBgInputs() {
  const triggerBgType = document.querySelector('input[name="tipoTriggerBg"]:checked').value;
  const tSimple = document.getElementById('trigger-cores-background');
  const tGradient = document.getElementById('trigger-cores-gradiente');
  if (triggerBgType === 'simple') {
    tSimple.classList.add('show');
    tGradient.classList.remove('show');
  } else {
    tSimple.classList.remove('show');
    tGradient.classList.add('show');
  }
  updatePreview();
}
document.querySelectorAll('input[name="tipoBg"]').forEach(el => {
  el.addEventListener('change', toggleBgInputs);
});
document.querySelectorAll('input[name="tipoTriggerBg"]').forEach(el => {
  el.addEventListener('change', toggleTriggerBgInputs);
});

// =========================================
// TRIGGER SWITCH (ATIVAR/DESATIVAR)
// =========================================
const toggleTriggerInput = document.getElementById('toggle-trigger');
const triggerConfigBloco = document.getElementById('trigger-config-bloco');
toggleTriggerInput.addEventListener('change', function() {
  if (this.checked) {
    triggerConfigBloco.style.display = 'block';
  } else {
    triggerConfigBloco.style.display = 'none';
  }
  updatePreview();
});

// =========================================
// PRÉ-VISUALIZAÇÃO DO CARD
// =========================================
function updatePreview() {
  const titulo = document.getElementById('titulo-card').value || 'Título do Card';
  const corTitulo = document.getElementById('cor-titulo').value;
  const posTitulo = document.querySelector('input[name="posTitulo"]:checked').value;
  const icone = icons[selectedIconIndex] || '';
  const tipoValor = document.querySelector('input[name="tipoValor"]:checked').value;
  const bgType = document.querySelector('input[name="tipoBg"]:checked').value;

  let bgStyle = '';
  if (bgType === 'simple') {
    const cor1 = document.getElementById('cor1').value;
    bgStyle = `background: ${cor1};`;
  } else {
    const corG1 = document.getElementById('cor-grad1').value;
    const corG2 = document.getElementById('cor-grad2').value;
    const deg = document.getElementById('rotacao').value;
    bgStyle = `background: linear-gradient(${deg}deg, ${corG1}, ${corG2});`;
  }

  // Valor de Exemplo (Fake)
  let valorExemplo = '';
  switch (tipoValor) {
    case 'percent': valorExemplo = '75%'; break;
    case 'bytes': valorExemplo = '234 MB'; break;
    case 'uptime': valorExemplo = '3D 10:44:33'; break;
    case 'integer': valorExemplo = '18'; break;
    case 'float': valorExemplo = '99.45'; break;
    default: valorExemplo = 'N/A';
  }

  // Posição do Título
  const alignTitle = posTitulo === 'right' ? 'right' : 'left';

  // Monta HTML Preview
  // console.log(bgStyle = `background: red;`)
  const htmlPreview = `
    <div class="container" style="max-width: 340px; min-width: 340px">
      <div class="card" style="${bgStyle} min-height:130px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.15); display:flex; flex-direction:column; justify-content:space-between;">
        <span style="color: ${corTitulo}; text-align:${alignTitle}; display:block; font-weight:600; font-size:15px; padding: 5px 10px 10px 10px">${titulo}</span>
        <div style="display: flex; align-items: end; justify-content: space-between;">
          <img src="${icone}" style="width:40px; padding:10px 5px;">
          <h3 style="font-size:20px; color: ${corTitulo}; padding: 0 10px 10px 0; font-weight: bold;">${valorExemplo}</h3>
        </div>
      </div>
    </div>
  `;
  document.getElementById('preview-area').innerHTML = htmlPreview;
}

// =========================================
// LISTENERS GERAIS
// =========================================
window.addEventListener('DOMContentLoaded', function () {
  renderIcons();
  toggleTriggerInput.checked = false;
  triggerConfigBloco.style.display = 'none';
  toggleBgInputs();
  toggleTriggerBgInputs();
  updatePreview();
});
document.querySelectorAll('#card-config-form input, #card-config-form select').forEach(el => {
  el.addEventListener('input', updatePreview);
  el.addEventListener('change', updatePreview);
});

// =========================================
// GERAR CÓDIGO FONTE
// =========================================
document.getElementById('btn-gerar-codigo').addEventListener('click', gerarCodigoFonte);

function gerarCodigoFonte() {
  // Coleta as Opções do Usuário
  const titulo = document.getElementById('titulo-card').value || 'Título do Card';
  const corTitulo = document.getElementById('cor-titulo').value;
  const posTitulo = document.querySelector('input[name="posTitulo"]:checked').value;
  const icone = icons[selectedIconIndex] || '';
  const tipoValor = document.querySelector('input[name="tipoValor"]:checked').value;

  const bgType = document.querySelector('input[name="tipoBg"]:checked').value;
  let bgCss = '';
  if (bgType === 'simple') {
    const cor1 = document.getElementById('cor1').value;
    bgCss = `background: ${cor1};`;
  } else {
    const corG1 = document.getElementById('cor-grad1').value;
    const corG2 = document.getElementById('cor-grad2').value;
    const deg = document.getElementById('rotacao').value;
    bgCss = `background: linear-gradient(${deg}deg, ${corG1}, ${corG2});`;
  }

  // Configurações da Trigger
  const triggerAtivado = document.getElementById('toggle-trigger').checked;
  let triggerBgType = 'simple';
  let triggerBgCss = '';
  let triggerOp = '';
  let triggerVal = '';
  let triggerCond = '';
  if (triggerAtivado) {
    triggerBgType = document.querySelector('input[name="tipoTriggerBg"]:checked').value;
    if (triggerBgType === 'simple') {
      const tcor1 = document.getElementById('trigger-cor1').value;
      triggerBgCss = `background: ${tcor1};`;
    } else {
      const tcorG1 = document.getElementById('trigger-cor-grad1').value;
      const tcorG2 = document.getElementById('trigger-cor-grad2').value;
      const tdeg = document.getElementById('trigger-rotacao').value;
      triggerBgCss = `background: linear-gradient(${tdeg}deg, ${tcorG1}, ${tcorG2});`;
    }
    triggerOp = document.getElementById('trigger-compare').value;
    triggerVal = document.getElementById('trigger-value').value;
    switch (triggerOp) {
      case 'eq': triggerCond = `lastValue == ${triggerVal}`; break;
      case 'gte': triggerCond = `lastValue >= ${triggerVal}`; break;
      case 'lte': triggerCond = `lastValue <= ${triggerVal}`; break;
      case 'neq': triggerCond = `lastValue != ${triggerVal}`; break;
      default: triggerCond = `lastValue >= ${triggerVal}`;
    }
  }

  // Posição do Título
  const alignTitle = posTitulo === 'right' ? 'right' : 'left';

  // IDs Únicos Para Cada Card 
  const uniqueId = `card_${Math.random().toString(36).substr(2, 6)}`;

  // Gera Código HTML
  const htmlCode = `
<div class="container">
  <div id="${uniqueId}" class="card">
    <span id="title" style="color: ${corTitulo}; text-align: ${alignTitle};">${titulo}</span>
    <div>
      <img id="icon" src="${icone}" />
      <h3 id="value">N/A</h3>
    </div>
  </div>
</div>
`.trim();

  // Gera Código CSS
  let cssCode = `
.container {
  display: flex;
  width: 100%;
  max-width: 2000px;
  overflow: hidden;
}
.card {
  ${bgCss}
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  width: 100%;
  height: 100%;
  padding: 7px;
  margin: -7px;
  top: 0;
  left: 0;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  transition: background 0.3s;
}
${triggerAtivado ? `.card.trigger { ${triggerBgCss} }` : ""}
.card span {
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;
  color: ${corTitulo};
  padding: 5px 10px 10px 10px;
  text-align: ${alignTitle};
}
.card > div {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
}
.card h3 {
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 31px;
  text-align: end;
  color: ${corTitulo};
  padding: 0px 10px 10px 0px;
}
img {
  width: 40px;
  padding: 10px;
}
* {
  padding: 0;
  margin: 0;
}
`.trim();

  // Gera Código JS
  let jsCode = '';
  let triggerCondUptime = '';
  if (triggerAtivado) {
    triggerCondUptime = triggerCond.replace(/lastValue/g, 'totalSeconds');
  }
  if (tipoValor === 'percent') {
    jsCode = `
const cardValue = htmlNode.getElementById('value');
const card = htmlNode.getElementById('${uniqueId}');
const valueField = data.series[0]?.fields[1];
if (cardValue && valueField) {
  const length = valueField.values.length;
  if (length > 0) {
    const lastValue = valueField.values.get(length - 1);
    cardValue.textContent = lastValue.toFixed(2) + "%";
    // TRIGGER
    card.classList.remove('trigger');
    ${triggerAtivado ? `if (${triggerCond}) { card.classList.add('trigger'); }` : ""}
  }
}
    `.trim();
  } else if (tipoValor === 'bytes') {
    jsCode = `
function formatValue(value, decimalPlaces = 2) {
  return value.toFixed(decimalPlaces);
}
function convertBytes(value) {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let index = 0;
  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index++;
  }
  return \`\${formatValue(value)} \${units[index]}\`;
}
const cardValue = htmlNode.getElementById('value');
const card = htmlNode.getElementById('${uniqueId}');
const valueField = data.series[0]?.fields[1];
if (cardValue && valueField) {
  const length = valueField.values.length;
  if (length > 0) {
    const lastValue = valueField.values.get(length - 1);
    cardValue.textContent = convertBytes(lastValue);
    // TRIGGER
    card.classList.remove('trigger');
    ${triggerAtivado ? `if (${triggerCond}) { card.classList.add('trigger'); }` : ""}
  }
}
    `.trim();
  } else if (tipoValor === 'uptime') {
    jsCode = `
const uptime = htmlNode.getElementById('value');
const card = htmlNode.getElementById('${uniqueId}');
const valueField = data.series[0]?.fields[1];
if (uptime && valueField) {
  const length = valueField.values.length;
  const totalSeconds = valueField.values.get(length - 1);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const formattedUptime = \`\${days}D \${hours.toString().padStart(2, '0')}:\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
  uptime.textContent = formattedUptime;
  // TRIGGER
  card.classList.remove('trigger');
  ${triggerAtivado ? `if (${triggerCondUptime}) { card.classList.add('trigger'); }` : ""}
}
    `.trim();
  } else if (tipoValor === 'integer') {
    jsCode = `
const cardValue = htmlNode.getElementById('value');
const card = htmlNode.getElementById('${uniqueId}');
const valueField = data.series[0]?.fields[1];
if (cardValue && valueField) {
  const length = valueField.values.length;
  if (length > 0) {
    const lastValue = valueField.values.get(length - 1);
    cardValue.textContent = lastValue.toFixed(0);
    // TRIGGER
    card.classList.remove('trigger');
    ${triggerAtivado ? `if (${triggerCond}) { card.classList.add('trigger'); }` : ""}
  }
}
    `.trim();
  } else if (tipoValor === 'float') {
    jsCode = `
const cardValue = htmlNode.getElementById('value');
const card = htmlNode.getElementById('${uniqueId}');
const valueField = data.series[0]?.fields[1];
if (cardValue && valueField) {
  const length = valueField.values.length;
  if (length > 0) {
    const lastValue = valueField.values.get(length - 1);
    cardValue.textContent = lastValue.toFixed(2);
    // TRIGGER
    card.classList.remove('trigger');
    ${triggerAtivado ? `if (${triggerCond}) { card.classList.add('trigger'); }` : ""}
  }
}
    `.trim();
  }

  // Exibe Comentário de Assinatura em CSS e JS
  const comentarioAssinatura = `
/* Obrigado por usar o HTML Graphics Generator
   Created By Mateus Domingos
   www.linkedin.com/in/mathews-domingos/
*/
`.trim();

  // Mostra o Código gerado
  document.getElementById('code-html').value = htmlCode;
  document.getElementById('code-css').value = cssCode + "\n\n" + comentarioAssinatura;
  document.getElementById('code-js').value = jsCode + "\n\n" + comentarioAssinatura;

}

// =========================================
// BOTÕES DE COPIAR CÓDIGO
// =========================================
function copiarCodigo(tipo) {
  let code = '';
  if (tipo === 'html') code = document.getElementById('code-html').value;
  if (tipo === 'css') code = document.getElementById('code-css').value;
  if (tipo === 'js') code = document.getElementById('code-js').value;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      mostrarAvisoCopiado(tipo);
    });
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    mostrarAvisoCopiado(tipo);
  }
}

function mostrarAvisoCopiado(tipo) {
  const btn = document.querySelector(`button[onclick="copiarCodigo('${tipo}')"]`);
  const original = btn.textContent;
  btn.textContent = "Copiado!";
  btn.classList.add("btn-success");
  setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove("btn-success");
  }, 1200);
}


