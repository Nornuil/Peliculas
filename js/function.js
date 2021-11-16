const contenedor = document.getElementById("contenedor");
let filtrar = document.getElementById("palabraFiltrar");
let acumulador = "";
let cartelera = [];
let arrayID = [];
let carteleraFiltrada = [];
let contadorCartelera = 0;


function filtrarCartelera() {

  for (const pelicula of cartelera) {
    arrayID.push(pelicula.id);     
  }
  dataArr = new Set(arrayID);
  let idFiltrado = [...dataArr];
  // console.log(idFiltrado);
  
  for (const id of idFiltrado) {
    carteleraFiltrada.push(cartelera.find(pelicula => pelicula.id == id));
    }
    // console.log(carteleraFiltrada);
      
}


  function renderizar(peliculas) {
    contadorCartelera += 1;
    //filtrar por id para no repetir
    cartelera = peliculasEstreno.concat(peliculasPopulares, peliculasTopRated);
    if (contadorCartelera == 3) {
      filtrarCartelera();
      
    }
  // console.log(cartelera);
  
  

  // for (let i = 0; i < cartelera.length; i++) {
  //   const element = cartelera[i].id;
  //   console.log(cartelera.find(peliculaRepetida => peliculaRepetida.id == element));
    
  // }
 

  estrenoTopRated = peliculasEstreno.concat(peliculasTopRated);
  popularTopRated = peliculasPopulares.concat(peliculasTopRated);
        
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
                              <p class="card-text">Estreno: ${pelicula.estreno}</p>
                              <a href="#" class="btn btn-primary" id="${pelicula.id}" name="btnComprar">Guardar</a>
                          </div>
                      </div>        
                      `;
  }

  contenedor.innerHTML = acumulador;
  //   cartelera = cartelera.concat(peliculas);
  const buttons = document.querySelectorAll('a.btn');
  
  // console.log(buttons);
  
  // buttons.forEach(button => {
  //     button.addEventListener('click', () => console.log(`Clicked! ${button.id}`));
  // });

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {e.preventDefault(); guardarFavoritos(button.id); button.style.display = 'none'});
});
  
}



filtrar.addEventListener("keyup", function () {
//   cartelera = peliculasEstreno.concat(peliculasPopulares, peliculasTopRated);
  //   console.log(this.value);
  //   console.log(cartelera[0].titulo);
  let filtrado;
    switch (sessionStorage.getItem("peliculas")) {
      case "cartelera":
        filtrado = carteleraFiltrada.filter((pelicula) =>
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
});
