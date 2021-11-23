const cantidadFavoritos = document.getElementById("cantidad-favoritos");
let arrayId = [];


if (localStorage.getItem('favoritos') == null) {
    localStorage.setItem('favoritos','[]');
}

function guardarLocalStorage(id) {
    arrayId = localStorageGet();
    if (arrayId.find(Favoritas => Favoritas == id) == null) {
        arrayId.push(id);
        cantidadFavoritos.textContent = arrayId.length;
        localStorageSet(arrayId);
        alert("guardado");
      } else {
        alert("repetido");
      }
}

function quitarLocalStorage(id) {
  arrayId = localStorageGet();
  let index = arrayId.indexOf(id);
  if (index > -1) {
    arrayId.splice(index, 1);
    cantidadFavoritos.textContent = arrayId.length;
    localStorageSet(arrayId);
    alert("Quitado");
    quitarCard(id);
  } else {
    alert("Error");
  }
}

function localStorageGet() {
    return JSON.parse(localStorage.getItem('favoritos'));
}

function localStorageSet(pelicula) {
    localStorage.setItem('favoritos',JSON.stringify(pelicula));
}



