let carteleraFiltrada = [];
let contador = 0;
let arrayID = [];

ApiEstreno();
ApiPopular();
ApiTopRated();

function renderizarPeliculas(listaPeliculas,contenedorPadre) {
    if (contador == 2) {
        filtrarCartelera();
    }
    renderizar(listaPeliculas,contenedorPadre)
    contador += 1;
}

function guardarFavoritos(id) {
    guardarLocalStorage(id)    
}

function quitarFavoritos(id) {
  quitarLocalStorage(id)
}

function filtrarCartelera() {
  cartelera = peliculasEstreno.concat(peliculasPopulares, peliculasTopRated);
  for (const pelicula of cartelera) {
    arrayID.push(pelicula.id);
  }
  dataArr = new Set(arrayID);
  let idFiltrado = [...dataArr];

  for (const id of idFiltrado) {
    carteleraFiltrada.push(cartelera.find((pelicula) => pelicula.id == id));
  }
  renderizar(carteleraFiltrada, contenedorCartelera);
}