window.onload = () => {
  document.getElementById("texto").addEventListener("input", () => {
      parrafo.innerHTML = document.getElementById("texto").value;
  })
}