const btnFavoritos = document.getElementById("favoritos");
const contenedorCantidad = document.getElementById("contenedor-cantidad")
const cantidadFavoritos = document.getElementById("cantidad-favoritos");
const favoritosID = [];
const peliculasFavoritas = [];


btnFavoritos.addEventListener("click", function() {

    for (const id of favoritosID) {        
        if ((peliculasFavoritas.find(pelicula => pelicula.id == id)) == null) {            
            peliculasFavoritas.push(cartelera.find(pelicula => pelicula.id == id));
            console.log(peliculasFavoritas);
        }else { console.log(peliculasFavoritas);}
    }
});

function guardarFavoritos(id) {
  if (favoritosID.find((idFavorito) => idFavorito == id) == null) {
    favoritosID.push(id);
    contenedorCantidad.style.display = "flex";
    cantidadFavoritos.textContent = favoritosID.length;
  } else {
    alert("repetido");//MEJORAR
  }
}