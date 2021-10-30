const checkEstreno = document.getElementById("checkEstreno");
const checkPopular = document.getElementById("checkPopular");
const checkRanking = document.getElementById("checkRanking");
const checkTodos = document.getElementById("checkTodos");
let estrenoPopular = [];
let estrenoTopRated = [];
let popularTopRated = [];
estrenoPopular = peliculasEstreno.concat(peliculasPopulares);

checkTodos.addEventListener("change", function () {
  filtrar.value = "";
  acumulador = "";
  if (this.checked) {
    // Checkbox is checked..
    sessionStorage.setItem("peliculas", "cartelera");
    renderizar(cartelera);
  }
});

checkEstreno.addEventListener("change", function () {
  filtrar.value = "";
  acumulador = "";
  if (this.checked) {
    // Checkbox is checked..
    sessionStorage.setItem("peliculas", "peliculasEstreno");
    renderizar(peliculasEstreno);
  }
});

checkPopular.addEventListener("change", function () {
  filtrar.value = "";
  acumulador = "";
  if (this.checked) {
    sessionStorage.setItem("peliculas", "peliculasPopulares");
    renderizar(peliculasPopulares);
  }
});

checkRanking.addEventListener("change", function () {
  filtrar.value = "";
  acumulador = "";
  if (this.checked) {
    // Checkbox is checked..
    sessionStorage.setItem("peliculas", "peliculasTopRated");
    renderizar(peliculasTopRated);
  }
});
