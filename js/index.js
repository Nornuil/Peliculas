const checkEstreno = document.getElementById("checkEstreno");
const checkPopular = document.getElementById("checkPopular");
const checkRanking = document.getElementById("checkRanking");


checkEstreno.addEventListener("change", function () {
  acumulador = "";
  if (this.checked) {
    // Checkbox is checked..
    sessionStorage.setItem("peliculas", "peliculasEstreno");
    renderizar(peliculasEstreno);
  } else {
    // Checkbox is not checked..
    // console.log(cartelera);
    sessionStorage.setItem("peliculas", "cartelera");
    renderizar(cartelera);
  }
});

checkPopular.addEventListener("change", function () {
  acumulador = "";
  if (this.checked) {
    // Checkbox is checked..
    sessionStorage.setItem("peliculas", "peliculasPopulares");
    renderizar(peliculasPopulares);
  } else {
    // Checkbox is not checked..
    // console.log(cartelera);
    sessionStorage.setItem("peliculas", "cartelera");
    renderizar(cartelera);
  }
});

checkRanking.addEventListener("change", function () {
  acumulador = "";
  if (this.checked) {
    // Checkbox is checked..
    sessionStorage.setItem("peliculas", "peliculasTopRated");
    renderizar(peliculasTopRated);
  } else {
    // Checkbox is not checked..
    // console.log(cartelera);
    sessionStorage.setItem("peliculas", "cartelera");
    renderizar(cartelera);
  }
});






 


