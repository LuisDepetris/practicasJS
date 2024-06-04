const nombres = ["Luis","Jose", "Tiago", "Benja"]
const listado = document.getElementById('listado')

// for(let i = 0; i < nombres.length; i++){
//   const listadoHijo = document.createElement('li');
//   listadoHijo.textContent = nombres[i];
//   listado.appendChild(listadoHijo);
// }

nombres.forEach(function(elemento){
  const listadoHijo = document.createElement('li');
  listadoHijo.textContent = elemento;
  listado.appendChild(listadoHijo);
})