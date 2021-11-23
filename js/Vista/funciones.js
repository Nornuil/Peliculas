function mostrarCategoria(nombreCategoria) {
    switch (nombreCategoria) {
      case "checkTodos":
        contenedorCartelera.style.display = "flex";
        contenedorEstreno.style.display = "none";
        contenedorPopular.style.display = "none";
        contenedorTopRated.style.display = "none";
        break;
      case "checkEstreno":
        contenedorEstreno.style.display = "flex";
        contenedorPopular.style.display = "none";
        contenedorTopRated.style.display = "none";
        contenedorCartelera.style.display = "none";
        filtrar.value = "";
        break;
      case "checkPopular":
        contenedorPopular.style.display = "flex";
        contenedorEstreno.style.display = "none";
        contenedorTopRated.style.display = "none";
        contenedorCartelera.style.display = "none";
        filtrar.value = "";
        break;
      case "checkRanking":
        contenedorTopRated.style.display = "flex";
        contenedorEstreno.style.display = "none";
        contenedorPopular.style.display = "none";
        contenedorCartelera.style.display = "none";
        filtrar.value = "";
        break;
  
      default:
        contenedorCartelera.style.display = "flex";
        contenedorEstreno.style.display = "none";
        contenedorPopular.style.display = "none";
        contenedorTopRated.style.display = "none";
        break;
    }
  }

function fadeIntercalador() {
if (contador == 0) {
    contador = 1;
    contenedorInicial.fadeToggle(function () {
    inputContenedor.fadeToggle();
    contenedorFavoritos.fadeToggle();
    contenedorFavoritos.toggleClass("contenedor2Flex");
    });
} else {
    inputContenedor.fadeToggle();
    contador = 0;
    contenedorFavoritos.fadeToggle(function () {
    contenedorInicial.fadeToggle();
    contenedorFavoritos.toggleClass("contenedor2Flex");
    });
}
}

function insertarEventoAgregar(buttons) {
  contadorEvento += 1;
  if (contadorEvento == 3) {
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        guardarFavoritos(button.id);
        button.style.display = "none";
      });
    });
  }
}

function insertarEventoQuitar(buttons) {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      quitarFavoritos(button.id);
    })
  })
}

function renderizarCantidad() {
  arrayId = localStorageGet();
  cantidadFavoritos.textContent = arrayId.length;
}

function quitarCard(id) {
  let card = document.getElementById(`${id}`);
  card.style.display = "none";
  mostrarBtnGuardar(id);
}

function mostrarBtnGuardar(id) {
  let btnAgregar2 = $(`div#contenedor a#${id}.btnAgregar`)
  btnAgregar2.show();
}