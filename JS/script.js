
function mostrar() {
    var elemento = document.getElementById('hideText');
    if (elemento.style.display === 'none') {
      elemento.style.display = 'block';
    } else {
      elemento.style.display = 'none';
    }
  }