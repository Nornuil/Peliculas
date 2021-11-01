const peliculasEstreno = [];
const peliculasPopulares = [];
const peliculasTopRated = [];
const imgBaseURL = "https://image.tmdb.org/t/p/original";
sessionStorage.setItem("peliculas", "cartelera");

class Pelicula {
  constructor(id, titulo, imagenFondo, resumen, estreno) {
    this.id = parseInt(id);
    this.titulo = titulo;
    this.imagenFondo = imagenFondo;
    this.resumen = resumen;
    this.estreno = estreno;
  }
}
ApiEstreno();
ApiPopular();
ApiTopRated();

function ApiEstreno() {
  let settings = {
    url: "https://api.themoviedb.org/3/movie/upcoming?api_key=64f3df03e7560e9c130ff04d853af342",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    for (let i = 0; i < response.results.length; i++) {
      peliculasEstreno.push(
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
    renderizar(peliculasEstreno);
  });
}

function ApiPopular() {
  let settings = {
    url: "https://api.themoviedb.org/3/movie/popular?api_key=64f3df03e7560e9c130ff04d853af342&language=en-US&page=1",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    for (let i = 0; i < response.results.length; i++) {
      peliculasPopulares.push(
        new Pelicula(
          response.results[i].id,
          response.results[i].title,
          response.results[i].backdrop_path,
          response.results[i].overview,
          response.results[i].release_date
        )
      );
      //   console.log(response.results[i].title);
    }
    // console.log(peliculas.length);
    renderizar(peliculasPopulares);
  });
}

function ApiTopRated() {
  let settings = {
    url: "https://api.themoviedb.org/3/movie/top_rated?api_key=64f3df03e7560e9c130ff04d853af342&language=en-US&page=1",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    for (let i = 0; i < response.results.length; i++) {
      peliculasTopRated.push(
        new Pelicula(
          response.results[i].id,
          response.results[i].title,
          response.results[i].backdrop_path,
          response.results[i].overview,
          response.results[i].release_date
        )
      );
      //   console.log(response.results[i].title);
    }
    // console.log(peliculas.length);
    renderizar(peliculasTopRated);
  });
}
