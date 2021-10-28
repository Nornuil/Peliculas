let main = document.getElementById("main");
let filtrar = document.getElementById("palabraFiltrar");
const peliculas = [];

class Pelicula {
  constructor(id, titulo, imagenFondo, resumen, estreno) {
    this.id = parseInt(id);
    this.titulo = titulo;
    this.imagenFondo = imagenFondo;
    this.resumen = resumen;
    this.estreno = estreno;
  }
}
const imgBaseURL = "https://image.tmdb.org/t/p/original";
const contenedor = document.getElementById("contenedor");

let settings = {
  url: "https://api.themoviedb.org/3/movie/upcoming?api_key=64f3df03e7560e9c130ff04d853af342",
  method: "GET",
  timeout: 0,
};

$.ajax(settings).done(function (response) {
  for (let i = 0; i < response.results.length; i++) {
    peliculas.push(
      new Pelicula(
        response.results[i].id,
        response.results[i].title,
        response.results[i].backdrop_path,
        response.results[i].overview,
        response.results[i].release_date
      )
    );

    // console.log(response.results[i].title);
  }
  // console.log(peliculas.length);

  renderizar(peliculas);

  filtrar.addEventListener("keyup", function () {
    // console.log(this.value);
    let filtrado = peliculas.filter((pelicula) =>
      pelicula.titulo.toLowerCase().includes(this.value.toLowerCase())
    );
    // console.log(filtrado);
    renderizar(filtrado);
  });
});

function renderizar(peliculas) {
  let acumulador = "";
  for (const pelicula of peliculas) {
    // console.log(pelicula);
    acumulador += `
                <div class="card">
                    <img src="${
                      imgBaseURL + pelicula.imagenFondo
                    }" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${pelicula.titulo}</h3>
                        <p class="card-text">${pelicula.resumen}</p>
                        <p class="card-text">Estreno: ${pelicula.estreno}</p>
                        <a href="#" class="btn btn-primary" >Comprar</a>
                    </div>
                </div>        
                `;
  }
  contenedor.innerHTML = acumulador;
}
