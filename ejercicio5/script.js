window.onload = () => {
      document.getElementById("botonModificar").addEventListener('click', () => {
        parrafo.innerHTML = document.getElementById("texto").value;
      });
}