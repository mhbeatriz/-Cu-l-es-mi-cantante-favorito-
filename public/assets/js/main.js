"use strict";
//const
const btn = document.querySelector(".js-play-button");
const singers = document.querySelector(".js-select");
const message = document.querySelector(".js-message");

function MessageFuntionhandler() {
  message.classList.remove("red");
  if (singers.value === "berry") {
    message.innerHTML = "No tiene pinta de estar entre las carreras de letras.";
  }
  if (singers.value === "bowie") {
    message.innerHTML = "No tiene pinta de estar entre las carreras de letras.";
  }
  if (singers.value === "mercury") {
    message.innerHTML = "Vas por buen camino.";
  }
  if (singers.value === "hendrix") {
    message.innerHTML = "";
    bestGuitarPlayer();
  }
  if (singers.value === "cohen") {
    message.innerHTML = "No creo que tenga que ver con lo visual";
  }
}
btn.addEventListener("click", MessageFunctionHandler);
const newWindows = document.querySelector(".js-new-windows");

function bestGuitarPlayer() {
  newWindows.innerHTML = `<div class="message">
  <div class="message__container">
      <h2 class="message__title">Cómo no iba a ser el!!!</h2>
  </div>
  <div class="messasge__img-title-container">
      <div class="titlle-container">
          <h2 class="message__artist">Jimmy Hendrix</h2>
      </div>
      <div class="message-container">
          <p class="message__artist-history">
              Jimmy Hendrix es considerado el mejor guitarrista de la historia de la música
          </p>
      </div>
  </div>
  <input type="button" class="button__play-again js-button-play-again" value="Vuelve a jugar" />
</div>`;

  eventReturn();
}

function eventReturn() {
  const isTrue = document.querySelector(".message");
  const playAgain = document.querySelector(".js-button-play-again");
  function playAgain() {
    isTrue.classList.add("none");
  }
  playAgain.addEventListener("click", playAgain);
}

//# sourceMappingURL=main.js.map
