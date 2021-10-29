const contenedor = document.getElementById("contenedor");
let filtrar = document.getElementById("palabraFiltrar");
let acumulador = "";
let cartelera = [];

function renderizar(peliculas) {
  // cartelera.push(peliculas);
  for (const pelicula of peliculas) {
    acumulador += `
                      <div class="card">
                          <img src="${
                            imgBaseURL + pelicula.imagenFondo
                          }" class="card-img-top" alt="...">
                          <div class="card-body">
                              <h3 class="card-title">${pelicula.titulo}</h3>
                              <p class="card-text">${pelicula.resumen}</p>
                              <p class="card-text">Estreno: ${
                                pelicula.estreno
                              }</p>
                              <a href="#" class="btn btn-primary" >Comprar</a>
                          </div>
                      </div>        
                      `;
  }

  contenedor.innerHTML = acumulador;
}

filtrar.addEventListener("keyup", function () {
  cartelera = peliculasEstreno.concat(peliculasPopulares, peliculasTopRated);
  //   console.log(this.value);
  //   console.log(cartelera[0].titulo);
  let filtrado = cartelera.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(this.value.toLowerCase())
  );
  //   console.log(filtrado);
  acumulador = "";
  renderizar(filtrado);
});
