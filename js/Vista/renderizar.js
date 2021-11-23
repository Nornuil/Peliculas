const imgBaseURL = "https://image.tmdb.org/t/p/original";
let acumulador = "";
let contadorEvento = 0;
const contenedor = document.getElementById("contenedor");
const contenedorEstreno = document.getElementById("contenedorEstreno");
const contenedorPopular = document.getElementById("contenedorPopular");
const contenedorTopRated = document.getElementById("contenedorTopRated");
const btnFavoritos = $("#favoritos");
const contenedorInicial = $("#contenedor");
const contenedorFavoritos = $("#contenedor2");
const inputContenedor = $("#input-contenedor");
const contenedor2 = document.getElementById("contenedor2");
const filtrar = document.getElementById("palabraFiltrar");
const radioTodos = document.getElementById("checkTodos");
const rbs = document.querySelectorAll('input[name="peliculas"]');

function renderizar(peliculas, contenedorPadre) {
  //filtrar por id para no repetir
  acumulador = "";
  for (const pelicula of peliculas) {
    acumulador += `
                      <div class="card" id="${pelicula.id}">
                          <img src="${
                            imgBaseURL + pelicula.imagenFondo
                          }" class="card-img-top" alt="...">
                          <div class="card-body">
                              <h3 class="card-title">${pelicula.titulo}</h3>
                              <p class="card-text">${pelicula.resumen}</p>
                              <p class="card-text">Estreno: ${
                                pelicula.estreno
                              }</p>
                              <a href="#" class="btn btn-primary btnAgregar" id="${pelicula.id}" name="btnComprar">Guardar</a>
                              <a href="#" class="btn btn-primary btnQuitar" id="${pelicula.id}" name="btnBorrar">Quitar</a>
                            </div>
                      </div>        
                      `;
  }

  contenedorPadre.innerHTML = acumulador;
  const btnAgregar = document.querySelectorAll("a.btnAgregar");
  const btnQuitar = document.querySelectorAll("a.btnQuitar");
  insertarEventoAgregar(btnAgregar);
  insertarEventoQuitar(btnQuitar);

  btnAgregar.forEach((button) => {
    if (arrayId.find((Favoritas) => Favoritas == button.id)) {
      button.style.display = "none";
    }
  });
  renderizarCantidad();  
}

rbs.forEach((radioButton) => {
  radioButton.addEventListener("change", function () {
    if (this.checked) {
      mostrarCategoria(this.id);
    }
  });
});

btnFavoritos.on("click", function () {
  // fadeToggle();
  let peliculasFavoritas = [];
  fadeIntercalador();
  let listaID = JSON.parse(localStorage.getItem("favoritos"));
  for (const id of listaID) {
    peliculasFavoritas.push(cartelera.find((pelicula) => pelicula.id == id));
  }
  renderizar(peliculasFavoritas, contenedor2);
});

filtrar.addEventListener("keyup", function () {
  let filtrado;
  filtrado = carteleraFiltrada.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(this.value.toLowerCase())
  );
  acumulador = "";
  mostrarCategoria("checkTodos");
  radioTodos.checked = true;
  renderizar(filtrado, contenedorCartelera);
});