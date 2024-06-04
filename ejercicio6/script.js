const divPadre = document.getElementById('divPadre');
const selecDireccion = document.getElementById('selectorDireccion')
const selecJustificado = document.getElementById('selectorJustificado');
const selecAlineado = document.getElementById('selectorAlineado');

selecDireccion.addEventListener('change', actualizarFlex);
selecJustificado.addEventListener('change', actualizarFlex);
selecAlineado.addEventListener('change', actualizarFlex);


function actualizarFlex() {
  const direccion = selecDireccion.value;
  const justificado = selecJustificado.value;
  const alineado = selecAlineado.value;
  divPadre.style.flexDirection = direccion;
  divPadre.style.justifyContent = justificado;
  divPadre.style.alignItems = alineado;
}
