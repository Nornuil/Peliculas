const contenedor = document.getElementById("contenedor");
let filtrar = document.getElementById("palabraFiltrar");
let acumulador = "";
let cartelera = [];

function renderizar(peliculas) {
    cartelera = peliculasEstreno.concat(peliculasPopulares, peliculasTopRated);
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
//   cartelera = cartelera.concat(peliculas);
}

filtrar.addEventListener("keyup", function () {
//   cartelera = peliculasEstreno.concat(peliculasPopulares, peliculasTopRated);
  //   console.log(this.value);
  //   console.log(cartelera[0].titulo);
  let filtrado;
    switch (sessionStorage.getItem("peliculas")) {
      case "cartelera":
        filtrado = cartelera.filter((pelicula) =>
          pelicula.titulo.toLowerCase().includes(this.value.toLowerCase())
        );
        acumulador = "";
        renderizar(filtrado);
        break;
      case "peliculasEstreno":
        filtrado = peliculasEstreno.filter((pelicula) =>
          pelicula.titulo.toLowerCase().includes(this.value.toLowerCase())
        );
        acumulador = "";
        renderizar(filtrado);
        break;
      case "peliculasPopulares":
        filtrado = peliculasPopulares.filter((pelicula) =>
          pelicula.titulo.toLowerCase().includes(this.value.toLowerCase())
        );
        acumulador = "";
        renderizar(filtrado);
        break;
      case "peliculasTopRated":
        filtrado = peliculasTopRated.filter((pelicula) =>
          pelicula.titulo.toLowerCase().includes(this.value.toLowerCase())
        );
        acumulador = "";
        renderizar(filtrado);
        break;

      default:
        console.log("error switch");
        break;
    }

//   if (sessionStorage.getItem("peliculas") == "cartelera") {
//       let filtrado = cartelera.filter((pelicula) =>
//         pelicula.titulo.toLowerCase().includes(this.value.toLowerCase())
//       ); 
//       acumulador = "";
//   renderizar(filtrado);     
//   }else{
//     let filtrado = peliculasEstreno.filter((pelicula) =>
//     pelicula.titulo.toLowerCase().includes(this.value.toLowerCase())
//   );
//   acumulador = "";
//   renderizar(filtrado); 
//   }
  //   console.log(filtrado);
  
});


