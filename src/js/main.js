"use strict";

const artist = document.querySelector(".js-select");
const message = document.querySelector(".js-message");
const playButton = document.querySelector(".js-play-button");

function addMessageFuntionhandler() {
  message.classList.remove("red");
  if (artist.value === "bowie") {
    message.innerHTML =
      "No es de los mejores, aunque es considerado uno de los músicos más influyentes del siglo XX 👨🏻‍🎤";
  }
  if (artist.value === "cohen") {
    message.innerHTML =
      "¡Todavía hay uno que le supera! Sus canciones, destacan particularmente por la fuerza y calidad literaria de sus letras.📝";
  }
  if (artist.value === "berry") {
    message.innerHTML =
      "¡Vas por buen camino!. Es dificil excluir a Chuck Berry ya que es uno de los padres del rock and roll 🎵";
  }
  if (artist.value === "hendrix") {
    message.innerHTML = "Quién iba a ser sino 🤟🏻";
    functionYouHaveWon();
  }
  if (artist.value === "mercury") {
    message.innerHTML =
      "¡Freddie prefería cantar!🎤No será el mejor guitarrista pero si uno de los mejores cantantes de la historia de la música";
  }

  if (artist.value === "choose") {
    message.innerHTML = "Debes escoger una artista";
  }
}

playButton.addEventListener("click", addMessageFuntionhandler);

const newWindows = document.querySelector(".js-new-windows");

function functionYouHaveWon() {
  newWindows.innerHTML = `
  <div class="container-hendrix">
  <img src="./assets/images/hendrix.png" alt="hendrix" class="hendrix"/>
  <div class="message">

     <p class="message__artist-history">
       <span class="hendrix-name">Jimi Hendrix</span> Nació en Seattle, Washington aunque encontró el éxito en Londres, que le recibió con los brazos abiertos y dónde empezó la gira con su banda <span class="band">The Jimi Hendrix Experience.</span> Hubo un momento clave en toda su carrera que lo elevó a los altares del rock y ese fue en el <span class="woodstock">Woodstock (1970)</span> y en el Festival de Monterrey en 1967 cuando prendió fuego a su blanca stratocaster 🎸 Fue un total autodidacta y quizá eso fue determinante para que fuese innovador en la música. Al igual que <span class="artists-club">Janis Joplin, Kurt Cobain y Jim Morrison</span> entre otros, él también forma parte del <span class="club">club de los 27.</span>
     </p>
     </div>
</div>
`;
  eventReturn();
}

function eventReturn() {
  const youHaveWon = document.querySelector(".message");
}
