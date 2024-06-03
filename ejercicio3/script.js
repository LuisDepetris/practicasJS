function calculoPerimetro() {
  const base = parseFloat(document.getElementById("base").value)
  const altura = parseFloat(document.getElementById("altura").value)
  alert(`El perimetro total es: ${(base*2)+(altura*2)}`)
 }
 
 function calculoArea(){
    const base = parseFloat(document.getElementById("base").value)
    const altura = parseFloat(document.getElementById("altura").value)
    alert(`El Area total es: ${base*altura}`)
 }

window.onload = () => {
}