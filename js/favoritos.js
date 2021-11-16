const btnFavoritos = $('#favoritos');
// const btnFavoritos = document.getElementById("favoritos");
// const contenedorCantidad = document.getElementById("contenedor-cantidad");
const contenedorCantidad = $("#contenedor-cantidad");
const cantidadFavoritos = document.getElementById("cantidad-favoritos");
const contenedor2 = $("#contenedor2");
const favoritosID = [];
const peliculasFavoritas = [];
const contenedorInicial = $("#contenedor");
const contenedorFavoritos = $("#contenedor2");


btnFavoritos.on("click",function() {
  contenedorInicial.toggle(function() {
    contenedorFavoritos.toggleClass("contendor2Flex");
    
  });
    for (const id of favoritosID) {        
        if ((peliculasFavoritas.find(pelicula => pelicula.id == id)) == null) {            
            peliculasFavoritas.push(cartelera.find(pelicula => pelicula.id == id));
        }
    }
    console.log(peliculasFavoritas);
    renderizarFavoritos(peliculasFavoritas);
});

function guardarFavoritos(id) {
  if (favoritosID.find((idFavorito) => idFavorito == id) == null) {
    favoritosID.push(id);
    contenedorCantidad.css({display: "flex"});
    cantidadFavoritos.textContent = favoritosID.length;
  } else {
    alert("repetido");//MEJORAR
  }
}

function renderizarFavoritos(peliculas) {
  localStorage.setItem("favoritos", JSON.stringify(peliculas));
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