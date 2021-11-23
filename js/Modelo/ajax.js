const URLestreno = "https://api.themoviedb.org/3/movie/upcoming?api_key=64f3df03e7560e9c130ff04d853af342";
const URLpopular ="https://api.themoviedb.org/3/movie/popular?api_key=64f3df03e7560e9c130ff04d853af342&language=en-US&page=1";
const URLtopRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=64f3df03e7560e9c130ff04d853af342&language=en-US&page=1";
const peliculasEstreno = [];
const peliculasPopulares = [];
const peliculasTopRated = [];


function ApiEstreno() {
  let settings = {
    url: URLestreno,
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
    }
    renderizarPeliculas(peliculasEstreno,contenedorEstreno);
  });
}

function ApiPopular() {
  let settings = {
    url: URLpopular,
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
    }
    renderizarPeliculas(peliculasPopulares,contenedorPopular);
  });
}

function ApiTopRated() {
  let settings = {
    url: URLtopRated,
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
    }
    renderizarPeliculas(peliculasTopRated,contenedorTopRated); 
  });
}