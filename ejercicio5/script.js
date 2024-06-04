const parrafo = document.getElementById('parrafo');
const colorTextoSelect = document.getElementById('selectorTexto');
const colorFondoSelect = document.getElementById('selectorFondo');

colorTextoSelect.addEventListener('change', actualizarColor);
colorFondoSelect.addEventListener('change', actualizarColor);

function actualizarColor() {
  const colorTexto = colorTextoSelect.value;
  const colorFondo = colorFondoSelect.value;
  parrafo.style.color = colorTexto;
  parrafo.style.backgroundColor = colorFondo;
}
