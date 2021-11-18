const btnFavoritos = $('#favoritos');
const inputContenedor= $('#input-contenedor');
const contenedorCantidad = $("#contenedor-cantidad");
const cantidadFavoritos = document.getElementById("cantidad-favoritos");
const contenedor2 = $("#contenedor2");
const favoritosID = [];
const peliculasFavoritas = [];
const contenedorInicial = $("#contenedor");
const contenedorFavoritos = $("#contenedor2");
let contador = 0;
let arrayPushFavoritos = [];
let favoritosIDArray = JSON.parse(localStorage.getItem('favoritosID'));

btnFavoritos.on("click",function() {
  // fadeToggle();
  fadeIntercalador();
  let listaID = JSON.parse(localStorage.getItem('favoritosID'))
    for (const id of listaID) {        
        if ((peliculasFavoritas.find(pelicula => pelicula.id == id)) == null) {            
            peliculasFavoritas.push(cartelera.find(pelicula => pelicula.id == id));
        }
    }
    // console.log(peliculasFavoritas);
    renderizarFavoritos(peliculasFavoritas);
});

function guardarFavoritos(id) {
  if (favoritosID.find((idFavorito) => idFavorito == id) == null) {
    favoritosID.push(id);
    contenedorCantidad.css({display: "flex"});
    cantidadFavoritos.textContent = favoritosID.length;

    // arrayPushFavoritos.push(favoritosID);
    // arrayPushFavoritos.push(cartelera.find(pelicula => pelicula.id == id))
    localStorage.setItem('favoritosID', JSON.stringify(favoritosID));
  } else {
    alert("repetido");//MEJORAR
  }
}

function renderizarFavoritos(peliculas) {
  // localStorage.setItem("favoritos", JSON.stringify(peliculas));
  // contenedor.style.display = "none";
  contenedor2.empty();
  // contenedor2.css({ display: "flex" });
  for (const pelicula of peliculas) {
    contenedor2.append(`
                      <div class="contenedorFavorito">
                        <h3 class="tituloFavorito">${pelicula.titulo}</h3>
                        <img src="${imgBaseURL + pelicula.imagenFondo}" class="posterFavorito" alt="poster">
                        <p class="reumenFavorito">${pelicula.resumen}</p>
                      </div>`);
  }
}

function fadeIntercalador() {
  if (contador == 0) {
    contador = 1;
    contenedorInicial.fadeToggle(function () {
      inputContenedor.fadeToggle();
      contenedorFavoritos.fadeToggle();
      contenedorFavoritos.toggleClass("contenedor2Flex");
    });
  } else {
    inputContenedor.fadeToggle();
    contador = 0;
    contenedorFavoritos.fadeToggle(function () {
      // inputContenedor.fadeToggle();
      contenedorInicial.fadeToggle();
      contenedorFavoritos.toggleClass("contenedor2Flex");
    });
  }
}