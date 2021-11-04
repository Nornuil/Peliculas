const btnFavoritos = document.getElementById("favoritos");
const contenedorCantidad = document.getElementById("contenedor-cantidad")
const cantidadFavoritos = document.getElementById("cantidad-favoritos");
const favoritosID = [];


btnFavoritos.addEventListener("click", function() {

    console.log("favorito");
});

function favoritos(id){
    favoritosID.push(id);
    contenedorCantidad.style.display = "flex";
    cantidadFavoritos.textContent = favoritosID.length;
}